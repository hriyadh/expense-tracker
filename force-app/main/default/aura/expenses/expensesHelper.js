({
    createExpense : function(component, expense) {
        var expenses = component.get("v.expenses");
        var newExpense = JSON.parse(JSON.stringify(expense));
        console.log(newExpense);
        expenses.push(newExpense);
        component.set("v.expenses", expenses);
        console.log('-------------------------------');
        console.log(JSON.stringify(expenses));
    }
})
