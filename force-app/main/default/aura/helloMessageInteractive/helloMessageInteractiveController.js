({
    handleClick : function(component, event, helper) {
        var txtMessage = event.getSource().get("v.label");
        console.log(txtMessage);
        component.set("v.message", txtMessage);
    }
})
