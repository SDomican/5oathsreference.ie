const spellJson = {

  "featPath": [
      {
          "pathName" : "First Level Spells (1 Vigour)",
          "featPathColour" : "maroon",
          "feats":[
              {
                  "featName" : "Charm",
                  "call" : "<span id='charm'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Charm (10 seconds)</span>",
                  "art" : "charm",
                  "description" : "<span><p>For the duration of the Effect, the target(s) of this Effect becomes well disposed to the source and treats them as a close friend. This Effect ends if the source strikes, or casts an offensive spell at the charmed target. When this effect ends they are aware they were magically compelled. The guidelines for how to behave while under this effect are as follows.</p><p> A Character under the Charm Effect: </p> <ul style='padding:2%;'><li id='hrId'>Won't take aggressive actions towards the source of the Effect, including casting harmful spells or attacking with a weapon.</li><li id='hrId'>Will provide healing or similar nonviolent support to the source of the Effect.</li><li id='hrId'>Will physically protect the source of the Effect if they are martially capable, there is not a requirement for the Charmed Character to injure anyone.</li><li id='hrId'>Is well disposed towards the source of the Effect. This disposition does not extend to allies of the source of the Effect.</li></ul><span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Cure Charm",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Charm",
                  "art" : "broken-heart",
                  "description" : "This Effect is instantaneous. The target of a Cure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Cure Daze",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Daze",
                  "art" : "cure-daze",
                  "description" : "This Effect is instantaneous. The target of a Daze Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Cure Fear",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Fear",
                  "art" : "cure-fear",
                  "description" : "This Effect is instantaneous. The target of a Fear Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Cure Mute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Mute",
                  "art" : "cure-mute",
                  "description" : "This Effect is instantaneous. The target of a Mute Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Cure Sleep",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Sleep",
                  "art" : "cure-sleep",
                  "description" : "This Effect is instantaneous. The target of a Sleep Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Daze 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Daze (10 seconds)",
                  "art" : "daze",
                  "description" : "The target is confused for the duration of the Effect. They cannot voluntarily walk or run, cannot strike anyone, and cannot concentrate. They can still talk, and can still defend themselves from strikes.",
                  "magicSchool" : ["C","Ev"]
              },
              {
                  "featName" : "Detect Beast",
                  "call" : "Detect Beast",
                  "art" : "beast-eye",
                  "description" : "This Effect is instantaneous, when a character who is within Audible range of the source of the effect is a member of the target group or has an item of the target group they must say “Ping” in a loud clear voice. In character, this Effect causes this noise, so everyone around the Detected character is aware of the Effect. This Effect is considered to always have the Piercing Modifier.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Detect Bleeding",
                  "call" : "Detect Bleeding",
                  "art" : "bleeding-eye",
                  "description" : "This Effect is instantaneous, when a character who is within Audible range of the source of the effect is a member of the target group or has an item of the target group they must say “Ping” in a loud clear voice. In character, this Effect causes this noise, so everyone around the Detected character is aware of the Effect. This Effect is considered to always have the Piercing Modifier.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Detect Gwyllt",
                  "call" : "Detect Gwyllt",
                  "art" : "monster-grasp",
                  "description" : "This Effect is instantaneous, when a character who is within Audible range of the source of the effect is a member of the target group or has an item of the target group they must say “Ping” in a loud clear voice. In character, this Effect causes this noise, so everyone around the Detected character is aware of the Effect. This Effect is considered to always have the Piercing Modifier.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Detect Mortal",
                  "call" : "Detect Mortal",
                  "art" : "person",
                  "description" : "This Effect is instantaneous, when a character who is within Audible range of the source of the effect is a member of the target group or has an item of the target group they must say “Ping” in a loud clear voice. In character, this Effect causes this noise, so everyone around the Detected character is aware of the Effect. This Effect is considered to always have the Piercing Modifier.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Detect Undead",
                  "call" : "Detect Undead",
                  "art" : "shambling-zombie",
                  "description" : "This Effect is instantaneous, when a character who is within Audible range of the source of the effect is a member of the target group or has an item of the target group they must say “Ping” in a loud clear voice. In character, this Effect causes this noise, so everyone around the Detected character is aware of the Effect. This Effect is considered to always have the Piercing Modifier.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Fumble",
                  "call" : "<span id='fumble'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Fumble (Location)</span>",
                  "art" : "drop-weapon",
                  "description" : "<span>This Effect is instantaneous. The target is forced to drop any items held in the target location. Items may not be caught until they have fallen on the ground. If an item held within the target’s hand is a larp-safe item, such as a weapon, a shield or an approved spell-focus then the Effect may be generated by striking the item where the Effect is being delivered by weapon blow. If you have an OOC reason for not wishing to drop the affected item you may choose to let the item hang limp for 10 seconds. During this time it may not be used in any way and blows that strike it are treated as having struck the location holding it.</span>",
                  "magicSchool" : ["C","Tr"]
              },
              {
                  "featName" : "Global Stop Bleed",
                  "call" : "Global Stop Bleed",
                  "art" : "hand-bandage",
                  "description" : "This Effect is instantaneous. This Effect has a range of 5cm from the target unless otherwise specified. The target’s Body hits on the target location are restored to 0 Body hits if on -1 Body hits.",
                  "magicSchool" : ["Global","Tr"]
              },
              {
                  "featName" : "Healing 1",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Healing 1 (Location)",
                  "art" : "hospital-cross",
                  "description" : "This Effect is instantaneous. The target recovers a number of Body hits equal to the amount stated by the generator of this Effect.",
                  "magicSchool" : ["En"]
              },
              {
                  "featName" : "Mindslash",
                  "call" : "Mindslash",
                  "art" : "brain-tentacle",
                  "description" : "This Effect is instantaneous. The Effect breaks the Concentration of the target",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Mute 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mute (10 seconds)",
                  "art" : "mute",
                  "description" : "The target is silenced. For the duration of the Spell the character cannot perform any vocal action including casting Spells. They may still generate weapon blow Effects, or other actions which require Concentration.",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Protection Charm 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Charm 5 minutes",
                  "art" : "protection-charm",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Daze 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Daze 5 minutes",
                  "art" : "protection-daze",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Fumble 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Fumble 5 minutes",
                  "art" : "protection-fumble",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Mindslash 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Mindslash 5 minutes",
                  "art" : "protection-mindslash",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Mute 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Mute 5 minutes",
                  "art" : "protection-mute",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Push 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Push 5 minutes",
                  "art" : "protection-push",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Single Damage",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Single Damage (Location)",
                  "art" : "punch-blast",
                  "description" : "This Effect is instantaneous. 1 is removed from the target hits on the called location, starting with Armour, then Body.",
                  "magicSchool" : ["C","Ev"]
              }
          ]
      },
      {
          "pathName" : "Second Level Spells (2 Vigour)",
          "featPathColour" : "blue",
          "feats":[
              {
                  "featName" : "Charm 30s Beast",
                  "call" : "<span id='charm'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Charm 30 seconds Beast<span>",
                  "art" : "charm-beast",
                  "description" : "<span><p>For the duration of the Effect, the target(s) of this Effect becomes well disposed to the source and treats them as a close friend. This Effect ends if the source strikes, or casts an offensive spell at the charmed target. When this effect ends they are aware they were magically compelled. The guidelines for how to behave while under this effect are as follows.</p><p> A Character under the Charm Effect: </p> <ul style='padding:2%;'><li id='hrId'>Won't take aggressive actions towards the source of the Effect, including casting harmful spells or attacking with a weapon.</li><li id='hrId'>Will provide healing or similar nonviolent support to the source of the Effect.</li><li id='hrId'>Will physically protect the source of the Effect if they are martially capable, there is not a requirement for the Charmed Character to injure anyone.</li><li id='hrId'>Is well disposed towards the source of the Effect. This disposition does not extend to allies of the source of the Effect.</li></ul></span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Charm 30s Mortal",
                  "call" : "<span id='charm'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Charm 30 seconds Mortal<span>",
                  "art" : "charm-mortal",
                  "description" : "<span><p>For the duration of the Effect, the target(s) of this Effect becomes well disposed to the source and treats them as a close friend. This Effect ends if the source strikes, or casts an offensive spell at the charmed target. When this effect ends they are aware they were magically compelled. The guidelines for how to behave while under this effect are as follows.</p><p> A Character under the Charm Effect: </p> <ul style='padding:2%;'><li id='hrId'>Won't take aggressive actions towards the source of the Effect, including casting harmful spells or attacking with a weapon.</li><li id='hrId'>Will provide healing or similar nonviolent support to the source of the Effect.</li><li id='hrId'>Will physically protect the source of the Effect if they are martially capable, there is not a requirement for the Charmed Character to injure anyone.</li><li id='hrId'>Is well disposed towards the source of the Effect. This disposition does not extend to allies of the source of the Effect.</li></ul></span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Cure Disease",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Disease",
                  "art" : "cure-disease",
                  "description" : "This Effect is instantaneous. The target of a Disease Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Cure Halt",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Halt",
                  "art" : "cure-halt",
                  "description" : "This Effect is instantaneous. The target of a Cure Halt has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Cure Lure",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Lure",
                  "art" : "cure-lure",
                  "description" : "This Effect is instantaneous. The target of a Lure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Cure Rampage",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Rampage",
                  "art" : "cure-rampage",
                  "description" : "This Effect is instantaneous. The target of a Rampage Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Cure Venom",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Venom",
                  "art" : "cure-venom",
                  "description" : "This Effect is instantaneous. The target of a Venom Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Fear Beast 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Fear Fear",
                  "art" : "fear-beast",
                  "description" : "The target becomes filled with dread towards the source of this Effect for the duration of the Effect. For the duration they must move out of the source’s melee and spellcasting range (10m), cannot strike anyone or concentrate, and must roleplay terror (cowering, hiding, etc).",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Fear Undead 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Fear Undead",
                  "art" : "fear-undead",
                  "description" : "The target becomes filled with dread towards the source of this Effect for the duration of the Effect. For the duration they must move out of the source’s melee and spellcasting range (10m), cannot strike anyone or concentrate, and must roleplay terror (cowering, hiding, etc).",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Global Healing 1",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Global Healing 1",
                  "art" : "healing-shield",
                  "description" : "This Effect is instantaneous. A Global Healing 1 Effect will target all 6 locations on the target character’s body, and restore 1 Body hit to each location.",
                  "magicSchool" : ["Global","C","Ev"]
              },
              {
                  "featName" : "Halt 10s Gwyllt",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Halt 10 second Gwyllt",
                  "art" : "halt-gwyllt",
                  "description" : "The target is frozen to the spot for the duration of the Effect, and may not move, speak, or take any actions. They are still aware of their surroundings. Items may not be taken from a Halted character, voluntarily or otherwise. Fumble will still cause a Halted character to drop a carried item",
                  "magicSchool" : ["C","Ev"]
              },
              {
                  "featName" : "Halt 10s Undead",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Halt 10 second Undead",
                  "art" : "halt-undead",
                  "description" : "The target is frozen to the spot for the duration of the Effect, and may not move, speak, or take any actions. They are still aware of their surroundings. Items may not be taken from a Halted character, voluntarily or otherwise. Fumble will still cause a Halted character to drop a carried item",
                  "magicSchool" : ["C","Ev"]
              },
              {
                  "featName" : "Protection Healing 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Healing 5 minutes",
                  "art" : "protection-healing",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["C","Tr"]
              },
              {
                  "featName" : "Protection Protection 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Protection 5 minutes",
                  "art" : "protection-protection",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Rampage 10s Beast",
                  "call" : "<span id='rampage'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Rampage Beast 10 seconds</span>",
                  "art" : "rampage-beast",
                  "description" : "<span>The target is filled with uncontrollable rage. For the duration they will strike the closest being to them, including their allies, to the best of their ability and continue either until their target has escaped beyond reasonable pursuit or their target is downed. If they cause a creature to fall unconscious, they will either move to strike the next closest creature, or if there is no other creature close by they will use the Execute call on the downed creature.</span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Rampage 10s Mortal",
                  "call" : "<span id='rampage'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Rampage Mortal 10 seconds</span>",
                  "art" : "rampage-mortal",
                  "description" : "<span>The target is filled with uncontrollable rage. For the duration they will strike the closest being to them, including their allies, to the best of their ability and continue either until their target has escaped beyond reasonable pursuit or their target is downed. If they cause a creature to fall unconscious, they will either move to strike the next closest creature, or if there is no other creature close by they will use the Execute call on the downed creature.</span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Sleep Beast 10s",
                  "call" : "<span id='sleep'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Sleep Beast 10 seconds</span>",
                  "art" : "sleep-beast",
                  "description" : "<span>The target falls to the ground, asleep, for the duration of the Effect. If the target loses a point of Body after the start of the Sleep Effect, the Effect ends immediately. Items may not be taken from a character under the Sleep Effect, voluntarily or otherwise. While asleep a character is unconscious, unable to take any other actions, and is unaware of what is IC happening around them (players should still stay aware of what is OOC happening around them for safety reasons).</span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Sleep Mortal 10s",
                  "call" : "<span id='sleep'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Sleep Mortal 10 seconds</span>",
                  "art" : "sleep-mortal",
                  "description" : "<span>The target falls to the ground, asleep, for the duration of the Effect. If the target loses a point of Body after the start of the Sleep Effect, the Effect ends immediately. Items may not be taken from a character under the Sleep Effect, voluntarily or otherwise. While asleep a character is unconscious, unable to take any other actions, and is unaware of what is IC happening around them (players should still stay aware of what is OOC happening around them for safety reasons).</span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Ward 1",
                  "call" : "<span id = 'ward'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Ward One</span>",
                  "art" : "ward1",
                  "description" : "<span>This Effect is instantaneous and may only be cast on the source. A barrier of invisible magical energy surrounds the character casting the Spell. This energy, or Ward, protects the character from any ranged, Non Piercing Effect not delivered by weapon blow that would normally affect them (Except Drop, Diagnose and Notice Bleed). The number in the Ward call is the number of times the character will be protected by the Ward, this is the “charges” that the Ward Spell has. A character should respond “warded” if their Ward protects them from an Effect in this way, and one charge in their Ward is removed. <p>The number of charges on the Ward is determined by the Spell that grants it. A Ward Effect expires when all charges are removed, or if the character willingly drops their Ward. A warded character cannot regain Vigour.</p></span>",
                  "magicSchool" : ["Ev"]
              }
          ]
      },
      {
          "pathName" : "Third Level Spells (3 Vigour)",
          "featPathColour" : "green",
          "feats":[
              {
                  "featName" : "Charm 30s",
                  "call" : "<span id='charm'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Charm 30 seconds</span>",
                  "art" : "charm30",
                  "description" : "<span><p>For the duration of the Effect, the target(s) of this Effect becomes well disposed to the source and treats them as a close friend. This Effect ends if the source strikes, or casts an offensive spell at the charmed target. When this effect ends they are aware they were magically compelled. The guidelines for how to behave while under this effect are as follows.</p><p> A Character under the Charm Effect: </p> <ul style='padding:2%;'><li id='hrId'>Won't take aggressive actions towards the source of the Effect, including casting harmful spells or attacking with a weapon.</li><li id='hrId'>Will provide healing or similar nonviolent support to the source of the Effect.</li><li id='hrId'>Will physically protect the source of the Effect if they are martially capable, there is not a requirement for the Charmed Character to injure anyone.</li><li id='hrId'>Is well disposed towards the source of the Effect. This disposition does not extend to allies of the source of the Effect.</li></ul></span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Cure Protection",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Cure Protection",
                  "art" : "cure-protection",
                  "description" : "This Effect is instantaneous. The target of a Protection Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Ev"]
              },
              {
                  "featName" : "Daze 30s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Daze 30 seconds",
                  "art" : "daze30",
                  "description" : "The target is confused for the duration of the Effect. They cannot voluntarily walk or run, cannot strike anyone, and cannot concentrate. They can still talk, and can still defend themselves from strikes.",
                  "magicSchool" : ["C","Ev"]
              },
              {
                  "featName" : "Disease",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Disease",
                  "art" : "disease",
                  "description" : "This Effect is instantaneous. The target of Disease suffers a detriment to the Healing Effect. Any Healing that would cause the target’s Body hits to rise above 0 causes them to rise to 0 only. This includes the Healing Effect granted by the Recovery mechanic. This Effect remains in place until a Cure Effect is called on the target, or until Time Out is called.",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Fear 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Fear 10 seconds",
                  "art" : "fear",
                  "description" : "The target becomes filled with dread towards the source of this Effect for the duration of the Effect. For the duration they must move out of the source’s melee and spellcasting range (10m), cannot strike anyone or Concentrate, and must roleplay terror (cowering, hiding, etc).",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Full Healing",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Full Healing (Location)",
                  "art" : "heart-plus",
                  "description" : "This Effect is instantaneous. The target recovers all Body hits to the location",
                  "magicSchool" : ["En"]
              },
              {
                  "featName" : "Halt 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Halt 10 seconds",
                  "art" : "halt",
                  "description" : "The target is frozen to the spot for the duration of the Effect, and may not move, speak, or take any actions. They are still aware of their surroundings. Items may not be taken from a Halted character, voluntarily or otherwise. Fumble will still cause a Halted character to drop a carried item.",
                  "magicSchool" : ["C","Ev"]
              },
              {
                  "featName" : "Lure 10s Gwyllt",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Lure 10 seconds Gwyllt",
                  "art" : "lure-gwyllt",
                  "description" : "For the duration, the target of this Effect becomes fixated on the source of the Effect and can do nothing but move towards it at normal walking speed, altering their path if the source moves locations, and remaining motionless when they reach the source. Being struck by the Damage Effect will not break the Lure Effect. Please note: Grappling/restraining people is not permitted.",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Lure 10s Undead",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Lure 10 seconds Undead",
                  "art" : "lure-undead",
                  "description" : "For the duration, the target of this Effect becomes fixated on the source of the Effect and can do nothing but move towards it at normal walking speed, altering their path if the source moves locations, and remaining motionless when they reach the source. Being struck by the Damage Effect will not break the Lure Effect. Please note: Grappling/restraining people is not permitted.",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Mute 30s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mute 30 seconds",
                  "art" : "mute30",
                  "description" : "The target is silenced. For the duration of the Spell the character cannot perform any vocal action including casting Spells. They may still generate weapon blow Effects, or other actions which require Concentration.",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Protection Disease 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Disease 5 minutes",
                  "art" : "protection-disease",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Fear 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Fear 5 minutes",
                  "art" : "protection-fear",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Halt 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Halt 5 minutes",
                  "art" : "protection-halt",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Rampage 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Rampage 5 minutes",
                  "art" : "protection-rampage",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Sleep 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Sleep 5 minutes",
                  "art" : "protection-sleep",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Stop Bleed 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Stop Bleed 5 minutes",
                  "art" : "protection-stop-bleed",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Through 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Through 5 minutes",
                  "art" : "protection-through",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Venom 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Venom 5 minutes",
                  "art" : "protection-venom",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Sleep 10s",
                  "call" : "<span id='sleep'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Sleep 10 seconds</span>",
                  "art" : "sleep",
                  "description" : "<span>The target falls to the ground, asleep, for the duration of the Effect. If the target loses a point of Body after the start of the Sleep Effect, the Effect ends immediately. Items may not be taken from a character under the Sleep Effect, voluntarily or otherwise. While asleep a character is unconscious, unable to take any other actions, and is unaware of what is IC happening around them (players should still stay aware of what is OOC happening around them for safety reasons).</span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Rampage 10s",
                  "call" : "<span id='rampage'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Rampage 10 seconds</span>",
                  "art" : "rampage",
                  "description" : "<span>The target is filled with uncontrollable rage. For the duration they will strike the closest being to them, including their allies, to the best of their ability and continue either until their target has escaped beyond reasonable pursuit or their target is downed. If they cause a creature to fall unconscious, they will either move to strike the next closest creature, or if there is no other creature close by they will use the Execute call on the downed creature.</span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Ward 2",
                  "call" : "<span id = 'ward'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Ward 2</span>",
                  "art" : "ward2",
                  "description" : "<span>This Effect is instantaneous and may only be cast on the source. A barrier of invisible magical energy surrounds the character casting the Spell. This energy, or Ward, protects the character from any ranged, Non Piercing Effect not delivered by weapon blow that would normally affect them (Except Drop, Diagnose and Notice Bleed). The number in the Ward call is the number of times the character will be protected by the Ward, this is the “charges” that the Ward Spell has. A character should respond “warded” if their Ward protects them from an Effect in this way, and one charge in their Ward is removed. <p>The number of charges on the Ward is determined by the Spell that grants it. A Ward Effect expires when all charges are removed, or if the character willingly drops their Ward. A warded character cannot regain Vigour.</p></span>",
                  "magicSchool" : ["Ev"]
              }
          ]
      },
      {
          "pathName" : "Fourth Level Spells (4 Vigour)",
          "featPathColour" : "black",
          "feats":[
              {
                  "featName" : "Halt 30s Gwyllt",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Halt Gwyllt 30 seconds",
                  "art" : "halt30-gwyllt",
                  "description" : "The target is frozen to the spot for the duration of the Effect, and may not move, speak, or take any actions. They are still aware of their surroundings. Items may not be taken from a Halted character, voluntarily or otherwise. Fumble will still cause a Halted character to drop a carried item",
                  "magicSchool" : ["C","Ev"]
              },
              {
                  "featName" : "Halt 30s Undead",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Halt Undead 30 seconds",
                  "art" : "halt30-undead",
                  "description" : "The target is frozen to the spot for the duration of the Effect, and may not move, speak, or take any actions. They are still aware of their surroundings. Items may not be taken from a Halted character, voluntarily or otherwise. Fumble will still cause a Halted character to drop a carried item",
                  "magicSchool" : ["C","Ev"]
              },
              {
                  "featName" : "Identify",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Identify",
                  "art" : "magnifying-glass",
                  "description" : "This Effect is instantaneous. You gain knowledge of the properties of a lammied item without attuning to that item",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Lure",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Lure",
                  "art" : "lure",
                  "description" : "For the duration, the target of this Effect becomes fixated on the source of the Effect and can do nothing but move towards it at normal walking speed, altering their path if the source moves locations, and remaining motionless when they reach the source. Being struck by the Damage Effect will not break the Lure Effect. Please note: Grappling/restraining people is not permitted.",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Mass Charm 10s",
                  "call" : "<span id='charm'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Charm 10 seconds</span>",
                  "art" : "mass-charm",
                  "description" : "<span><p>For the duration of the Effect, the target(s) of this Effect becomes well disposed to the source and treats them as a close friend. This Effect ends if the source strikes, or casts an offensive spell at the charmed target. When this effect ends they are aware they were magically compelled. The guidelines for how to behave while under this effect are as follows.</p><p> A Character under the Charm Effect: </p> <ul style='padding:2%;'><li id='hrId'>Won't take aggressive actions towards the source of the Effect, including casting harmful spells or attacking with a weapon.</li><li id='hrId'>Will provide healing or similar nonviolent support to the source of the Effect.</li><li id='hrId'>Will physically protect the source of the Effect if they are martially capable, there is not a requirement for the Charmed Character to injure anyone.</li><li id='hrId'>Is well disposed towards the source of the Effect. This disposition does not extend to allies of the source of the Effect.</li></ul></span>",
                  "magicSchool" : ["Mass","C","En"]
              },
              {
                  "featName" : "Mass Cure Charm",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Cure Charm",
                  "art" : "mass-cure-charm",
                  "description" : "This Effect is instantaneous. The target(s) of a Cure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Cure Daze",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Cure Daze",
                  "art" : "mass-cure-daze",
                  "description" : "This Effect is instantaneous. The target(s) of a Cure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Cure Mute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Cure Mute",
                  "art" : "mass-cure-mute",
                  "description" : "This Effect is instantaneous. The target(s) of a Cure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Cure Fear",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Cure Fear",
                  "art" : "mass-cure-fear",
                  "description" : "This Effect is instantaneous. The target(s) of a Cure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Cure Sleep",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Cure Sleep",
                  "art" : "mass-cure-sleep",
                  "description" : "This Effect is instantaneous. The target(s) of a Cure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Daze 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Daze 10 seconds",
                  "art" : "mass-daze",
                  "description" : "The target(s) are confused for the duration of the Effect. They cannot voluntarily walk or run, cannot strike anyone, and cannot concentrate. They can still talk, and can still defend themselves from strikes.",
                  "magicSchool" : ["Mass","C","Ev"]
              },
              {
                  "featName" : "Mass Fumble",
                  "call" : "<span id='fumble'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Fumble (Location)</span>",
                  "art" : "mass-fumble",
                  "description" : "<span>This Effect is instantaneous. The target(s) are forced to drop any items held in the target location. Items may not be caught until they have fallen on the ground. If an item held within the target’s hand is a larp-safe item, such as a weapon, a shield or an approved spell-focusthen the Effect may be generated by striking the item where the Effect is being delivered by weapon blow. If you have an OOC reason for not wishing to drop the affected item you may choose to let the item hang limp for 10 seconds. During this time it may not be used in any way and blows that strike it are treated as having struck the location holding it.</span>",
                  "magicSchool" : ["Mass","C","Tr"]
              },
              {
                  "featName" : "Mass Mute 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Mute 10 seconds",
                  "art" : "mass-mute",
                  "description" : "The target(s) are silenced. For the duration of the Spell the character cannot perform any vocal action including casting Spells. They may still generate weapon blow Effects, or other actions which require Concentration.",
                  "magicSchool" : ["Mass","C","En"]
              },
              {
                  "featName" : "Mass Protection Charm 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Protection Charm 5 minutes",
                  "art" : "mass-protection-charm",
                  "description" : "The target(s) are protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Protection Daze 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Protection Daze 5 minutes",
                  "art" : "mass-protection-daze",
                  "description" : "The target(s) are protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Protection Fumble 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Protection Fumble 5 minutes",
                  "art" : "mass-protection-fumble",
                  "description" : "The target(s) are protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Protection Mindslash 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Protection Mindslash 5 minutes",
                  "art" : "mass-protection-mindslash",
                  "description" : "The target(s) are protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Protection Mute 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Protection Mute 5 minutes",
                  "art" : "mass-protection-mute",
                  "description" : "The target(s) are protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Protection Execute 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Execute 5 minute",
                  "art" : "protection-execute",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Lure 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Lure 5 minute",
                  "art" : "protection-lure",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Protection Shatter 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Protection Shatter 5 minute",
                  "art" : "protection-shatter",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect",
                  "magicSchool" : ["Tr"]
              },
              {
                  "featName" : "Rampage 30s Beast",
                  "call" : "<span id='rampage'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Rampage Beast 30 seconds</span>",
                  "art" : "rampage30-beast",
                  "description" : "<span>The target is filled with uncontrollable rage. For the duration they will strike the closest being to them, including their allies, to the best of their ability and continue either until their target has escaped beyond reasonable pursuit or their target is downed. If they cause a creature to fall unconscious, they will either move to strike the next closest creature, or if there is no other creature close by they will use the Execute call on the downed creature.</span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Rampage 30s Mortal",
                  "call" : "<span id='rampage'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Rampage Mortal 30 seconds</span>",
                  "art" : "rampage30-mortal",
                  "description" : "<span>The target is filled with uncontrollable rage. For the duration they will strike the closest being to them, including their allies, to the best of their ability and continue either until their target has escaped beyond reasonable pursuit or their target is downed. If they cause a creature to fall unconscious, they will either move to strike the next closest creature, or if there is no other creature close by they will use the Execute call on the downed creature.</span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Ward 3",
                  "call" : "<span id = 'ward'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Ward 3</span>",
                  "art" : "ward3",
                  "description" : "<span>This Effect is instantaneous and may only be cast on the source. A barrier of invisible magical energy surrounds the character casting the Spell. This energy, or Ward, protects the character from any ranged, Non Piercing Effect not delivered by weapon blow that would normally affect them (Except Drop, Diagnose and Notice Bleed). The number in the Ward call is the number of times the character will be protected by the Ward, this is the “charges” that the Ward Spell has. A character should respond “warded” if their Ward protects them from an Effect in this way, and one charge in their Ward is removed. <p>The number of charges on the Ward is determined by the Spell that grants it. A Ward Effect expires when all charges are removed, or if the character willingly drops their Ward. A warded character cannot regain Vigour.</p></span>",
                  "magicSchool" : ["Ev"]
              }
          ]
      },
      {
          "pathName" : "Fifth Level Spells (5 Vigour)",
          "featPathColour" : "purple",
          "feats":[
              {
                  "featName" : "Fear 30s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Fear 30 seconds",
                  "art" : "fear30",
                  "description" : "The target becomes filled with dread towards the source of this Effect for the duration of the Effect. For the duration they must move out of the source’s melee and spellcasting range (10m), cannot strike anyone or Concentrate, and must roleplay terror (cowering, hiding, etc).",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Full Global Healing ",
                  "call" : "<span id='healing'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Full Global Healing</span>",
                  "art" : "health-increase",
                  "description" : "<span id='healingspan'>This Effect is instantaneous. The target recovers a number of Body hits equal to the amount stated by the generator of this Effect. This number may be 1, or it may be “Full”, which restores all Body hits to the location. <p>A Full Healing will restore a character’s Body hits to the total allowed by their Feats and any magic items the character has that give extra Body hits.</p><p>A Global Healing Effect will target all 6 locations on the target character’s body, and restore full Body hit to each location</p></span>",
                  "magicSchool" : ["Global","C","Ev"]
              },
              {
                  "featName" : "Halt 30s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Halt 30 seconds",
                  "art" : "halt30",
                  "description" : "The target is frozen to the spot for the duration of the Effect, and may not move, speak, or take any actions. They are still aware of their surroundings. Items may not be taken from a Halted character, voluntarily or otherwise. Fumble will still cause a Halted character to drop a carried item.",
                  "magicSchool" : ["C","Ev"]
              },
              {
                  "featName" : "Mass Cure Halt",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Cure Halt",
                  "art" : "mass-cure-halt",
                  "description" : "This Effect is instantaneous. The target(s) of a Cure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Cure Lure",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Cure Lure",
                  "art" : "mass-cure-lure",
                  "description" : "This Effect is instantaneous. The target(s) of a Cure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Cure Rampage",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Cure Rampage",
                  "art" : "mass-cure-rampage",
                  "description" : "This Effect is instantaneous. The target(s) of a Cure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Mass Fear Beast 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Fear Beast 10 seconds",
                  "art" : "mass-fear-beast",
                  "description" : "The target becomes filled with dread towards the source of this Effect for the duration of the Effect. For the duration they must move out of the source’s melee and spellcasting range (10m), cannot strike anyone or Concentrate, and must roleplay terror (cowering, hiding, etc).",
                  "magicSchool" : ["Mass","C","En"]
              },
              {
                  "featName" : "Mass Fear Undead 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Fear Undead 10 seconds",
                  "art" : "mass-fear-undead",
                  "description" : "The target becomes filled with dread towards the source of this Effect for the duration of the Effect. For the duration they must move out of the source’s melee and spellcasting range (10m), cannot strike anyone or Concentrate, and must roleplay terror (cowering, hiding, etc).",
                  "magicSchool" : ["Mass","C","En"]
              },
              {
                  "featName" : "Mass Halt Gwyllt 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Halt Gwyllt 10 seconds",
                  "art" : "mass-halt-gwyllt",
                  "description" : "The target is frozen to the spot for the duration of the Effect, and may not move, speak, or take any actions. They are still aware of their surroundings. Items may not be taken from a Halted character, voluntarily or otherwise. Fumble will still cause a Halted character to drop a carried item.",
                  "magicSchool" : ["Mass","C","Ev"]
              },
              {
                  "featName" : "Mass Halt Undead 10s",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Halt Undead 10 seconds",
                  "art" : "mass-halt-unliving",
                  "description" : "The target is frozen to the spot for the duration of the Effect, and may not move, speak, or take any actions. They are still aware of their surroundings. Items may not be taken from a Halted character, voluntarily or otherwise. Fumble will still cause a Halted character to drop a carried item.",
                  "magicSchool" : ["Mass","C","Ev"]
              },
              {
                  "featName" : "Mass Protection Healing 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Protection Healing 5 minute",
                  "art" : "mass-protection-healing",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Mass","C","Tr"]
              },
              {
                  "featName" : "Mass Protection Protection 5 minute",
                  "call" : "I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Protection Protection 5 minute",
                  "art" : "mass-protection-protection",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Mass","Tr"]
              },
              {
                  "featName" : "Rampage 30s",
                  "call" : "<span id='rampage'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Rampage 30 seconds</span>",
                  "art" : "rampage30",
                  "description" : "<span>The target is filled with uncontrollable rage. For the duration they will strike the closest being to them, including their allies, to the best of their ability and continue either until their target has escaped beyond reasonable pursuit or their target is downed. If they cause a creature to fall unconscious, they will either move to strike the next closest creature, or if there is no other creature close by they will use the Execute call on the downed creature.</span>",
                  "magicSchool" : ["C","En"]
              },
              {
                  "featName" : "Sleep 30s",
                  "call" : "<span id='sleep'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Sleep 30 seconds</span>",
                  "art" : "sleep30",
                  "description" : "<span>The target falls to the ground, asleep, for the duration of the Effect. If the target loses a point of Body after the start of the Sleep Effect, the Effect ends immediately. Items may not be taken from a character under the Sleep Effect, voluntarily or otherwise. While asleep a character is unconscious, unable to take any other actions, and is unaware of what is IC happening around them (players should still stay aware of what is OOC happening around them for safety reasons).</span>",
                  "magicSchool" : ["C","En"]
              }
          ]
      }
  ]
}



var mq = window.matchMedia( "(max-width: 480px)" );
var lq = window.matchMedia( "only screen and (min-width: 769px) and (max-width: 1400px)" );

var isLaptop = lq.matches;
var isMobile = mq.matches;

function addSectionContainer(idToAmend){
  spellJson.featPath.forEach((feat) => apendText(feat));
}

function apendText(featPath){

  let featsArray = featPath.feats;
  let pathName = featPath.pathName;

  if(mq.matches){
    pathName = pathName.toString().replace("Level", "Lvl");
  }

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

        let spellCall = feat.call;
        let featName = feat.featName;
        let featRequirements = feat.prequisites;
        let art = feat.art;
        let description = "<span id='popupKeywordTextPTag'><i>Call: " + spellCall + "</i></span><br><br>" + feat.description;
        let keywords = feat.magicSchool;
        let keywordsText = "<hr id='hrId'><p id='popupKeywordTextPTag'><i id='popupKeywordText'>Keywords: ";
        let magicSchool = filterMagicSchool(feat.magicSchool);

        for (let i = 0; i < keywords.length; i++) {
          
          if(i < (keywords.length - 1)){
            keywordsText += manageKeywordsOnPopup(keywords[i]) + ", ";
          }
          else{ keywordsText += manageKeywordsOnPopup(keywords[i]) + " "; }  
        }

        keywordsText + "</i>";
        description += keywordsText + "</p>";
        let url = "./img/Spells/" + art + ".png";

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize expandable\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" +
            "<div class=\"item-text-container text expandable\">" +
              "<div class=\"item-title feat-description-title-text expandable\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text expandable\" style=\"color:" + featPathColour + ";\">(School): " + magicSchool + "</div>" +
            "</div>" +       
          "</div>";
        });

    featCode +=   
      "</div>" +
    "</div>" +
  "</div>";

  if(isMobile){
    featCode = featCode.replaceAll("<span><p>For the duration of the Effect, the target(s) of this Effect becomes well disposed", "<span style='font-size:9px;'><p>For the duration of the Effect, the target(s) of this Effect becomes well disposed");
    featCode = featCode.replaceAll("<ul style='padding:2%;'><li id='hrId'>Won't take aggressive actions towards the source of the Effect,", "<ul style='padding:5%;'><li id='hrId'>Won't take aggressive actions towards the source of the Effect,");
    featCode = featCode.replaceAll("<span>This Effect is instantaneous. The target is forced ", "<span style='font-size:11px;'>This Effect is instantaneous. The target is forced ");
    featCode = featCode.replaceAll("<span>This Effect is instantaneous and may only be cast on the source. A barrier of invisible magical energy surrounds the character casting the Spell. ", "<span style='font-size:9px;'>This Effect is instantaneous and may only be cast on the source. ");
    featCode = featCode.replaceAll("<i>Call: <span id='charm'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Charm (10 seconds)</span></i></span><br><br>", "<span id='charm' style='font-size:9px;'><i>Call: I call upon the power of (external power) to (desired outcome) and cast Charm (10 seconds)</span></i></span>");
    featCode = featCode.replaceAll("<i>Call: <span id='charm'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Charm 30 seconds Beast<span></i></span><br><br>", "<span id='charm' style='font-size:9px;'><i>Call: I call upon the power of (external power) to (desired outcome) and cast Charm 30 seconds Beast</span></i></span>");
    featCode = featCode.replaceAll("<i>Call: <span id='charm'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Charm 30 seconds Mortal<span></i></span><br><br>", "<span id='charm' style='font-size:9px;'><i>Call: I call upon the power of (external power) to (desired outcome) and cast Charm 30 seconds Mortal</span></i></span>");
    featCode = featCode.replaceAll("<i>Call: <span id='charm'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Charm 30 seconds</span></i></span><br><br>", "<span id='charm' style='font-size:9px;'><i>Call: I call upon the power of (external power) to (desired outcome) and cast Charm 30 seconds</span></i></span>");
    featCode = featCode.replaceAll("<i>Call: <span id='charm'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Mass Charm 10 seconds</span></i></span><br><br>", "<span id='charm' style='font-size:9px;'><i>Call: I call upon the power of (external power) to (desired outcome) and cast Mass Charm 10 seconds</span></i></span>");
    featCode = featCode.replaceAll("The guidelines for how to behave while under this effect are as follows.", "");
    featCode = featCode.replaceAll("<i>Call: <span id = 'ward'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Ward", "<span id = 'ward' style='font-size:9px;'><i>Call: I call upon the power of (external power) to (desired outcome) and cast Ward ");
    featCode = featCode.replaceAll("<i>Call: <span id = 'ward'>I call upon the power of (an external greater power) to (brief description of desired outcome) and cast Ward", "<span id = 'ward' style='font-size:9px;'><i>Call: I call upon the power of (external power) to (desired outcome) and cast Ward ");
    featCode = featCode.replaceAll("<i>Call: <span id='rampage'>", "<span id = 'ward' style='font-size:11px;'><i>");
    featCode = featCode.replaceAll("<span>The target is filled with uncontrollable rage.", "<span style='font-size:11px;'>The target is filled with uncontrollable rage.");
    featCode = featCode.replaceAll("<i>Call: <span id='sleep'>", "<span id = 'ward' style='font-size:11px;'><i>");
    featCode = featCode.replaceAll("<span>The target falls to the ground, asleep,", "<span style='font-size:11px;'>The target falls to the ground, asleep,");
    featCode = featCode.replaceAll("<i>Call: <span id='fumble'>", "<span id = 'fumble' style='font-size:11px;'><i>");
    featCode = featCode.replace("<span>This Effect is instantaneous. The target(s) are forced ", "<span style='font-size:11px;'>This Effect is instantaneous. The target(s) are forced ");
    featCode = featCode.replaceAll("<i>Call: <span id='healing'>", "<span id = 'healing' style='font-size:11px;'><i>Call: ");
    featCode = featCode.replace("<span id='healingspan'>This Effect is instantaneous. The target recovers", "<span id='healingspan' style='font-size:11px;'>This Effect is instantaneous. The target recovers");
    
  }

if(isLaptop){
    featCode = replaceAll(featCode, "<span><p>For the duration of the Effect, the target(s) of this Effect becomes well disposed", "<span style='font-size:11px;'><p>For the duration of the Effect, the target(s) of this Effect becomes well disposed");
    featCode = replaceAll(featCode, "<span>This Effect is instantaneous and may only be cast on the source. A barrier", "<span style='font-size:11px;'>This Effect is instantaneous and may only be cast on the source. A barrier");
}

document.getElementById("featsContainer").innerHTML += featCode;
}

function manageKeywordsOnPopup(keyword){
  let returnText = "";

  switch(keyword){
  case "En":
    return "Enchantment"
  case "Ev":
    return "Evocation";
  case "Tr":
    return "Transmutation";
  case "Mass":
    returnText = "<span id='keyword' class='tooltip' data-tooltip='Using the Mass Modifier with an Effect means the Effect will be used on everyone within 5m of the character generating the Effect, apart from the character themselves. The character may indicate an arc with both hands in front of them, which allows them to target all characters within that arc. The character generating a Mass Effect must specify who will be targeted when completing their call. For example, the character may add “…all around me” or simply “Mass” before the Effect to target every character within 5m, or “…all within this arc” to target specific characters. The arc must be the area in front of the character between their arms, a character may not designate the area behind them as the arc for a Mass Effect.' data-tooltip-position='bottom'>Mass</span>";
    return returnText;
  case "Global":
    returnText = "<span id='keyword'  class='tooltip' data-tooltip='Global is a Modifier that can be applied to the Damage, Healing or Repair Effects, which allows the Effect to target all 6 locations on the target character’s body. A Global Damage Effect will target all 6 locations on the targets body, and remove 1 Body hit from each location, removing Armour hits first as normal. A Global Healing 1 Effect will target all 6 locations on the target character’s body, and restore 1 Body hit to each location. A Global Repair 1 Effect will target all 6 locations on the target character’s body, and restore 1 Armour hit to each location. This Modifier can be combined with the Full Modifier.' data-tooltip-position='bottom'>Global</span>";
    return returnText;
  case "C":
    returnText = "<span id='keyword'  class='tooltip' data-tooltip='If you decided that your character was a Peacesworn, your character will not be able to take any Feats that have the Combat keyword.'data-tooltip-position='bottom'>Combat</span>";
    return returnText; 
  default:
    return "N/A"
  }

}

function filterMagicSchool(magicSchoolList){

  let listToReturn = "";

  magicSchoolList.forEach(element => {

    if(element === "En" || element === "Ev" || element === "Tr"){
      listToReturn += element;
    }
  });

  return listToReturn;
}



addSectionContainer("addSectionContainer");

var itemIconElements = document.getElementsByClassName("item-icon"); 

for(let element of itemIconElements){

  element.addEventListener("click", e => event.stopPropagation(), true);
  element.addEventListener("click", e => showHide(element.id), true);
}

document.addEventListener("click", e => hidePopup(e), true);

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
  
  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  }
  