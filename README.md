# Input/Output Angular Example #
A quick and dirty example of using `@Input` and `@Output` between nested
components in an Angular application. The folder structure and application
architecture are modeled as such:

```
app-root
  |-customer
    |-customer-detail
```

First, `CustomerComponent` is loaded, which has mocked data of a single
customer. Next, the data is pushed towards `CustomerDetailComponent` via 
`@Input()`. When a change is made in `CustomerDetailComponent`, it emits
an event that pushes the data back up to `CustomerComponent`. In a real
world application, this would modify the data via some API call; here, we
just reflect the change by updating `customer` and pushing the change back
down the pipe.
