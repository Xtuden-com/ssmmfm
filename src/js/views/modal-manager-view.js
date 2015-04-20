/*global define*/

define([
        'backbone',
        'underscore',
        'jquery',
        'handlebars',
        'src/js/helpers/keybindings',
        'src/js/models/issue',
        'text!src/js/templates/form-template.html'
], function(Backbone, _, $, Handlebars, Keybindings, Issue, formTemplate) {
    'use strict';

    var ModalView = Backbone.View.extend({
        el: '#modals',

        modals: {
            '$genericModal': $('#info-modal'),
            '$textInputModal': $('#input-modal'),
            '$helpModal': $('#help-modal') 
        },

        formTemplate: Handlebars.compile(formTemplate),

        openModal: false,

        initialize: function() {

            this.listenTo(Backbone, 'handleInputModal', this.closeInputModal);
            this.listenTo(Backbone, 'launchIssueModal', this.createIssue);
            this.listenTo(Backbone, 'spinWhileSubmit', this.displayWaiting);
            this.listenTo(Backbone, 'handleIssueModal', this.submitIssue);
            this.listenTo(Backbone, 'clearModals', this.clear);

            Keybindings.initActionBindings(this);
        },

        clear: function() {
            $('.modal').modal('hide');
            this.openModal = false;
        },

        createIssue: function(data) {
            var model = data;

            var $issueDisplay = this.formTemplate({value: model.get('fingerprint_value')});

            $('#info-modal .modal-body').empty();
            $('#info-modal .modal-body').append($issueDisplay);
            this.openModal = true;
            $('#info-modal').modal();

            this.modals.$genericModal.on('hidden.bs.modal', function() {
                this.openModal = false;

                if ($('#issue-input').val() === '') {
                    Backbone.trigger('replace', model);
                }
            });
        },

        displayWaiting: function() {
            $('#issueSubmitButton').empty();
            $('#issueSubmitButton').append('<span class="glyphicon glyphicon-refresh glyphicon-spin"></span>');
        },

        submitIssue: function() {

            var itemLinks = _.map($('.variant'), function(row) {
                return $(row).find('a').attr('href');
            });

            var issueBody = {
                fingerprint: $('#issue-form').data('issue'),
                description: $('#issue-input').val(),
                links: itemLinks
            };

            var issue = new Issue({
                title: 'Cluster needs review: ' + $('#issue-form').data('issue'),
                body: issueBody
            });

            issue.save(null, {
                wait: true,
                success: function(model, response) {
                    $('#issueSubmitButton').attr('disabled', 'disabled');
                    Backbone.trigger('clearModals');

                    Backbone.trigger('issueCreated', model.get('html_url'));

                    model.trigger('destroy', model);
                    $('#issueSubmitButton').empty();
                    $('#issueSubmitButton').append('Submit');

                },
                error: function(model, error) {
                    window.console.error(error);
                }
            });

        },

        closeInputModal: function() {
            var selectedVal = $('#input-modal input').val();
            if (selectedVal !== '') {
                Backbone.trigger('valueSelected', selectedVal);
                this.modals.$textInputModal.modal('hide');
                Backbone.trigger('shuffle');
            } else {
                Backbone.trigger('modalError', 'emptyInput');
            }

            this.modals.$textInputModal.on('hidden.bs.modal', function() {
                    this.openModal = false;
                    $('div#modal-message').empty();
                });
        }
    });

    return ModalView;
});