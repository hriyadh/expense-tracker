public with sharing class ExpensesController {

    @AuraEnabled
    public static List<Expense__c> getExpenses() {
        
        // Check all fields accessiblity 
        List<String> fieldsToCheck = new List<String> {
            'Id', 'Name', 'Amount__c', 'Client__c', 'Date__c',
            'Reimbursed__c', 'CreatedDate'
        };
        
        Map<String, Schema.SObjectField> fieldDescribeTokens = Schema.SObjectType.Expense__c.fields.getMap();
        for(String field : fieldsToCheck) {
            if(!fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
                return null;
            }
        }

        return [SELECT 
                    Id,
                    Name,
                    Amount__c,
                    Client__c,
                    Date__c,
                    Reimbursed__c,
                    CreatedDate
                FROM Expense__c
                ORDER BY CreatedDate];
    }

    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // TODO: Perform permission check
        upsert expense;
        return expense;
    }
}
