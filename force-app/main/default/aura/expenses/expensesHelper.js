({
    createExpense : function(component, expense) {

        var action = component.get("c.saveExpense");
        action.setParams({
            "expense" : expense
        });

        action.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                var newExpense = response.getReturnValue();
                var expenses = component.get("v.expenses");
                expenses.push(newExpense);
                component.set("v.expenses", expenses);
            }
        });

        $A.enqueueAction(action);
    }
})
