
if (Meteor.isClient) {
  Template.registerHelper('dateFormat', function(context, block) {
    // console.log(context);
    // console.log(block);
    if (window.moment) {
      var f = block.hash.format || "MMM DD, YYYY hh:mm:ss A";
      return moment(context).format(f); //had to remove Date(context)
    }else{
      return context;   //  moment plugin not available. return data as is.
    }
  });
}