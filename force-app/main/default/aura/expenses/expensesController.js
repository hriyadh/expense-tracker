({
    doInit : function(component, event, helper) {
        var action = component.get("c.getExpenses");

        // Add callback
        action.setCallback(this, function(response) {
            var state = response.getState();

            if(state == 'SUCCESS') {
                console.log(response.getReturnValue());
                component.set("v.expenses", response.getReturnValue());
            } else {
                console.log("Failed with state: " + state);
            }
        });

        $A.enqueueAction(action);
    },

    handleUpdateExpense : function(component, event, helper) {
        var updatedExp = event.getParam("expense");
        helper.updateExpense(component, updatedExp);
    },

    handleCreateExpense : function(component, event, helper) {
        var createExp = event.getParam("expense");
        helper.createExpense(component, createExp);
    }
})
