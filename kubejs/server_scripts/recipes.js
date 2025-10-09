ServerEvents.recipes(event => {
  event.custom({
    type: 'lychee:anvil_crafting',
    item_in: [
      'minecraft:netherite_ingot',
      'minecraft:netherite_ingot'
    ],
    item_out: 'mulberry:steel_plate',
    level_cost: 5,
    material_cost: 1
  })

  event.custom({
    type: 'deep_aether:combining',
    category: 'combinable_fodder',
    experience: 0.1,
    ingredients: [
      {
        item: 'oreganized:silver_ingot'
      },
      {
        item: 'oreganized:silver_ingot'
      },
      {
        item: 'minecraft:gold_block'
      }
    ],
    output: {
      count: 1,
      id: 'oreganized:electrum_ingot'
    },
    processing_time: 100
  })

  event.custom({
    type: 'deep_aether:combining',
    category: 'combinable_fodder',
    experience: 0.1,
    ingredients: [
      {
        item: 'oreganized:electrum_ingot'
      },
      {
        item: 'oreganized:electrum_ingot'
      },
      {
        item: 'oreganized:electrum_ingot'
      }
    ],
    output: {
      count: 1,
      id: 'mulberry:electrum_plate'
    },
    processing_time: 100
  })

  event.custom({
    type: 'aether:enchanting',
    category: 'enchanting_misc',
    cookingtime: 500,
    experience: 1.0,
    ingredient: {
      item: 'mulberry:meteorite_ingot'
    },
    result: {
      count: 1,
      id: 'oreganized:silver_ingot'
    }
  })
})