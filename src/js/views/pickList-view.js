/* global define */

define([
        'backbone',
        'src/js/views/listRow-view'
], function(Backbone, RowView) {
    'use strict';
    
    var PickListView = Backbone.View.extend ({
        el: '#picker',

        initialize: function() {
            this.listenTo(Backbone, 'facetQuerySuccess', this.buildCluster);
            this.listenTo(this.collection, 'reset', this.render);

            this.$tableBody = this.$('tbody');
        },

        buildCluster: function(data) {
            var queryString = data;

            var fetchError = function(jqXHR, textStatus, errorThrown) {
                Backbone.trigger('raiseError', 'getFacetsFailed');
            };

            this.collection.fetch({
                    data: {source: queryString}, 
                    reset: true, 
                    error: fetchError}
                );

        },

        render: function() {
            this.$tableBody.empty();

            this.collection.each(this.addRow, this);
            
            if (this.collection.length == 1) {
                var model = this.collection.shift();
                $('#input-modal input').val(model.get("name_value"));
                $('#input-modal').modal();
                $('#input-modal').on('shown.bs.modal', function() {
                    $('tr.variant').blur();
                    $('input.form-control text').focus();
                });
            } else {
                $('tbody tr:first-child').focus();
            };

            return this;
            
        },

        addRow: function(dish) {
            var view = new RowView({model: dish});
            this.$tableBody.append(view.render());
        }
        
        });
        
    return PickListView;

});
        
        