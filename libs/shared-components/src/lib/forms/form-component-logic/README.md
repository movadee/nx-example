(I) Lazy Loading Pages


(II) Dynamically Add Components to the DOM 
  Inspired by Dave Rivera [https://medium.com/front-end-hacking/dynamically-add-components-to-the-dom-with-angular-71b0cb535286]
  We will use ViewContainerRef, which represents a container where one or more views (components) can be attached. This object is basically a $(<selector>) for Angular (DOM manipulation). Injecting this object into a Component’s constructor will give us that Component’s container and, with it, we can append a sibling Component to that container.

  Use Cases
  So, you might be wondering why you’d want to create a component from a service, don’t you? Well, you might have a process that’s running in the background, like an interval or a timeout, that needs to show a component (like an alert/notification or a modal) when certain conditions are given, and actually placing these components in a template and displaying them (or not) with a flag might bring along some other concerns like: Code duplicates, High Coupling, and your component will do things out of its purpose which implies more code (error prone).

  (II)::STEP_1 Create the Component to be dynamically added to the DOM
  (II)::STEP_2 Create a service loader to create the component
  (II)::STEP_3 Main component will inject it’s container (ViewContainerRef ) to the service
  (II)::STEP_4 Inside of app.module.ts add the dynamic components as an entryComponents. The entryComponents will create a factory so that when the ComponentFactoryResolver is called we are able to create an instance of the component and add it to the DOM


(III) Dynamically Generate Forms in the DOM


(IV) Using Service to Auto-Generate Menu Items in the Header




