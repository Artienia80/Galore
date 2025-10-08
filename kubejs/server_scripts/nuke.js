ServerEvents.tags('item', event => {
   if (global.nukelist.length > 0) {
      event.removeAllTagsFrom(global.nukelist) // Removes all tags from nuked items so they don't show up in tag viewers (EMI) or break recipes when removed
      event.add('modpack:nukelist', global.nukelist) // Type your own pack name where it says modpack!
      event.add('c:hidden_from_recipe_viewers', global.nukelist) // Hides the item from JEI/EMI
   }
})

ServerEvents.recipes(event => {
   if (global.nukelist.length > 0) {
      event.remove({ input: global.nukelist }) // Removes any recipe this item is an INPUT in
      event.remove({ output: global.nukelist }) // Removes any recipe this item is an OUTPUT in
   }    
})

PlayerEvents.chat(event => {
   if (event.message == 'nukelist reload') {
      event.server.runCommand(`tell @a Now reloading Nukelist scripts`)
      event.server.runCommand(`kubejs reload startup-scripts`)
      event.server.runCommand(`reload`)
      event.server.runCommand(`kubejs reload lang`)
   }
})