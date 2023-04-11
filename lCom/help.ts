module.exports = [{
  name: 'help',
  run: (function(msg, ctx){
   await ctx.send(msg.i18n.help)
})
}]
