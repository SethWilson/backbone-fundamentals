

var app = app || {};

var TodoList = Backbone.Collection.extend({

	// Reference a model
	model: app.Todo,

	// Save all os the todo items under localStorage
	
	localStorage: new Backbone.LocalStorage('todos-backbone'),

	completed: function(){
		return this.filter(function(todo){
			return todo.get('completed');
		
		});
	},
	
	remaining: function() {
			return this.without.apply( this, this.completed() );
		
		},
	

	nextOrder: function() {
		if ( !this.length ) {
			return 1;
		}
		return this.last().get('order');
	},

 // Todos are sorted by their original insertion order.
    comparator: function( todo ) {
      return todo.get('order');
    }


});

// Create our global collection of **Todos**.
  app.Todos = new TodoList();
