export default function() {
  this.namespace = '/api';

  this.post('/timers');
  this.get('/timers');
  this.get('/timers/:id');
  this.put('/timers/:id');
  this.delete('/timers/:id');

  this.post('/events');
  this.get('/events/:id');
  this.put('/events/:id');
  this.delete('/events/:id');

  this.get('/events', function(db, request) {
    var events;
    var eventsRequest = request.queryParams.onStart;

    console.log(eventsRequest);

    if (eventsRequest !== undefined) {
      events = db.events.where({on_start: eventsRequest});
    } else {
      events = db.events;
    }

    return {
      events: events
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
   Default config
   */
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
   Route shorthand cheatsheet
   */
  /*
   GET shorthands

   // Collections
   this.get('/contacts');
   this.get('/contacts', 'users');
   this.get('/contacts', ['contacts', 'addresses']);

   // Single objects
   this.get('/contacts/:id');
   this.get('/contacts/:id', 'user');
   this.get('/contacts/:id', ['contact', 'addresses']);
   */

  /*
   POST shorthands

   this.post('/contacts');
   this.post('/contacts', 'user'); // specify the type of resource to be created
   */

  /*
   PUT shorthands

   this.put('/contacts/:id');
   this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
   */

  /*
   DELETE shorthands

   this.del('/contacts/:id');
   this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

   // Single object + related resources. Make sure parent resource is first.
   this.del('/contacts/:id', ['contact', 'addresses']);
   */

  /*
   Function fallback. Manipulate data in the db via

   - db.{collection} // returns all the data defined in /app/mirage/fixtures/{collection}.js
   - db.{collection}.find(id)
   - db.{collection}.where(query)
   - db.{collection}.update(target, attrs)
   - db.{collection}.remove(target)

   // Example: return a single object with related models
   this.get('/contacts/:id', function(db, request) {
   var contactId = +request.params.id;
   var contact = db.contacts.find(contactId);
   var addresses = db.addresses
   .filterBy('contact_id', contactId);

   return {
   contact: contact,
   addresses: addresses
   };
   });

   */
}
