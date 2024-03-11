const featJson = {

  "featPath": [
      {
          "pathName" : "Way of leather and steel",
          "featPathColour" : "maroon",
          "feats":[
              {
                  "featName" : "Armour Bearer",
                  "prequisites" : "Nothing",
                  "art" : "pincers",
                  "description" : "You may repair Heavy Armour and Light Armour.",
                  "keywords" : ["Leather and Steel"]
              },
              {
                  "featName" : "Armour Mastery",
                  "prequisites" : "3 Leather & Steel Feats",
                  "art" : "scale-mail",
                  "description" : "You are an expert in gaining the full benefit of your armour. Gain an additional +1 Armour hit per location when wearing any armour.",
                  "keywords" : ["Leather and Steel"]
              },
              {
                  "featName" : "Complete Set",
                  "prequisites" : "Light/Heavy Armour",
                  "art" : "battle-gear",
                  "description" : "Your character is committed to being fully armoured and gains benefit from this inconvenience. If 5 locations (out of the 6 locations: Head, Torso, Left Leg and Arm, Right Leg and Arm) are more than 50% covered by light or heavy armour the character gains a further +1 to their maximum Armour hits.",
                  "keywords" : ["Leather and Steel"]
              },
              {
                  "featName" : "Easily Maintained",
                  "prequisites" : "Heavy Armour",
                  "art" : "anvil-impact",
                  "description" : "You keep your armour in good shape, making it easy to repair. When subject to the Repair Effect on any location, gain the benefit of an additional Repair Effect to the same location.",
                  "keywords" : ["Leather and Steel"]
              }
              ,
              {
                  "featName" : "Hardened",
                  "prequisites" : "Heavy Armour",
                  "art" : "spiked-armor",
                  "description" : "Your hardened outlook extends to your possessions, and your enemies find it difficult to break you or the items you carry. You may reactively spend 1 Vigour to gain Immunity Shatter for 10s.",
                  "keywords" : ["Leather and Steel", "Resistance"]
              }
              ,
              {
                  "featName" : "Heavy Armour",
                  "prequisites" : "Nothing",
                  "art" : "breastplate",
                  "description" : "You gain the ability to wear heavy armour. Heavy armour must be phys repped with a sturdy armour phys rep such as plated or rigid leather, chainmail, plate mail, or a convincing metal phys rep. This Feat gives +2 Armour hits per location while wearing heavy armour. This Feat gives the ability to repair heavy armour.",
                  "keywords" : ["Leather and Steel"]
              },
              {
                  "featName" : "Light Armour",
                  "prequisites" : "Nothing",
                  "art" : "leather-armor",
                  "description" : "You gain the ability to wear light armour. Light armour must be phys repped by light flexible leather or more rigid leather, heavily padded fabric, skinned furs, lighter material with some reinforced pads, and so on. This Feat gives +1 Armour hit per location while wearing light armour. This Feat gives the ability to repair light armour.",
                  "keywords" : ["Leather and Steel"]
              },
              {
                  "featName" : "Mender’s Focus",
                  "prequisites" : "Nothing",
                  "art" : "look-at",
                  "description" : "You are used to keeping your focus during long sessions smithing and mending armour. You may reactively spend 1 Vigour to gain Immunity Mindslash 10s.",
                  "keywords" : ["Leather and Steel", "Resistance"]
              },
              {
                  "featName" : "Reinforced",
                  "prequisites" : "Heavy Armour",
                  "art" : "helmet-head-shot",
                  "description" : "You have reinforced the armour you wear to make it even sturdier. When wearing heavy armour gain an additional +1 Armour hit per location.",
                  "keywords" : ["Leather and Steel"]
              },
              {
                  "featName" : "Squire",
                  "prequisites" : "1 Leather & Steel/Deft Hands",
                  "art" : "mounted-knight",
                  "description" : "You are skilled at maintaining armour, weapons and other items. You can manually perform the Repair Effect with 30s of roleplayed action and Concentration, instead of 1 minute of the same.",
                  "keywords" : ["Leather and Steel"]
              },
              {
                  "featName" : "Unexposed",
                  "prequisites" : "Light Armour",
                  "art" : "elbow-pad",
                  "description" : "What little armour you wear covers all the sensitive areas. You may reactively spend 1 Vigour to gain Immunity Through 10s.",
                  "keywords" : ["Leather and Steel", "Resistance"]
              },
              {
                  "featName" : "Well Balanced ",
                  "prequisites" : "Light Armour",
                  "art" : "body-balance",
                  "description" : "You may reactively spend 1 Vigour to gain Immunity Strikedown 10s.",
                  "keywords" : ["Leather and Steel", "Resistance"]
              },
              {
                  "featName" : "Well Oiled",
                  "prequisites" : "Light Armour",
                  "art" : "oil-can",
                  "description" : "You may reactively spend 1 Vigour to gain Immunity Halt 10s.",
                  "keywords" : ["Leather and Steel", "Resistance"]
              }
          ]
      },
      {
          "pathName" : "Way of martial prowess",
          "featPathColour" : "darkolivegreen",
          "feats":[
              {
                  "featName" : "Adrenaline Surge",
                  "prequisites" : "1 Martial Prowess Feat",
                  "art" : "enrage",
                  "description" : "When you are subject to either the Fear or Rampage effects (and are not Immune to or Protected from them) you additionally gain a Global Heal 1 effect.",
                  "keywords" : ["Combat", "Martial Prowess"]
              },
              {
                  "featName" : "Blade of the Shaper",
                  "prequisites" : "3 Martial Prowess Feats",
                  "art" : "winged-sword",
                  "description" : "For 2 Vigour you may generate Gwyllt Bane by weapon blow.",
                  "keywords" : ["Combat", "Martial Prowess"]
              },
              {
                  "featName" : "Boot Camp",
                  "prequisites" : "1 Martial Prowess Feat",
                  "art" : "jumping-rope",
                  "description" : "You gain 1 Body hit per location.",
                  "keywords" : ["Martial Prowess"]
              },
              {
                  "featName" : "Constant Vigil",
                  "prequisites" : "Nothing",
                  "art" : "awareness",
                  "description" : "Reactively spend 1 Vigour, gain Immunity Sleep 10s.",
                  "keywords" : ["Martial Prowess", "Resistance"]
              },
              {
                  "featName" : "Last Stand",
                  "prequisites" : "3 Martial Prowess Feats",
                  "art" : "surrounded-shield",
                  "description" : "<span>Your character enters a crazed state which you should roleplay, shaking off their wounds for one last final fight. You must be unconscious to activate this Feat, and it costs 4 Vigour to activate. When activated the following happens to your character: <ul style='padding:2%;'><li id='hrId'>Your torso immediately goes to -1 Body hits, if it wasn’t already</li><li id='hrId'>Your deathcount is reduced to 1 minute remaining (if it was greater than this)</li><li id='hrId'>For the next minute, you may use all your locations as if they were on 1 or more Body hits</li><li id='hrId'>You may not generate the Healing, Repair, or Stop Bleed Effects by any means (including by using potions or other items) or cast Spells</li><li id='hrId'>Leaving your death count will end this Effect immediately.</li></ul><span>",
                  "keywords" : ["Combat", "Martial Prowess"]
              },
              {
                  "featName" : "Heroic Loyalty",
                  "prequisites" : "Nothing",
                  "art" : "heart-tower",
                  "description" : "You may reflexively spend 1 Vigour to gain Immunity Rampage 10s.",
                  "keywords" : ["Combat, Resistance", "Martial Prowess"]
              },
              {
                  "featName" : "Hold the Line",
                  "prequisites" : "3 Martial Prowess Feats",
                  "art" : "crenulated-shield",
                  "description" : "Spend 1 Vigour reactively to gain Immunity Lure 10s.",
                  "keywords" : ["Martial Prowess", "Resistance"]
              },
              {
                  "featName" : "Lay to Rest",
                  "prequisites" : "3 Martial Prowess Feats",
                  "art" : "pirate-grave",
                  "description" : "For 2 Vigour, you may generate the Undead Bane Effect by weapon blow.",
                  "keywords" : ["Combat", "Martial Prowess"]
              },
              {
                  "featName" : "Punishing Blows",
                  "prequisites" : "Shattering Strike",
                  "art" : "stick-splitting",
                  "description" : "When you activate the Shattering Strike Feat with either a large weapon or a ranged weapon you may additionally generate the Shatter Effect on your next successful strike within 10s. If this Effect is delivered by ranged weapon it will only work on a shield (for safety reasons).",
                  "keywords" : ["Combat", "Martial Prowess"]
              },
              {
                  "featName" : "Repelling Blow",
                  "prequisites" : "Nothing",
                  "art" : "vertical-flip",
                  "description" : "For 1 Vigour, you may generate the Push Effect by weapon blow. This is in addition to the Damage Effect of the weapon blow.",
                  "keywords" : ["Combat", "Martial Prowess"]
              },
              {
                  "featName" : "Room to Breath",
                  "prequisites" : "Repelling Blow",
                  "art" : "expander",
                  "description" : "When you activate the Repelling Blow Feat with a medium or large weapon, you may additionally generate the Push Effect on your next successful strike within 10s. This is in addition to the Damage Effect of a weapon blow.",
                  "keywords" : ["Combat", "Martial Prowess"]
              },
              {
                  "featName" : "Second Wind",
                  "prequisites" : "3 Martial Prowess Feats",
                  "art" : "pummeled",
                  "description" : "You are adept at getting back in the fight even after having the wind knocked out of you, improving your Recovery. When subject to the Recovery mechanic and taking the Healing 1 Effect to any locations that were on 0 Body hits, take the Healing 1 Effect a second time to those locations.",
                  "keywords" : ["Martial Prowess"]
              },
              {
                  "featName" : "Shattering Strike",
                  "prequisites" : "2 Martial Prowess Feats",
                  "art" : "shattered-sword",
                  "description" : "For 3 Vigour, you may generate the Shatter Effect by weapon blow against a weapon or shield. If this Effect is delivered by ranged weapon or thrown weapon it will only work on a shield (for safety reasons).",
                  "keywords" : ["Combat", "Martial Prowess"]
              },
              {
                  "featName" : "Warrior’s Heart",
                  "prequisites" : "2 Martial Prowess Feats",
                  "art" : "love-howl",
                  "description" : "By spending 1 Vigour reactively, gain Immunity Fear 10s.",
                  "keywords" : ["Martial Prowess", "Resistance"]
              }
          ]
      },
      {
          "pathName" : "Way of power",
          "featPathColour" : "blue",
          "feats":[
              {
                  "featName" : "Spellcraft",
                  "prequisites" : "First Level Casting",
                  "art" : "spell-book",
                  "description" : "This Feat can be taken multiple times. You learn a Spell of a level that you can already cast.",
                  "keywords" : ["Multiple, Power"]
              },
              {
                  "featName" : "First Level Casting",
                  "prequisites" : "Nothing",
                  "art" : "bolt-spell-cast1",
                  "description" : "You learn two first level Spells.",
                  "keywords" : ["Power"]
              },
              {
                  "featName" : "Second Level Casting",
                  "prequisites" : "First Level Casting",
                  "art" : "bolt-spell-cast2",
                  "description" : "You learn two second level Spells.",
                  "keywords" : ["Power"]
              },
              {
                  "featName" : "Third Level Casting",
                  "prequisites" : "Second Level Casting",
                  "art" : "bolt-spell-cast3",
                  "description" : "You learn two third level Spells.",
                  "keywords" : ["Power"]
              },
              {
                  "featName" : "Fourth Level Casting",
                  "prequisites" : "Third Level Casting",
                  "art" : "bolt-spell-cast4",
                  "description" : "You learn two fourth level Spells.",
                  "keywords" : ["Power"]
              },
              {
                  "featName" : "Fifth Level Casting",
                  "prequisites" : "Fourth Level Casting",
                  "art" : "bolt-spell-cast5",
                  "description" : "You learn two fifth level Spells.",
                  "keywords" : ["Power"]
              }
          ]
      },
      {
          "pathName" : "Way of shadowed blades",
          "featPathColour" : "black",
          "feats":[
              {
                  "featName" : "Aggressive Solution",
                  "prequisites" : "Nothing",
                  "art" : "thrown-knife",
                  "description" : "You know how to make a variety of short lived alchemical concoctions that can be activated through Vigour. For 1 Vigour, you may deliver the Through Effect via a thrown weapon, which phys reps throwing a vial. This is in addition to the Damage Effect of a thrown weapon blow. A character using Aggressive Solution will cause Single Damage combined with the Through Effect.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Blinding Fumes",
                  "prequisites" : "Nothing",
                  "art" : "bottle-vapors",
                  "description" : "You know how to make a variety of short lived alchemical concoctions that can be activated through Vigour. For 1 Vigour you may deliver the Daze Effect via a thrown weapon which phys reps throwing a vial of noxious, blinding fumes. This is in addition to the Damage Effect of a thrown weapon blow. A character using Blinding Fumes causes the Single Damage Effect and cause the target to suffer the Daze Effect.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Cutthroat",
                  "prequisites" : "Nothing",
                  "art" : "silenced",
                  "description" : "For 2 Vigour, on your next weapon blow you may generate the Mute 30s Effect by weapon blow. This is in addition to the Damage Effect of a weapon blow.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Dexterous Poisoner",
                  "prequisites" : "3 Shadowed Blades Feats",
                  "art" : "chemical-arrow",
                  "description" : "Due to your training, you know how to get the best use out of your poisons. Double the duration of any poison that you apply to your own weapon (eg. An “on next weapon blow” poison becomes “on next two weapon blows”).",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Disarmed and Dangerous",
                  "prequisites" : "1 Shadowed Blades Feat",
                  "art" : "shield-reflect",
                  "description" : "When a weapon or shield you are holding suffers the Shatter Effect, you may instantly cast Daze for 0 Vigour at a target within normal Spellcasting range.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Distilled Fragility",
                  "prequisites" : "1 Shadowed Blades Feat",
                  "art" : "thrown-charcoal",
                  "description" : "You know how to make a variety of short lived alchemical concoctions that can be activated through Vigour. For 2 Vigour you may deliver the Shatter Effect via a thrown weapon which phys reps throwing a vial of noxious, blinding fumes. This may only be used to target a shield.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Distracting Strike",
                  "prequisites" : "1 Shadowed Blades Feat",
                  "art" : "knockout",
                  "description" : "For 1 Vigour, on your next blow you may generate the Mindslash Effect by blow. This is in addition to the Damage Effect of a weapon blow.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Dropping the Guard",
                  "prequisites" : "3 Shadowed Blades Feats",
                  "art" : "bone-gnawer",
                  "description" : "A life of ill repute has meant that, on occasion, you have needed to deal with guard dogs. For 2 Vigour, you may generate the Beast Bane Effect by weapon blow.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Fatal Blow",
                  "prequisites" : "4 Shadowed Blades Feats",
                  "art" : "pierced-heart",
                  "description" : "You have studied the exact points to strike to cripple mortal beings. For 2 Vigour, your next weapon blow generates the Mortal Bane Effect.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Internal Damage",
                  "prequisites" : "2 Shadowed Blades Feats",
                  "art" : "internal-injury",
                  "description" : "For 2 Vigour, you may generate the Protection Healing 5 minutes Effect by weapon blow. This is in addition to the Damage Effect of a weapon blow.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Local Informants",
                  "prequisites" : "Nothing",
                  "art" : "spy",
                  "description" : "Each time you take this Feat select one of the realms. Each event you attend you will receive a report on recent events in that realm",
                  "keywords" : ["Multiple", "Shadowed Blades"]
              },
              {
                  "featName" : "Penetrating Strike",
                  "prequisites" : "2 Shadowed Blades Feats",
                  "art" : "pierced-body",
                  "description" : "For 2 Vigour, you may generate the Through Effect by weapon blow. This is in combination with the Damage Effect of a weapon blow.",
                  "keywords" : ["Combat", "Shadowed Blade"]
              },
              {
                  "featName" : "Petrifying Potion",
                  "prequisites" : "3 Shadowed Blades Feat",
                  "art" : "medusa-head",
                  "description" : "You know how to make a variety of short lived alchemical concoctions that you may use offensively. For 2 Vigour, you may deliver the Halt Effect via a thrown weapon which phys reps throwing a vial of chemicals the briefly harden flesh into stone. This is in addition to the Damage Effect of a thrown weapon blow. A character using Petrifying Potion will cause the Single Damage Effect and cause the target to suffer the Halt Effect.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Pointed Questions",
                  "prequisites" : "1 Shadowed Blades Feat",
                  "art" : "discussion",
                  "description" : "You may use the Research downtime action to ask a question about recent events and activities in Tirneach. The availability of information will be based on your Feats. Taking this Feat without the Local Informants Feats will produce no additional information.",
                  "keywords" : ["Shadowed Blades"]
              },
              {
                  "featName" : "Puncture",
                  "prequisites" : "Penetrating Strike Feat",
                  "art" : "sun-spear",
                  "description" : "When you activate the Penetrating Strike Feat with either a large weapon or a small weapon you may additionally generate the Through Effect on your next successful weapon strike within 10s. This is in combination with the Damage Effect of a weapon blow",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Severed Artery",
                  "prequisites" : "2 Shadowed Blades Feats",
                  "art" : "bleeding-wound",
                  "description" : "For 3 Vigour, you may generate the Protection Stop Bleed 5 minutes Effect by weapon blow. This is in addition to the Damage Effect of a weapon blow.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Shattered Focus",
                  "prequisites" : "Distracting Strike Feat",
                  "art" : "brain-freeze",
                  "description" : "When you activate the Distracting Strike Feat with either a small weapon or ranged weapon you may additionally generate the Mindslash Effect on your next successful strike within 10s.This is in addition to the Damage Effect of a weapon blow.",
                  "keywords" : ["Combat", "Shadowed Blades"]
              },
              {
                  "featName" : "Silencing Strikes",
                  "prequisites" : "Cutthroat Feat",
                  "art" : "cloak-dagger",
                  "description" : "When you activate the Cutthroat Feat you may additionally generate the Mute 30s Effect by weapon blow with small and medium weapons on your next successful strike within 10s. This is in addition to the Damage Effect of a weapon blow.",
                  "keywords" : ["Combat","Shadowed Blades"]
              },
              {
                "featName" : "Skullduggery",
                "prequisites" : "Nothing",
                "art" : "stiletto",
                "description" : "After 30 seconds of Concentration and roleplay, you may be free of any in-character restraints your character has been the subject of. You may search with only 10 seconds of roleplay action following all other searching rules, and should call “Quickened Searching” while doing so.",
                "keywords" : ["Combat","Shadowed Blades"]
            },
              {
                  "featName" : "Slip Strike ",
                  "prequisites" : "Nothing",
                  "art" : "amputation",
                  "description" : "For 1 Vigour, on your next weapon blow you may generate the Fumble Effect by weapon blow against a weapon or shield. If this Effect is delivered by a ranged weapon or thrown weapon it will only work on a shield (for safety reasons).",
                  "keywords" : ["Combat","Shadowed Blades"]
              },
              {
                  "featName" : "Steering the Conversation",
                  "prequisites" : "1 Shadowed Blades Feat",
                  "art" : "conversation",
                  "description" : "You may submit a piece of information (true or false) to be included in reports from a specific realm. The Event Team will decide how this information affects the reports.",
                  "keywords" : ["Shadowed Blades"]
              },
              {
                "featName" : "Throwing Weapon Expert",
                "prequisites" : "Nothing",
                "art" : "thrown-daggers",
                "description" : "You can generate the Repair effect on a Throwing Weapon after 10s of roleplay instead of the usual 60s.",
                "keywords" : ["Combat","Shadowed Blades"]
              },
              {
                  "featName" : "Volatile Substances",
                  "prequisites" : "2 Shadowed Blades Feats",
                  "art" : "chemical-bolt",
                  "description" : "You know how to make a variety of short lived alchemical concoctions that you may activate with Vigour. For 1 Vigour you may deliver the Global Single Damage Effect via a thrown weapon which phys reps throwing a cocktail of volatile alchemical substances",
                  "keywords" : ["Combat", "Shadowed Blades"]
              }
          ]
      },
      {
          "pathName" : "Way of sturdy flesh",
          "featPathColour" : "#993366",
          "feats":[
              {
                  "featName" : "Deathproof",
                  "prequisites" : "1 Sturdy Flesh Feat",
                  "art" : "scythe",
                  "description" : "For 1 Vigour may gain Immunity Execute 10s. This Feat may be used even while unconscious.",
                  "keywords" : ["Resistance","Sturdy Flesh"]
              },
              {
                  "featName" : "Die Hard",
                  "prequisites" : "Sturdy Flesh Feat",
                  "art" : "time-bomb",
                  "description" : "Your death count is extended by 120 seconds (to 420 seconds total, or 7 minutes).",
                  "keywords" : ["Sturdy Flesh"]
              },
              {
                  "featName" : "Fortified Resistance",
                  "prequisites" : "3 Sturdy Flesh Feats",
                  "art" : "armor-upgrade",
                  "description" : "When you spend 1 Vigour to activate any Resistance Feat, gain Immunity 1 minute to the Effect listed in the Feat instead of Immunity 10s.",
                  "keywords" : ["Sturdy Flesh"]
              },
              {
                  "featName" : "Immutable Body",
                  "prequisites" : "2 Sturdy Flesh Feats",
                  "art" : "vitruvian-man",
                  "description" : "You may spend 1 point of Vigour to gain Immunity Protection 10s.",
                  "keywords" : ["Sturdy Flesh", "Resistance"]
              },
              {
                  "featName" : "Perfect Health",
                  "prequisites" : "3 Sturdy Flesh Feats",
                  "art" : "weight-lifting-up",
                  "description" : "You may reactively spend 1 Vigour to gain Immunity Disease 10s.",
                  "keywords" : ["Resistance", "Sturdy Flesh"]
              },
              {
                  "featName" : "Plague Bearer",
                  "prequisites" : "2 Sturdy Flesh Feats",
                  "art" : "plague-doctor-profile",
                  "description" : "While you are under the Disease Effect you may generate the Disease Effect by weapon blow for 2 Vigour.",
                  "keywords" : ["Sturdy Flesh"]
              },
              {
                  "featName" : "Seasoned Veteran",
                  "prequisites" : "2 Sturdy Flesh Feats",
                  "art" : "medal",
                  "description" : "You gain 1 Body hit per location.",
                  "keywords" : ["Sturdy Flesh"]
              },
              {
                  "featName" : "Steady Pace",
                  "prequisites" : "3 Sturdy Flesh Feats",
                  "art" : "no-scorpion",
                  "description" : "Reactively spend 1 Vigour to gain Immunity Venom 10s.",
                  "keywords" : ["Sturdy Flesh"]
              },
              {
                  "featName" : "Veteran",
                  "prequisites" : "Nothing",
                  "art" : "crossed-axes",
                  "description" : "You gain 1 Body hit per location.",
                  "keywords" : ["Sturdy Flesh"]
              },
              {
                  "featName" : "Vigorous",
                  "prequisites" : "Nothing",
                  "art" : "beams-aura",
                  "description" : "Upon taking this Feat, gain an additional 4 Vigour. This Feat may be taken up to 6 times.",
                  "keywords" : ["Multiple", "Sturdy Flesh"]
              }
          ]
      },
      {
          "pathName" : "Way of the alchemist",
          "featPathColour" : "green",
          "feats":[
              {
                  "featName" : "Student Alchemist",
                  "prequisites" : "Nothing",
                  "art" : "test-tube-held",
                  "description" : "Allows the crafting of student alchemy items in downtime using the Craft action. Your character knows all the recipes listed under Student Alchemist in Appendix 4. You may spend 1 minute concentrating on a potion or poison and generate the Identify Effect. Start the first event after you take this Feat with the Tonic Potion item.",
                  "keywords" : ["Alchemist", "Crafting"]
              },
              {
                  "featName" : "Apprentice Alchemist",
                  "prequisites" : "Student Alchemist",
                  "art" : "test-tube-held1",
                  "description" : "Allows the crafting of apprentice Alchemy items in downtime using the Craft action. Your character knows all the recipes listed under Apprentice Alchemist in Appendix 4. You may use the Research downtime action to ask a question relating to alchemical lore. Start the first event after you take this Feat with the Flesh and Steel item.",
                  "keywords" : ["Alchemist", "Crafting"]
              },
              {
                  "featName" : "Journeyman Alchemist",
                  "prequisites" : "Apprentice Alchemist",
                  "art" : "test-tube-held2",
                  "description" : "Allows the crafting of journeyman alchemy items in downtime using the Craft action. Your character knows all the recipes listed under Journeyman Alchemist in Appendix 4. You may also use the Analyze downtime action to study an alchemical item to add it to your Way of the Alchemist crafting list at the relevant level. Start the first event after you take this Feat with the Dazzling Liquid item.",
                  "keywords" : ["Alchemist", "Crafting"]
              },
              {
                  "featName" : "Master Alchemist",
                  "prequisites" : "Journeyman Alchemist",
                  "art" : "test-tube-held3",
                  "description" : "Allows the crafting of master alchemy items in downtime using the Craft action.. Your character knows all the recipes listed under Master Alchemist in Appendix 4. You may also get additional relevant information throughout events at times deemed relevant by the Event Team. Start the first event after you take this Feat with the Revitalising Tonic item.",
                  "keywords" : ["Alchemist", "Crafting"]
              }
          ]
      },
      {
          "pathName" : "Way of the arcanist",
          "featPathColour" : "purple",
          "feats":[
              {
                  "featName" : "Student Arcanist",
                  "prequisites" : "Nothing",
                  "art" : "gem-chain",
                  "description" : "Allows the crafting of student arcanist items in downtime using the Craft action.. Your character knows all the recipes listed under Student Arcanist in Appendix 4. You may spend 1 minute concentrating on a magical focus, scroll, or talisman and generate the Identify Effect. Start the first event after you take this Feat with the Student Ritual Effigy item.",
                  "keywords" : ["Arcanist", "Crafting"]
              },
              {
                  "featName" : "Apprentice Arcanist",
                  "prequisites" : "Student Arcanist",
                  "art" : "gem-chain1",
                  "description" : "Allows the crafting of apprentice arcanist items in downtime using the Craft action. Your character knows all the recipes listed under Apprentice Arcanist in Appendix 4. You may use the Research downtime action to ask a question relating to Magic Items specifically. Start the first event after you take this Feat with the Greater Eye of the Shaper item.",
                  "keywords" : ["Arcanist", "Crafting"]
              },
              {
                  "featName" : "Journeyman Arcanist",
                  "prequisites" : "Apprentice Arcanist",
                  "art" : "gem-chain2",
                  "description" : "Allows the crafting of journeyman arcanist items in downtime using the Craft action. Your character knows all the recipes listed under Journeyman Arcanist in Appendix 4. You may also use the Analyze downtime action to study an arcane item to add it to your Way of the Arcanist crafting list at the relevant level. Start the first event after you take this Feat with the Lesser Way Stone item.",
                  "keywords" : ["Arcanist", "Crafting"]
              },
              {
                  "featName" : "Master Arcanist",
                  "prequisites" : "Journeyman Arcanist",
                  "art" : "gem-chain3",
                  "description" : "Allows the crafting of master arcanist items in downtime using the Craft action.. Your character knows all the recipes listed under Master Arcanist in Appendix 4. You may also get additional relevant information throughout events at times deemed relevant by the Event Team. Start the first event after you take this Feat with the Casting Crystal item.",
                  "keywords" : ["Arcanist", "Crafting"]
              }
          ]
      },
      {
          "pathName" : "Way of the forge",
          "featPathColour" : "red",
          "feats":[
              {
                  "featName" : "Student Blacksmith",
                  "prequisites" : "Nothing",
                  "art" : "wayforge",
                  "description" : "Allows the crafting of student blacksmith items in downtime using the Craft action. Your character knows all the recipes listed under Student Blacksmith in Appendix 4. You may spend 1 minute concentrating on a weapon or set of armour and generate the Identify Effect. Start the first event after you take this Feat with the Fortifying Leathers item.",
                  "keywords" : ["Crafting", "Forge"]
              },
              {
                  "featName" : "Apprentice Blacksmith",
                  "prequisites" : "Student Blacksmith",
                  "art" : "wayforge1",
                  "description" : "Allows the crafting of apprentice blacksmith items in downtime using the Craft action. Your character knows all the recipes listed under Apprentice Blacksmith in Appendix 4. You may use the Research downtime action to ask a question relating to smithing. You may repair Light Armour. Start the first event after you take this Feat with the Creviced Steel item.",
                  "keywords" : ["Crafting", "Forge"]
              },
              {
                  "featName" : "Journeyman Blacksmith",
                  "prequisites" : "Apprentice Blacksmith",
                  "art" : "wayforge2",
                  "description" : "Allows the crafting of journeyman blacksmith items in downtime using the Craft action. Your character knows all the recipes listed under Journeyman Blacksmith in Appendix 4. You may also use the Analyze downtime action to study a smithed item to add it to your Way of the Forge crafting list at the relevant level. You may repair Heavy Armour. Start the first event after you take this Feat with the Fear of the Wicked item.",
                  "keywords" : ["Crafting", "Forge"]
              },
              {
                  "featName" : "Master Blacksmith",
                  "prequisites" : "Journeyman Blacksmith",
                  "art" : "wayforge3",
                  "description" : "Allows the crafting of master blacksmith items in downtime using the Craft action. Your character knows all the recipes listed under Master Blacksmith in Appendix 4. You may also get additional relevant information throughout events at times deemed relevant by the Event Team. Start the first event after you take this Feat with True Foe’s Weapon item.",
                  "keywords" : ["Crafting", "Forge"]
              }
          ]
      },
      ,
      {
          "pathName" : "Way of Crafting",
          "featPathColour" : "teal",
          "feats":[
              {
                  "featName" : "Tireless Crafting",
                  "prequisites" : "Student Arcanist Or Student Alchemist",
                  "art" : "coffee-cup",
                  "description" : "<span style='font-size:12px;'>You may submit a Crafting action to the Event Team once each day on the Friday and Saturday of an event. This Crafting action may only produce Consumable items. <b>This action must be submitted before 10pm.</b></br></br> The cost for the action is the recipe cost plus one ingredient per item, per level. This means that each Student level item costs one additional ingredient and a Master level item costs four additional ingredients. Three Student level items will cost an additional three ingredients, three Master level items will cost an additional twelve ingredients. You will receive the items at Time In the following day.</span>",
                  "keywords" : ["<span style=''>Crafting</span>"]
              }
          ]
      },
      {
          "pathName" : "Way of the professions",
          "featPathColour" : "#cd7f32",
          "feats":[
              {
                  "featName" : "Artisan",
                  "prequisites" : "Nothing",
                  "art" : "artisan",
                  "description" : "<span>You are skilled at creating useful processed good through a variety of methods.. Each event you attend, gain 3 additional processed material crafting ingredients selected at random from the ingredients common in your character’s Location at the end of downtime. Your character may use the Gather action during downtime to search for a specific processed material crafting ingredient (one of glass, ink, incense, parchment or wax), and will receive 1 of that ingredient for each time you have taken this Feat. This Feat may be taken multiple times, up to 3 times.</span>",
                  "keywords" : ["Multiple", "Professions"]
              },
              {
                  "featName" : "Farmer",
                  "prequisites" : "Nothing",
                  "art" : "farmer",
                  "description" : "<span>You are practiced in the field of growing plants and harvesting useful products from them. Each event you attend, gain 3 additional plant crafting ingredients selected at random from the ingredients common in your character’s Location at the end of downtime. Your character may use the Gather action during downtime to search for a specific plant crafting ingredient (one of bark, flower, leaf, root seed), and will receive 1 of that ingredient for each time you have taken this Feat. This Feat may be taken multiple times, up to 3 times.</span>",
                  "keywords" : ["Multiple", "Professions"]
              },
              {
                  "featName" : "Hunter",
                  "prequisites" : "Nothing",
                  "art" : "hunter",
                  "description" : "<span>You are experienced with the arts of tracking animals or finding those animals that have died of illness, natural causes or other means, and breaking them down into useful products. Each event you attend, gain 3 additional animal crafting ingredients selected at random from the ingredients common in your character’s Location at the end of downtime. Your character may use the Gather action during downtime to search for a specific animal crafting ingredient (one of bone, dung, fang, heart, pelt), and will receive 1 of that ingredient for each time you have taken this Feat. This Feat may be taken multiple times, up to 3 times.</span>",
                  "keywords" : ["Multiple", "Professions"]
              },
              {
                  "featName" : "Merchant",
                  "prequisites" : "Nothing",
                  "art" : "merchant",
                  "description" : "You have a steady stream of income. Each event you attend, gain 30 additional Pingin. This Feat may be taken multiple times, up to 3 times.",
                  "keywords" : ["Multiple", "Professions"]
              },
              {
                  "featName" : "Miner",
                  "prequisites" : "Nothing",
                  "art" : "miner",
                  "description" : "<span>You are accustomed to working in the mines and extracting useful metals. Each event you attend, gain 3 additional metal crafting ingredients selected at random from the ingredients common in your character’s Location at the end of downtime. Your character may use the Gather action during downtime to search for a specific metal crafting ingredient (one of bronze, copper, gold, iron, silver), and will receive 1 of that ingredient for each time you have taken this Feat. This Feat may be taken multiple times, up to 3 times.</span>",
                  "keywords" : ["Multiple", "Professions"]
              }
          ]
      },
      {
          "pathName" : "Way of the ritualist",
          "featPathColour" : "navy",
          "feats":[
              {
                  "featName" : "Benediction of the Shaper's Forgiveness",
                  "prequisites" : "Nothing",
                  "art" : "caduceus",
                  "description" : "The Shaper understands that even their most devoted followers will sometimes fail, and need help to do better. Led by an initiate of the Shaper, each participant must loudly confess to all present a way that they have personally failed, and how they resolve to do better. Upon successful completion of this ritual, all participants gain the blessing of Cure Protection Healing, Full Global Healing.",
                  "keywords" : ["Ritualist", "CotS"],
                  "materialCosts" : "None",
                  "difficulty" : "10"
              },
              {
                  "featName" : "Binding Ties",
                  "prequisites" : "Nothing",
                  "art" : "sun-priest",
                  "description" : "This ritual is used to ensure loyalty among Torchbearers and their allies. During the ritual, the leader must declare their loyalty to their fellows, and the celebrants take it in turns to swear loyalty to each other on something important to them. Upon successful completion of the ritual, all participants take: Global Sunder Gwyllt, Global Gwyllt Bane, Protection Charm 1 hour, Protection Rampage 1 hour, Protection Lure 1 hour.",
                  "keywords" : ["Referee", "Ritualist", "CotS"],
                  "materialCosts" : "1 Incense, 1 Iron",
                  "difficulty" : "30"
              },
              {
                  "featName" : "Chastisement of the Traitorous Hands",
                  "prequisites" : "Nothing",
                  "art" : "spiked-halo",
                  "description" : "Punishment ritual. The ritualist and other participants detail how the target has betrayed them. Following successful completion of this ritual, the target loses the ability to generate the Repair Effect. This persists until one of the participants of the original ritual who can cast this ritual performs this ritual again to remove it and forgive the target.",
                  "keywords" : ["Punishment", "Referee", "Ritualist", "CotS"],
                  "materialCosts" : "1 Root, 1 Bone",
                  "difficulty" : "15"
              },
              {
                  "featName" : "Consult the Lost Tome",
                  "prequisites" : "Nothing",
                  "art" : "burning-book",
                  "description" : "<span>Rather than summoning a specific spirit, you instead shout a question into the afterlife for all to hear. You ask a question of the collective spirit’s wisdom instead of the knowledge of a single being, and within 24 hours of successful completion of this ritual, you receive an answer. This answer may be “that knowledge is not known to those that have passed.” Repeated use of this ritual in a short span of time may result in increased Undead activity. This ritual is known to not receive knowledge from those who have been subject to Quicken the Inevitable Solace.</span>",
                  "keywords" : ["Referee", "Ritualist", "CotS"],
                  "materialCosts" : "None",
                  "difficulty" : "20"
              },
              {
                  "featName" : "Grand Ritual ",
                  "prequisites" : "Ritual Celebrant",
                  "art" : "over-infinity",
                  "description" : "<span><p id='hrId'>You may perform two rituals simultaneously. The combined Ritual must meet all the requirements and costs of both Rituals. You must appropriately roleplay a combined performance. The difficulty of the combined ritual is the difficulty of the more difficult of the two rituals plus 5. At the end of the combined ritual, apply the effects of both rituals in the order of your choosing.</p><p id='hrId'>Difficulty reductions and/or bonuses to ritual score based on keywords, or from knowing the ritual, may only be applied if they would apply to both rituals.</p><p id='hrId'>A Referee must be present if either of the rituals have the Referee keyword.</p></span>",
                  "keywords" : ["Ritualist"],
                  "materialCosts" : "N/A",
                  "difficulty" : "N/A"
              },
              {
                  "featName" : "Honour the Shaper's Champions ",
                  "prequisites" : "Nothing",
                  "art" : "laurels",
                  "description" : "Initiates of the Shaper learn that while humility is important, so too is proper pride in one’s achievements. Each participant must loudly proclaim one great deed they have done for the Shaper that day, and the ritualist and other participants must praise them for it. Upon successful completion of this ritual, all participants gain the benefit of: Cure Protection Repair, Full Global Repair",
                  "keywords" : ["Ritualist", "CotS"],
                  "materialCosts" : "None",
                  "difficulty" : "10"
              },
              {
                  "featName" : "Invigoration",
                  "prequisites" : "Nothing",
                  "art" : "fluffy-trefoil",
                  "description" : "<p id='hrId'>The Ritualist energises all participants in the ritual, drawing on either a greater source of power, their prior deeds, or their future challenges to invigorate their participants. Upon Successful completion of this ritual, all participants regain all Vigour.</p><p id='hrId'>When performing this ritual, the Ritual Leader must choose which of the Arcane or CotS keywords applies to the performance and adjust their performance appropriately. They cannot apply both.</p>",
                  "keywords" : ["Ritualist", "Arcane", "CotS"],
                  "materialCosts" : "N/A",
                  "difficulty" : "5"
              },
              {
                  "featName" : "Indelible Mark",
                  "prequisites" : "Nothing",
                  "art" : "maze-cornea",
                  "description" : "<span><p id='hrId'>This ritual places an invisible magical mark upon its target. The target must be present in the ritual circle and does not count as a participant. The participants must call out how those who read the mark in the future will perceive that target and what they will know about them as a result of it. The leader must distil these intentions down to a single clear idea that is focused upon and branded onto the target. The mark must be summed up in one or two words which a referee will place on a card to be given to the target. The target then counts as Marked.</p><p id='hrId'> Taking this Feat grants the ability to cast Detect Marked for 1 Vigour. You may read the card of any Marked individuals you have detected. Marks fade upon death.</p></span>",
                  "keywords" : ["Ritualist", "Arcane", "Referee"],
                  "materialCosts" : "1 Ink, 1 Heart",
                  "difficulty" : "15"
              },
              {
                  "featName" : "Make Peace Before War",
                  "prequisites" : "Nothing",
                  "art" : "olive",
                  "description" : "<span><p id='hrId'>A ritual of the Shaper, used to prepare warriors for their fate before a battle. All participants resolve to let go of earthly ties and make peace with their possible death, and speak one fear they have that they must face, and how they intend to face it. After a successful ritual, all participants gain the following benefits: Regain all Vigour, Full Global Heal, Full Global Repair, Protection Sleep 1 hour, Protection Fear 1 hour, Protection Rampage 1 Hour.</p><p id='hrId'>All participants are also affected by Venom.</p><p id='hrId'> Additionally, any characters who die in the hour following this ritual immediately gain the benefit of the Quicken the Inevitable Solace ritual. Characters under the Effect of Venom may not participate in this ritual, and all benefits of this ritual are lost if the Venom Effect is removed.</p></span>",
                  "keywords" : ["Quiescent", "Referee", "Ritualist", "CotS"],
                  "materialCosts" : "1 Incense, 1 Heart",
                  "difficulty" : "30"
              },
              {
                  "featName" : "Moon Soaked Blades",
                  "prequisites" : "Nothing",
                  "art" : "moon",
                  "description" : "<span>Initiates of the church of the shaper learn to invigorate their flock, and drive them on to destroy the Gwyllt. To aid this, they learn a special ritual, which a leader may cast once per day. The ritual leader must deliver a sermon excoriating the evils of the Gwyllt and each other participant must pledge to drive them out and state one way they plan to do so that day.<p id='hrId'>Upon successful completion of this ritual all participants gain the following blessing: all Spells and other abilities they possess that target only Gwyllt may be used at 1 less Vigour cost, to a minimum of 1 Vigour, for the rest of the day.</p></span>",
                  "keywords" : ["Ritualist", "CotS"],
                  "materialCosts" : "1 Silver, 1 Fang",
                  "difficulty" : "20"
              },
              {
                  "featName" : "Moonlit Vigil",
                  "prequisites" : "Nothing",
                  "art" : "evil-moon",
                  "description" : "<span>Initiates of the church of the shaper learn to reassure their flock, and spur them on to combat the undead. To aid this, they learn a special ritual, which a leader may cast once per day. The ritual leader must deliver a sermon railing against the abominations of the undead, and each other participant must pledge to combat them and state one way they plan to do so that day.<p id='hrId'>Upon successful completion of this ritual all participants gain the following blessing: all Spells and other abilities they possess that target only Undead may be used at 1 less Vigour cost, to a minimum of 1, for the rest of the day.</p></span>",
                  "keywords" : ["Ritualist", "CotS"],
                  "materialCosts" : "1 Bone, 1 Seed",
                  "difficulty" : "20"
              },
              {
                  "featName" : "Penance of Leaden Blood",
                  "prequisites" : "Nothing",
                  "art" : "death-juice",
                  "description" : "<span><p id='hrId'>Punishment ritual. The target must be confronted with descriptions of their own death. Specifically, deaths that could have been avoided if they had not spurned those who would aid them. They must know they will bear this curse until they can earn back the trust of those they have wronged </p><p id='hrId'>Following successful completion of this ritual, the target’s death count is reduced by 60 seconds. This persists until one of the participants of the original ritual who can cast this ritual performs this ritual again to remove it and forgive the target. While a target can only be affected by one Penance of leaden blood at a time, this ritual does stack with venom.</p></span>",
                  "keywords" : ["Punishment", "Ritualist", "Arcane"],
                  "materialCosts" : "1 Parchment, 1 Wax",
                  "difficulty" : "10"
              },
              {
                  "featName" : "Quicken the Inevitable Solace",
                  "prequisites" : "Nothing",
                  "art" : "telefrag",
                  "description" : "<span>Must be performed over the corpse of the character(s) in question, or items of high significance to them (add +10 to the difficulty). The ritualist must allay any fears or unresolved issues that may tempt the spirit to remain. Upon successful completion of this ritual, the souls of the characters concern are made one with the Shaper, and may not be contacted or corrupted, nor may their corpses become undead beings. <p id='hrId'>If the target is already undead, they are destroyed upon successful completion of this ritual. Any knowledge held solely by the character is lost and may not be discovered through the Consult the Lost Tome ritual, or the Whisper with the Dead ritual.</p></span>",
                  "keywords" : ["Quiescent", "Referee", "Ritualist", "CotS"],
                  "materialCosts" : "N/A",
                  "difficulty" : "10"
              },
              {
                  "featName" : "Ready Ritualist",
                  "prequisites" : "1 Ritualist Feat",
                  "art" : "tribal-pendant",
                  "description" : "Each event you attend, gain 4 randomly chosen ingredients of types that are used for paying Ritual Material Costs.",
                  "keywords" : ["Ritualist"],
                  "materialCosts" : "N/A",
                  "difficulty" : "N/A"
              },
              {
                  "featName" : "Ritual Celebrant",
                  "prequisites" : "Nothing",
                  "art" : "robe",
                  "description" : "Adds an additional +1 to the points generated when contributing to a ritual, either as a leader or just a regular participant. This Feat may be taken up to 4 times. The first time you take this Feat, you gain the ability to attune Ritual Texts",
                  "keywords" : ["Multiple", "Ritualist"],
                  "materialCosts" : "N/A",
                  "difficulty" : "N/A"
              },
              {
                  "featName" : "Sacrificial Rite",
                  "prequisites" : "Sympathetic Ingredients",
                  "art" : "sacrificial-dagger",
                  "description" : "<span>When you lead or participate in a ritual, you may destroy Ingredients and Durable Items to add power. For each Ingredient destroyed add 1 point to the ritual total, for each Durable Item destroyed add 15 points to the ritual total. You may not gain power in this way from a Durable Item that expires at the end of the current event. A ritual may gain a maximum of 15 points from this Feat.<p id='hrId'>Lammies for Items destroyed in this way should be handed over to a referee as soon as possible.</p></span>",
                  "keywords" : ["Ritualist"],
                  "materialCosts" : "N/A",
                  "difficulty" : "N/A"
              },
              {
                  "featName" : "Sever the Unbreakable Bonds",
                  "prequisites" : "Nothing",
                  "art" : "breaking-chain",
                  "description" : "<span>This ritual requires an unresisting target, who may or may not contribute to the ritual score. The target must be guided to a mindset of isolation and independence, separate both from those things that might aid them and those that might hinder them. Only then can the bond be broken.<p id='hrId'>Upon successful completion, all items currently attuned to the target deattune, even if they cannot normally be deattuned.</p></span>",
                  "keywords" : ["Ritualist", "Arcane"],
                  "materialCosts" : "None",
                  "difficulty" : "30"
              },
              {
                  "featName" : "Shaper’s Blessing On The Flock",
                  "prequisites" : "Nothing",
                  "art" : "shepherds-crook",
                  "description" : "<span>Those of the Hospitaliers know that their flock need them even when they are not there, so have perfected this ritual to aid even in their absence. The Ritualist calls upon the Shaper to aid and bless their flock, while each celebrant explains one danger they expect to face that day.<p id='hrId'>The leader may use this ritual once per day. Upon successful completion, all participants gain a dated card and write their name upon it. At any stage during that day they may tear this card (including while unconscious, but not while bleeding) to gain one of the following benefits: Full Global Healing; Cure Venom; Cure Disease.</p></span>",
                  "keywords" : ["Ritualist", "CotS"],
                  "materialCosts" : "1 Wax, 1 Gold",
                  "difficulty" : "20"
              },
              {
                  "featName" : "Solitude of Shame",
                  "prequisites" : "Nothing",
                  "art" : "heavy-thorny-triskelion",
                  "description" : "<span>Punishment ritual. The ritualist and other participants detail the wrongs that the target has done to them. Following successful completion of this ritual, the target becomes immune to all protections, except Protection Repair, Protection Healing, and Protection Stop Bleed. This persists until one of the participants of the original ritual who can cast this ritual performs this ritual again to remove it and forgive the target.</span>",
                  "keywords" : ["Punishment", "Referee", "Ritualist", "CotS"],
                  "materialCosts" : "1 Dung, 1 Glass",
                  "difficulty" : "15"
              },
              {
                  "featName" : "Supreme Forgiveness ",
                  "prequisites" : "Nothing",
                  "art" : "kneeling",
                  "description" : "<span>Influential and experienced initiates of the Shaper may sometimes feel confident enough in their knowledge of their Gods feelings to speak for them and forgive the crimes of their comrades in the Shapers name. The leader must deliver a speech extolling the virtues of the target of this ritual, the target must speak as to their crimes and what they have learned from their punishment, and all other participants must forgive these crimes. Upon successful completion of this ritual, all ongoing Punishment rituals on the target end.</span>",
                  "keywords" : ["Ritualist", "CotS"],
                  "materialCosts" : "None",
                  "difficulty" : "30"
              },
              {
                  "featName" : "Sympathetic Ingredients",
                  "prequisites" : "1 Ritualist Feat",
                  "art" : "incense",
                  "description" : "When you lead or participate in a Ritual, ingredients may be used to pay its Material Costs as though they were any other ingredient of the same type. (The four types are metal, animal, plant, and processed material – so you could use bronze instead of iron, or fang instead of dung.)",
                  "keywords" : ["Ritualist"],
                  "materialCosts" : "N/A",
                  "difficulty" : "N/A"
              },
              {
                  "featName" : "Whisper With The Dead",
                  "prequisites" : "Nothing",
                  "art" : "divided-spiral",
                  "description" : "The spirit of a dead character may be summoned to the ritual circle for 5 minutes if their corpse, part thereof, or an item of significance to that character (+10 to difficulty), is placed in the circle. They may freely converse with anyone in the ritual circle but cannot affect anyone physically. At the end of the 5 minutes they return to the land of the dead. Repeated or frivolous use of this ritual on the same target has been known to unsettle the spirits enough to create undead.",
                  "keywords" : ["Referee", "Ritualist", "CotS"],
                  "materialCosts" : "N/A",
                  "difficulty" : "15"
              }
          ]
      },
      {
          "pathName" : "Way of the scholar",
          "featPathColour" : "olive",
          "feats":[
              {
                  "featName" : "Anatomist",
                  "prequisites" : "Nothing",
                  "art" : "anatomy",
                  "description" : "When within touch range of an unresisting target, you may generate the Diagnose Effect. With 10s of roleplayed treatment and Concentration in touch range on an unresisting target, you may generate the Stop Bleed (Location) Effect for 0 Vigour. You may also get additional relevant information throughout games at times deemed relevant by the Event Team.",
                  "keywords" : ["Scholar"]
              },
              {
                  "featName" : "Five Realms Lore",
                  "prequisites" : "Nothing",
                  "art" : "torc",
                  "description" : "You have either travelled widely in the Five Realms or you have closely studied the accounts of those who have. You may use the Research downtime action to ask a question relating to the history and geography of the Five Realms. Your character is familiar with more Locations throughout the Five Realms than the average character. You may get additional relevant information to the history and geography of the Realms throughout events at times deemed relevant by the Event Team.",
                  "keywords" : ["Scholar"]
              },
              {
                  "featName" : "Magic Lore",
                  "prequisites" : "Nothing",
                  "art" : "magic-lamp",
                  "description" : "<span>You have been trained in the art of understanding magic and its rules on a deeper level. You may spend 1 minute concentrating on a magical focus,scroll, or talisman and generate the Identify Effect. You may use the Research downtime action to ask a question relating to magical lore. You may also use the Analyze downtime action to study an arcane item to add it to your Way of the Arcanist crafting list at the relevant level. Gain a +1 bonus to your score for rituals you participate in that have the Arcane keyword. You may also get additional relevant information throughout events at times deemed relevant by the Event Team.</span>",
                  "keywords" : ["Scholar"]
              },
              {
                  "featName" : "Religion Lore",
                  "prequisites" : "Nothing",
                  "art" : "gift-of-knowledge",
                  "description" : "You have received extensive training in the tenets of the church. Gain a +1 bonus to your score for rituals you participate in that have the Church of the Shaper (CotS) keyword. You may use the Research downtime action to ask a question relating to religious lore. You may also get additional relevant information throughout events at times deemed relevant by the Event Team.",
                  "keywords" : ["Scholar"]
              },
              {
                  "featName" : "Spiritual Healer",
                  "prequisites" : "Anatomist",
                  "art" : "prayer",
                  "description" : "This character has training in tending to spiritual wounds as well as physical wounds, they specialize in the identification and treatment of Afflictions. <br/><br/>You may open Lingering Wounds with 10 seconds of roleplay even if the card lists a longer time. Also, you may read and open Affliction cards even if you do not otherwise meet the requirements to do so.<br/><br/> You may also get additional relevant information throughout games at times deemed relevant by the Event Team.",
                  "keywords" : ["Scholar"]
              }
          ]
      },
      {
          "pathName" : "Way of the sorcerous schools",
          "featPathColour" : "brown",
          "feats":[
              {
                  "featName" : "Be the Change You Want to See",
                  "prequisites" : "Nothing",
                  "art" : "wizard-staff",
                  "description" : "Your mastery of transmutative magics allows you to alter yourself easily as you alter others. When you cast a Single-target transmutation Spell at a target other than yourself, you may chain the casting of the same Spell at yourself for 1 Vigour, by adding the vocal “including myself”.",
                  "keywords" : ["Sorcerous Schools"]
              },
              {
                  "featName" : "Do Unto Others",
                  "prequisites" : "1 Sorcerous School Feat",
                  "art" : "divert",
                  "description" : "If you are able to cast both (X) Effect by Spell and Protection (X), when you cast that Effect at a target for its normal Vigour cost, you are able to also cast the Protection (X) spell on yourself for a cost of 1 Vigour less than normal to a minimum of 2.",
                  "keywords" : ["Sorcerous Schools", "Combat"]
              },
              {
                  "featName" : "Enchanting Chain",
                  "prequisites" : "Nothing",
                  "art" : "chained-heart",
                  "description" : "<span>So long as you maintain Concentration, after you cast a Single Target enchantment Spell, you may immediately Instant Cast another Single Target enchantment Spell on the same target for 1 less Vigour (to a minimum of 1). This may be repeated any number of times on the same target at increasing cost, such that the second instant cast costs the base cost, the third instant cast costs base cost plus 1, and so on. The costs of these additional castings may not be reduced. This Feat may not be combined with any other Way of Sorcerous Schools Feat, the Chain Lightning Feat, or the Expanded Potential Feat.</span>",
                  "keywords" : ["Sorcerous Schools"]
              },
              {
                  "featName" : "Evocative Chain",
                  "prequisites" : "Nothing",
                  "art" : "linked-rings",
                  "description" : "<span>So long as you maintain Concentration, after you cast a Single Target evocation Spell, you may immediately Instant Cast another Single Target evocation Spell on the same target for 1 less Vigour (to a minimum of 1). This may be repeated any number of times on the same target at increasing cost, such that the second instant cast costs the base cost, the third instant cast costs base cost plus 1, and so on. The costs of these additional castings may not be reduced.This Feat may not be combined with any other Way of Sorcerous Schools Feat, the Chain Lightning Feat, or the Expanded Potential Feat.</span>",
                  "keywords" : ["Sorcerous Schools"]
              },
              {
                  "featName" : "Evocative Ward",
                  "prequisites" : "Nothing",
                  "art" : "icicles-aura",
                  "description" : "When the charges of your Ward Effect are entirely removed by blocking Effects, you may instantly generate a first level Spell Effect that you know how to cast",
                  "keywords" : ["Sorcerous Schools"]
              },
              {
                  "featName" : "Inclusive Casting",
                  "prequisites" : "2 Sorcerous Schools Feats",
                  "art" : "team-downgrade",
                  "description" : "When casting a Spell with the Mass modifier, you may include yourself as a target of the effect for an additional cost of 1 Vigour. You must include the key words “and myself” to the end of your casting.",
                  "keywords" : ["Sorcerous Schools"]
              },
              {
                  "featName" : "Oathbound",
                  "prequisites" : "3 Sorcerous Schools Feats",
                  "art" : "laurel-crown",
                  "description" : "When you generate an Effect with the Mass modifier that does not already have a target category, you may add either the target category “Non-Gallóglaigh” or “Gallóglach” for 1 additional Vigour cost.",
                  "keywords" : ["Sorcerous Schools"]
              },
              {
                  "featName" : "Physician Heal Thyself",
                  "prequisites" : "1 Sorcerous Schools Feat",
                  "art" : "healing",
                  "description" : "When you cast a Healing Spell on a target other than yourself, you may also cast the exact same Spell on yourself for 1 additional Vigour.",
                  "keywords" : ["Sorcerous Schools"]
              },
              {
                  "featName" : "Prevention and Cure",
                  "prequisites" : "1 Sorcerous School Feat",
                  "art" : "rod-of-asclepius",
                  "description" : "You have focused your studies on the complete nullification of certain Effects. If you know both the Cure and Protection Spell for the same Effect, when you cast the Cure (X) spell for its normal Vigour cost, you are able to additionally cast the Protection (X) Spell at the same target for 1 less Vigour than the normal combined cost of the two Spells, to a minimum of 2 Vigour.",
                  "keywords" : ["Sorcerous Schools"]
              },
              {
                  "featName" : "Saoi’s Revenge",
                  "prequisites" : "3 Sorcerous Schools Feats",
                  "art" : "spiky-explosion",
                  "description" : "When you are reduced to an unconscious state by the Damage Effect, you may cast one 1 Vigour Spell (not Healing) you know as an instant Spell for 0 Vigour.",
                  "keywords" : ["Sorcerous Schools"]
              },
              {
                  "featName" : "Transmutative Chain",
                  "prequisites" : "Nothing",
                  "art" : "eye-shield",
                  "description" : "<span>So long as you maintain Concentration, after you cast a Single Target transmutation Spell, you may immediately Instant Cast another Single Target transmutation Spell on the same target for 1 less Vigour (to a minimum of 1). This may be repeated any number of times on the same target at increasing cost, such that the second instant cast costs the base cost, the third instant cast costs base cost plus 1, and so on. The costs of these additional castings may not be reduced. This Feat may not be combined with any other Way of Sorcerous Schools Feat, the Chain Lightning Feat, or the Expanded Potential Feat.</span>",
                  "keywords" : ["Sorcerous Schools"]
              }
          ]
      }
  ]
}

const downtimeJson = {

  "featPath": [
      {
          "pathName" : "Downtime",
          "featPathColour" : "navy",
          "feats":[
              {
                  "featName" : "Analyze",
                  "prequisites" : "<span id='analyze'>Scholar Feats</span>",
                  "art" : "magnifying-glass",
                  "description" : "<span id='analyze2'>Your character spends time analyzing an item they have found on their adventures, learning how to reproduce it and any relevant additional information as determined by the Event Team. The item may be above the level which your character can craft, in which case they will learn the recipe but will be unable to make it until they learn the required level of Crafting Feat. This action may only be used with items that are not listed in the recipes in Appendix 4 of the Player’s Handbook. This action may only be taken by characters with appropriate Crafting Feats, and Feat must match the type of item, i.e. weapon items can only be studied by characters with Apprentice Blacksmith, magical foci by characters with Apprentice Arcanist, and potions by characters with Apprentice Alchemist.</span>",
                  "keywords" : ["Downtime"]
              },
              {
                  "featName" : "Craft",
                  "prequisites" : "Crafting Feats",
                  "art" : "crafting",
                  "description" : "Your character makes one durable item or one to three consumable items with the same recipe according to the Crafting Feats your character has, if they have the correct Ingredients for the recipe as per Appendix 4. Arcanist and Alchemist crafting are mostly possible only in Locations which are larger Settlements, whereas most Locations which are at least a small Settlement will have a smithy for Forge crafting. The Ingredients needed for the recipe will be used up.",
                  "keywords" : ["Downtime"]
              },
              {
                  "featName" : "Gather",
                  "prequisites" : "Profession Feats",
                  "art" : "basket",
                  "description" : "Your character is adept at seeking out Ingredients, and has better luck in finding exactly what they want. A character with one or more Professions Feats can use this action to find a particular Ingredient no matter where they are. For each instance of this action taken, a character will get 1 of the specified Ingredient for each Feat of the relevant type they have. A character with 2 Artisan Feats could use this action to gather 2 Glass, for example.",
                  "keywords" : ["Downtime"]
              },
              {
                  "featName" : "Guard",
                  "prequisites" : "Non-Peacesworn Only",
                  "art" : "guards",
                  "description" : "Your character stands guard duty in a Settlement, and gets paid 2 coins as a reward. This action is only available in smaller Settlements. A Peacesworn character cannot use the Guard action.",
                  "keywords" : ["Downtime"]
              },
              ,
              {
                  "featName" : "Learn Location",
                  "prequisites" : "None",
                  "art" : "treasure-map",
                  "description" : "When a Character takes the Travel Action they may only Travel to Locations that their character knows, if they wish to add to that list they may use this Action to do so. This Action costs 10 pingin and requires another character who knows the target location <b>and is in the same location</b> as you to take the Teach Location Action and list you as their student. If these conditions are met your character will add that location to their list and move to the named Location as if they had taken the Travel Action.",
                  "keywords" : ["Downtime"]
              },
              ,
              {
                  "featName" : "Teach Location",
                  "prequisites" : "None",
                  "art" : "annexation",
                  "description" : "This Action allows a Character to teach one of the Locations on their list to another character. This Action costs 10 pingin and requires another character to take the Learn Location Action and list you as their Teacher. If these conditions are met the student will add that location to their list and both of you will move to the named Location as if you had taken the Travel Action. Multiple Characters may learn from you in the same action, but all must be in the same location as you when they take the Learn Location Action.",
                  "keywords" : ["Downtime"]
              },
              {
                  "featName" : "Mediate",
                  "prequisites" : "Peacesworn Only",
                  "art" : "discussion",
                  "description" : "Your character acts as a mediator in local disputes, an investigator into violent matters where only a Peacesworn can be trusted, and generally provides a calming influence in the locality. The local populace are grateful and the character receives a payment of 2 coins to represent this. This action is only available in smaller Settlements. Only a Peacesworn character can use the Mediate action.",
                  "keywords" : ["Downtime"]
              },
              {
                  "featName" : "Research",
                  "prequisites" : "A Scholar Feat/Pointed Questions Feat",
                  "art" : "archive-research",
                  "description" : "To select this action, your character needs to have an appropriate Feat. This action allows your character to seek the answer to a question about the world of the game relating to their qualifying Feat. The answer to your character’s question may not be available in their Location, or at all, in which case the response will either point your character to another Location where the answer could be, or make it clear that the answer is not something they can discover using the Research action.",
                  "keywords" : ["Downtime"]
              },
              {
                  "featName" : "Scout",
                  "prequisites" : "None",
                  "art" : "periscope",
                  "description" : "Your character spends some time roving over a Region or Riding Location, getting a good idea of any threats or military activity in the Location. This will give your character an idea of what types of creatures are active in the area, and any other information deemed relevant by the Event Team.",
                  "keywords" : ["Downtime"]
              },
              {
                  "featName" : "Travel",
                  "prequisites" : "None",
                  "art" : "sinagot",
                  "description" : "As described above, your character starts their downtime either at their Location at the end of their last downtime or the last Location of the band. If your character wishes to Travel to another location halfway through their downtime, they select this action and pick their new Location from their list of Known Locations. Travel between any two Locations, however far they are from each other in the game world, takes one action.",
                  "keywords" : ["Downtime"]
              }
          ]
      }
  ]
}

var mq = window.matchMedia( "(max-width: 480px)" );
var lq = window.matchMedia( "only screen and (min-width: 769px) and (max-width: 1400px)" );

var isMobile = mq.matches;
var isLaptop = lq.matches;

console.log(isLaptop);

function addSectionContainer(idToAmend){

  var path = window.location.pathname;
  var page = path.split("/").pop();

  if(page ==="downtime.html"){
    downtimeJson.featPath.forEach((feat) => apendText(feat));
  }else{
    featJson.featPath.forEach((feat) => apendText(feat));
  }
}

function apendText(featPath){

  let featsArray = featPath.feats;
  let pathName = featPath.pathName;
  let featPathColour = featPath.featPathColour;
  let sectionContainerId = "sectionContainer_" + pathName.split(" ").join("");

  let featCode = 
  "<div class=\"section-container\" id=\"" + sectionContainerId + "\" style=\"background-color: " + featPathColour + ";\" onclick=\"mobileExpand('" + sectionContainerId + "')\" >" + 
    "<div class=\"section-title\">" +
      "<span class=\"featPath-description-title-text\">" + pathName + "</span>" +
    "</div>" +
    "<div class=\"section-content\">" +
      "<div class=\"section-row\">";
      
      featsArray.forEach(feat => {

        let featName = feat.featName;
        let featRequirements = feat.prequisites;
        let art = feat.art;
        let description = feat.description;

        let keywords = feat.keywords;

        let keywordsText = "<hr id='hrId'><p id='popupKeywordTextPTag'><i id='popupKeywordText'>Keywords: ";

        for (let i = 0; i < keywords.length; i++) {
          
          if(i < (keywords.length - 1)){
            keywordsText += manageKeywordsOnPopup(keywords[i]) + ", ";
          }
          else{ keywordsText += manageKeywordsOnPopup(keywords[i]) + " "; }  
        }

        keywordsText + "</i>";
        description += keywordsText + "</p>";

        if(pathName === "Way of the ritualist"){
          let difficulty = feat.difficulty;
          let materialCosts = feat.materialCosts;

          if(materialCosts !== "N/A" && materialCosts !== "None"){
            description = "<p><i id='popupMaterialCost'>Material Costs: " + materialCosts + " </i></p>" + description;
          }

          if(difficulty !== "N/A"){
            description = "<p><i id='popupDifficulty' >Difficulty: " + difficulty + " </i></p>" + description;
          }

        
        }

        if(pathName === "Way of the ritualist" && isMobile && featRequirements === "Nothing"){}
        else{
            description = "<p><i id='popupMaterialCost'>Prerequisite: " + featRequirements + " </i></p>" + description;
        }

        let url = "./img/Feats/" + pathName + "/" + art + ".png";

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize expandable\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" +
            "<div class=\"item-text-container text expandable\">" +
              "<div class=\"item-title feat-description-title-text expandable\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text expandable\" style=\"color:" + featPathColour + ";\">(P): " + featRequirements + "</div>" +
            "</div>" +       
          "</div>";
        });

    featCode +=   
      "</div>" +
    "</div>" +
  "</div>";

  if(isMobile){
    featCode = featCode.replace("<span>Your character enters a crazed state which you should roleplay, shaking off their wounds for one last final fight. You must be unconscious to activate this Feat, and it costs 4 Vigour to activate. When activated the following happens to your character: <ul style='padding:2%;'><li id='hrId'>Your torso ", "<span style='font-size:10px;'>Your character enters a crazed state which you should roleplay, shaking off their wounds for one last final fight. You must be unconscious to activate this Feat, and it costs 4 Vigour to activate. When activated the following happens to your character: <ul style='padding:5%;'><li id='hrId'>Your torso ");
    featCode = featCode.replace("<span>You are skilled at creating useful processed good through ", "<span style='font-size:11px;'>You are skilled at creating useful processed good through ");
    featCode = featCode.replace("<span>You are practiced in the field of growing plants", "<span style='font-size:11px;'>You are practiced in the field of growing plants");
    featCode = featCode.replace("<span>You are experienced with the arts of tracking animals", "<span style='font-size:11px;'>You are experienced with the arts of tracking animals");
    featCode = featCode.replace("<span>You are accustomed to working in the mines", "<span style='font-size:11px;'>You are accustomed to working in the mines");
    featCode = featCode.replace("<span>Rather than summoning a specific spirit,", "<span style='font-size:11px;'>Rather than summoning a specific spirit,");
    featCode = featCode.replace("<span><p id='hrId'>You may perform two rituals simultaneously. ", "<span style='font-size:10px;'><p id='hrId'>You may perform two rituals simultaneously. ");
    featCode = featCode.replace("<span><p id='hrId'>This ritual places an invisible magical mark upon its target", "<span style='font-size:10px;'><p id='hrId'>This ritual places an invisible magical mark upon its target");
    featCode = featCode.replace("<span><p id='hrId'>A ritual of the Shaper, used to prepare warriors for their fate before a battle.", "<span style='font-size:10px;'><p id='hrId'>A ritual of the Shaper, used to prepare warriors for their fate before a battle.");
    featCode = featCode.replaceAll("<span>Initiates of the church of the shaper", "<span style='font-size:10px;'>Initiates of the church of the shaper");
    featCode = featCode.replace("<span><p id='hrId'>Punishment ritual. The target must be confronted with descriptions of their own death.", "<span style='font-size:11px;'><p id='hrId'>Punishment ritual. The target must be confronted with descriptions of their own death.");
    featCode = featCode.replace("<span>Must be performed over the corpse of the character(s)", "<span style='font-size:9px;'>Must be performed over the corpse of the character(s)");
    featCode = featCode.replace("<span>When you lead or participate in a ritual, you may", "<span style='font-size:11px;'>When you lead or participate in a ritual, you may");
    featCode = featCode.replace("<span>This ritual requires an unresisting target, who", "<span style='font-size:11px;'>This ritual requires an unresisting target, who");
    featCode = featCode.replace("<span>Those of the Hospitaliers know that their flock need them even when they are not", "<span style='font-size:9px;'>Those of the Hospitaliers know that their flock need them even when they are not");
    featCode = featCode.replace("<span>Punishment ritual. The ritualist and other participants detail the wrongs", "<span style='font-size:11px;'>Punishment ritual. The ritualist and other participants detail the wrongs");
    featCode = featCode.replace("<span>Influential and experienced initiates of the Shaper may", "<span style='font-size:11px;'>Influential and experienced initiates of the Shaper may");
    featCode = featCode.replace("<span>You have been trained in the art of understanding magic", "<span style='font-size:11px;'>You have been trained in the art of understanding magic");
    featCode = featCode.replace("<span>You have studied the art of metalwork ", "<span style='font-size:11px;'>You have studied the art of metalwork ");
    featCode = featCode.replaceAll("<span>So long as you maintain Concentration, after you cast a Single Target ", "<span style='font-size:11px;'>So long as you maintain Concentration, after you cast a Single Target ");

    featCode = featCode.replaceAll("<i id='popupMaterialCost'>Prerequisite: <span id='analyze'>", "<span id = 'analyze' style='font-size:10px;'><i id='popupMaterialCost'>Prerequisite: ");
    featCode = featCode.replace("<span id='analyze2'>", "<span id='analyze2' style='font-size:10px;'>");

    
  }

if(isLaptop){
    featCode = featCode.replace("<span>Your character enters a crazed state which you should roleplay, ", "<span style='font-size:11px;'>Your character enters a crazed state which you should roleplay, ");
    featCode = featCode.replace("<span>Initiates of the church of the shaper learn to invigorate", "<span style='font-size:11px;'>Initiates of the church of the shaper learn to invigorate");
    featCode = featCode.replace("<span><p id='hrId'>A ritual of the Shaper, used to prepare warriors for their fate before a battle.", "<span style='font-size:11px;'><p id='hrId'>A ritual of the Shaper, used to prepare warriors for their fate before a battle.");
    featCode = featCode.replace("<span><p id='hrId'>This ritual places an invisible magical mark upon its target", "<span style='font-size:11px;'><p id='hrId'>This ritual places an invisible magical mark upon its target");
    featCode = featCode.replace("<span>Those of the Hospitaliers know that their flock need them even when they are not", "<span style='font-size:11px;'>Those of the Hospitaliers know that their flock need them even when they are not");
    featCode = featCode.replace("<span><p id='hrId'>Punishment ritual. The target must be confronted with descriptions of their own death.", "<span style='font-size:11px;'><p id='hrId'>Punishment ritual. The target must be confronted with descriptions of their own death.");
    featCode = featCode.replace("<span>Initiates of the church of the shaper learn to reassure their flock,", "<span style='font-size:11px;'>Initiates of the church of the shaper learn to reassure their flock,");
}

document.getElementById("featsContainer").innerHTML += featCode;
}

addSectionContainer("addSectionContainer");

var itemIconElements = document.getElementsByClassName("item-icon"); 

for(let element of itemIconElements){

  element.addEventListener("click", e => event.stopPropagation(), true);
  element.addEventListener("click", e => showHide(element.id), true);
}

document.addEventListener("click", e => hidePopup(e), true);


function manageKeywordsOnPopup(keyword){
  let returnText = "";

  switch(keyword){

  case "Combat":
  returnText = "<span id='keyword' class='tooltip' data-tooltip='If you decided that your character was a Peacesworn, your character will not be able to take any Feats that have the Combat keyword.'data-tooltip-position='bottom'>Combat</span>";
  return returnText;

  case "Multiple":
    returnText = "<span id='keyword' class='tooltip' data-tooltip='These Feats can be taken multiple times. 'data-tooltip-position='bottom'>Multiple</span>";
    return returnText;

  default:
    return keyword;
  }

}

