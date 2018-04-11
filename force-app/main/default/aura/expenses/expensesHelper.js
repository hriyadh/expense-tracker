({
    
    saveExpense : function(component, expense, callback) {
        var action = component.get("c.saveExpense");
        action.setParams({
            "expense" : expense
        });
        
        if(callback) {
            action.setCallback(this, callback);
        }

        $A.enqueueAction(action);
    },
    
    createExpense : function(component, expense) {

        this.saveExpense(component, expense, function(response) {
            var state = response.getState();            
            if(state === 'SUCCESS') {
                var expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }
        });

        // var action = component.get("c.saveExpense");
        // action.setParams({
        //     "expense" : expense
        // });

        // action.setCallback(this, function(response) {
        //     if(response.getState() == 'SUCCESS') {
        //         var newExpense = response.getReturnValue();
        //         var expenses = component.get("v.expenses");
        //         expenses.push(newExpense);
        //         component.set("v.expenses", expenses);
        //     }
        // });

        // $A.enqueueAction(action);
    },

    updateExpense : function(component, expense) {

        this.saveExpense(component, expense);

        // var action = component.get("c.saveExpense");
        // action.setParams({
        //     "expense" : expense
        // });

        // action.setCallback(this, function(response) {
        //     var state = response.getState();

        //     if(state === "SUCCESS") {
        //         // do nothing
        //     }
        // });

        // $A.enqueueAction(action);
    }
})
