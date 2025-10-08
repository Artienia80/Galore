ItemEvents.modifyTooltips(event => {
  if (global.nukelist.length > 0) {
    event.add(global.nukelist, Text.red('This item has been disabled')) 
  }
})