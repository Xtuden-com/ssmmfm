/*global define*/

define([
    'backbone', 
    'src/js/views/cluster-view', 
    'src/js/views/message-view'
],
function(Backbone, Clusterview, MessageView) {
'use strict';

    var AppView = Backbone.View.extend({
        el: '#app-content',
        subviews: {},
        
        initialize: function() {
        
            var clusterView = new ClusterView();
            this.subviews.cluster = clusterView;
            
            var messageView = MessageView();
            this.subviews.messages = messageView;
            }
            
        });
     
return AppView
       
        });
    