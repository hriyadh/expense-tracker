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
    
    clickCreate : function(component, event, helper) {
        // var expenseformId = component.find('expenseform');
        // console.log(expenseformId);
        // console.log('--- This is expenseformId');
        
        var validExpense = component.find('expenseform').reduce(function (validSofar, inputCmp) {
            // Display error message for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSofar && inputCmp.get("v.validity").valid;
        }, true);

        if(validExpense) {
            var newExpense = component.get('v.newExpense');
           // console.log(JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    }
})
