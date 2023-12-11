const spellJson = {

  "featPath": [
      {
          "pathName" : "Default effects",
          "featPathColour" : "maroon",
          "feats":[
              {
                  "featName" : "Weapon blow",
                  "call" : "N/A",
                  "art" : "sword-slice",
                  "description" : "Weapon blows, by default, cause the Single Damage Effect when they strike a location. Weapon blows delivered by ranged projectile weapons (not thrown weapons) apply the Single Damage Effect directly to Body Hits, ignoring armour, this is separate to the Through effect. Players are not required to call 'Single' when striking for the Single Damage Effect.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Zero Damage",
                  "art" : "sword-break",
                  "call" : "Zero Damage",
                  "description" : "All characters may choose to generate Zero Damage, representing an IC pulled blow. If two characters agree to only generate the Zero Damage Effect then they are not required to call it for their bout; they should call Single once to indicate that they are no longer pulling their blow.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Concentration",
                  "call" : "N/A",
                  "art" : "rear-aura",
                  "description" : "<span>Certain actions in these rules refer to a character requiring Concentration to perform them. Although fighting, watching where you are walking and talking to people do require you as a player to concentrate, they do not require your character’s “Concentration.” <p>An action will state if it requires Concentration in order to be performed. A character may only concentrate on one thing at a time. If their Concentration is broken, they may begin the task again, but must do so from scratch. Some of the actions that require Concentration include casting a Spell, repairing armour and searching someone.</p></span>",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Execute",
                  "call" : "Execute",
                  "art" : "executioner-hood",
                  "description" : "<span>This Effect is instantaneous. If the target is bleeding, they are killed instantly. Any character wielding a melee weapon may generate this effect by concentrating on an unresisting, bleeding target within melee strike range and repeating the OOC call “Executing” at a level audible to all within 10 metres while counting down from 30 seconds. They may then strike with a call of “Execute” and instantly kill that target at the end of the 30 seconds.<p>Attempting to generate an Execute Effect on an invalid target will get a “No Effect” response at the end of the process. All characters can generate this Effect if they have a melee weapon drawn.</p></span>",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Notice Bleeding",
                  "call" : "Notice Bleeding",
                  "art" : "ragged-wound",
                  "description" : "This effect is instantaneous. A character with locations on -1 Body hits will respond by stating the locations that are bleeding. A character that is not bleeding will respond by saying “Not bleeding”. A character who is dead will respond “Dead”. Notice Bleeding will work on a character under the Ward Effect, but does not remove a charge from Ward.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Repair",
                  "call" : "Repair (Armour location/Item)",
                  "art" : "sewing-string",
                  "description" : "<span><p>This Effect is instantaneous. When this Effect targets a character’s armour, the target character’s Armour hits on the target location are restored by 1. This cannot increase the target’s Armour hits above the total allowed by their Feats and any bonuses given by magic armour. When this Effect targets a weapon, shield, or other item which has been affected by Shatter, it will become usable again.</p><p>The Repair Effect can be delivered manually by all characters on weapons, shields and other items, however armour can only be repaired by a character with the correct Feat (see the Way of Leather and Steel). The Repair Effect is done within touch range and requires 1 minute of roleplayed action of handling and fixing the armour, weapon or shield. Generating the Repair Effect is an action which requires Concentration and the repairer and repairee to be standing stationary for the duration of the required roleplay action. It is not possible to repair the armour or weapons of a target which is actively engaged in melee combat.</p></span>",
                  "magicSchool" : ["Effect"]
              }
          ]
      },
      {
          "pathName" : "Conditions",
          "featPathColour" : "purple",
          "feats":[
              {
                  "featName" : "Restrained",
                  "call" : "N/A",
                  "art" : "handcuffed",
                  "description" : "<span><p>At no point should a player be out of character grappled or restrained. However there may be situations where a character needs to be restrained. To do so, you will need a phys rep of some kind, such as a ribbon or a sash. After 30s roleplayed action miming tying up an unresisting target, the target is restrained. The target should now hold the phys rep in their hands, such that it appears to be binding them (Please note, they should not be OOC tied). A restrained character may not strike, repair armour, cast spells, or move faster than a slow walking place. If there is a suitable phys rep of a solid object such as a tree or a post, a character may be restrained to this object,making them unable to move from the spot. To do this, you should inform the target that they are being restrained to this object, and after the appropriate amount of role played action they hold the binding phys rep such that it is around the object. </p><p>To release a restrained character, an unrestrained character must spend 30s role played action releasing them, at which point the target is no longer restrained. Alternatively, a character with the Escape Restraints Feat may use that to escape.</p></span>",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Unresisting",
                  "call" : "N/A",
                  "art" : "person",
                  "description" : "Various Effects and abilities specify “an unresisting target” such as searching, moving, diagnosing, etc. A target can normally choose to cooperate or resist these efforts. Some things that would remove the choice of resisting and make a target unresisting (unless they have a Feat or are using an item which specifies otherwise) would be: being unconscious, or being under the Sleep or Halt Effects.<p>A target that is being actively hostile towards should be considered obviously resisting.</p>",
                  "magicSchool" : ["Effect"]
              }
          ]
      },
      {
          "pathName" : "Physical Effects",
          "featPathColour" : "green",
          "feats":[
              {
                  "featName" : "Fumble",
                  "call" : "Fumble (Location)",
                  "art" : "drop-weapon",
                  "description" : "This Effect is instantaneous. The target is forced to drop any items held in the target location. Items may not be caught until they have fallen on the ground. If an item held within the target’s hand is a larp-safe item, such as a weapon, a shield or an approved spell-focus then the Effect may be generated by striking the item where the Effect is being delivered by weapon blow. If you have an OOC reason for not wishing to drop the affected item you may choose to let the item hang limp for 10 seconds. During this time it may not be used in any way and blows that strike it are treated as having struck the location holding it.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Push",
                  "call" : "Push",
                  "art" : "push",
                  "description" : "This Effect is instantaneous. A force pushes the character. The target is pushed directly away from the source for 10m. During this time they may defend themselves. Once the target has moved 10m from the location of the source at the time of casting, they may come back (note this Effect does not have a duration). If a player is OOC unable to move as directed by the Push Effect due to something blocking you (such as a wall or OOC unsafe terrain) they must stop at the blocking terrain for 10 seconds.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Strikedown",
                  "call" : "Strikedown",
                  "art" : "strikedown",
                  "description" : "This Effect is instantaneous. The target is made to fall to the ground. Their torso must fall on the ground before they can get back up. If it is OOC unsafe to do so, they may kneel down and not take any offensive action (including Spellcasting) for 5s instead.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Halt",
                  "call" : "Halt (Duration)",
                  "art" : "halt",
                  "description" : "The target is frozen to the spot for the duration of the Effect, and may not move, speak, or take any actions. They are still aware of their surroundings. <p><b>Items may not be taken from a Halted character, voluntarily or otherwise. Fumble will still cause a Halted character to drop a carried item.</p></b>",
                  "magicSchool" : ["Effect"]
              }
          ]
      },
      {
          "pathName" : "Mental Effects",
          "featPathColour" : "blue",
          "feats":[
              {
                  "featName" : "Fear",
                  "call" : "Fear (Location)",
                  "art" : "surprised-skull",
                  "description" : "The target becomes filled with dread towards the source of this Effect for the duration of the Effect. For the duration they must move out of the source’s melee and spellcasting range (10m), cannot strike anyone or Concentrate, and must roleplay terror (cowering, hiding, etc).",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Rampage",
                  "call" : "Rampage (Duration)",
                  "art" : "rampage",
                  "description" : "The target is filled with uncontrollable rage. For the duration they will strike the closest being to them, including their allies, to the best of their ability and continue either until their target has escaped beyond reasonable pursuit or their target is downed. If they cause a creature to fall unconscious, they will either move to strike the next closest creature, or if there is no other creature close by they will use the Execute call on the downed creature.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Daze",
                  "call" : "Daze (Duration)",
                  "art" : "daze",
                  "description" : "The target is confused for the duration of the Effect. They cannot voluntarily walk or run, cannot strike anyone, and cannot concentrate. They can still talk, and can still defend themselves from strikes.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Charm",
                  "call" : "Charm (Duration)",
                  "art" : "charm",
                  "description" : "For the duration of the Effect, the target of this Effect becomes well disposed to the source and treats them as a close friend, will not strike them, and will defend them from anyone attempting to harm them. This Effect ends if the source deals damage to the charmed target.",
                  "magicSchool" : ["Effect"]
              }
          ]
      },
      {
          "pathName" : "Other Effects",
          "featPathColour" : "black",
          "feats":[
              {
                  "featName" : "Immunity",
                  "call" : "No Effect",
                  "art" : "bell-shield",
                  "description" : "Characters may through Feats be immune to an Effect. A character should state 'No Effect' and not take the Effect when they are the target of an Effect to which they are immune. The Feat or item ability that grants the Immunity will determine the duration it lasts. If you are under an Effect and become immune to it, the Effect is removed from you. A character can be immune to multiple Effects at the same time.<p>Peacesworn are always immune to Rampage. The Rend Effect makes the target immune to the Healing Effect while they are suffering Rend.</p> <p>Most Immunities are reactive. What this means is that Feat or items will grant a character the ability to spend Vigour and become immune to an Effect when they are targeted with the Effect. If they spend the Vigour, the character declares “No Effect”, and gains the Immunity which lasts for a further short duration as specified by the Feat or item.</p>",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Bane",
                  "call" : "(Category) Bane",
                  "art" : "bane",
                  "description" : "This Effect is instantaneous. A fearsome blow specifically designed to strike at the vulnerabilities of an enemy. When striking an unarmoured location of the Category stated (Beast, Gwyllt, Mortal, or Undead) the location is destroyed, going to -1 Body hits. <p>If a Bane Effect strikes an armoured location 1 point of Damage is dealt to that location. Similarly, if the Bane strikes an unarmoured location and the target is not of the stated Category, they take the Single Damage Effect instead. This Effect cannot be combined with the Damage Effect.</p>",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Cure",
                  "call" : "Cure (Effect)",
                  "art" : "remedy",
                  "description" : "This Effect is instantaneous. The target of a Cure Effect has the specified Effect removed if they are under it, but will not be protected from any future iterations of that Effect.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Detect",
                  "call" : "Detect (Target group)",
                  "art" : "semi-closed-eye",
                  "description" : "This Effect is instantaneous, when a character who is within Audible range of the source of the effect is a member of the target group or has an item of the target group they must say “Ping” in a loud clear voice. In character, this Effect causes this noise, so everyone around the Detected character is aware of the Effect. This Effect will work against targets under the Effect of Ward, and will not remove a charge of the Ward.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Diagnose",
                  "call" : "Diagnose",
                  "art" : "caduceus",
                  "description" : "This Effect is instantaneous and has a range of 5cm from an unresisting target. They should OOC tell the source how many Body hits they have left on each location as well as the character’s maximum Body hits on each location, current and maximum Vigour, as well as if they are under the Effects of Disease, Venom, or if they are bleeding. In addition, a Referee may tell the source about special Effects that the target is suffering from. This Effect will work against targets under the Effect of Ward, and will not remove a charge of the Ward.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Disease",
                  "call" : "Disease",
                  "art" : "tumor",
                  "description" : "This Effect is instantaneous. The target of Disease suffers a detriment to the Healing Effect. Any Healing that would cause the target’s Body hits to rise above 0 causes them to rise to 0 only. This includes the Healing Effect granted by the Recovery mechanic. This Effect remains in place until a Cure Effect is called on the target, or until Time Out is called",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Healing",
                  "call" : "Healing 1/Full Healing (Location)",
                  "art" : "healing",
                  "description" : "This Effect is instantaneous. The target recovers a number of Body hits equal to the amount stated by the generator of this Effect. This number may be 1, or it may be “Full”, which restores all Body hits to the location.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Identify",
                  "call" : "Identify",
                  "art" : "magnifying-glass",
                  "description" : "This Effect is instantaneous. You gain knowledge of the properties of a lammied item without attuning to that item.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Lure",
                  "call" : "Lure (Duration)",
                  "art" : "lure",
                  "description" : "For the duration, the target of this Effect becomes fixated on the source of the Effect and can do nothing but move towards it at normal walking speed, altering their path if the source moves locations, and remaining motionless when they reach the source. Being struck by the Damage Effect will not break the Lure Effect. Please note: Grappling/restraining people is not permitted.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Mindslash",
                  "call" : "Mindslash",
                  "art" : "brain-tentacle",
                  "description" : "This Effect is instantaneous. The Effect breaks the Concentration of the target.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Mute",
                  "call" : "Mute (Duration)",
                  "art" : "mute",
                  "description" : "The target is silenced. For the duration of the Spell the character cannot perform any vocal action including casting Spells. They may still generate weapon blow Effects, or other actions which require Concentration.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Protection",
                  "call" : "Protection (Effect) (Duration)",
                  "art" : "protection",
                  "description" : "The target is protected from the specified Effect for the duration, and should call “No Effect” to any instances of it while protected. This does not remove any instances of any Effect they are already under when they get take the Protection Effect.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Rend",
                  "call" : "Rend",
                  "art" : "rend",
                  "description" : "This Effect is instantaneous. The location struck with this Effect begins to bleed and the character gains Immunity Healing. The character can use the location as normal (depending on the number of Body hits) but the location is also bleeding. Your character is in their deathcount as if the location was at -1 Body hits. The response to a Diagnose call is the number of Body hits remaining and bleeding. A Stop Bleed that affects the location will end the Rend Effect.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Shatter",
                  "call" : "Shatter",
                  "art" : "shatter",
                  "description" : "This Effect is instantaneous. Weapons, shields and items are cracked and broken, making them useless. If a weapon or shield is shattered it becomes unusable until repaired. The special properties of items cannot be used if the item is shattered.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Stop Bleed",
                  "call" : "Stop Bleed (Location)",
                  "art" : "stop-bleed",
                  "description" : "This Effect is instantaneous. This Effect has a range of 5cm from the target unless otherwise specified. The target’s Body hits on the target location are restored to 0 Body hits if on -1 Body hits.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Through",
                  "call" : "Through",
                  "art" : "through",
                  "description" : "This Effect is instantaneous. This Effect allows a combined Damage Effect to ignore the target’s Armour hits and directly affect their Body hits, leaving Armour hits unhurt.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Venom",
                  "call" : "Venom",
                  "art" : "venom",
                  "description" : "This Effect is instantaneous. The target of a Venom Effect has their deathcount length reduced by 120 seconds. If a character is in their deathcount when struck by Venom, the reduction does not happen until they leave their current deathcount. This reduction stays in place until Time Out or until the application of a Cure Effect, whichever comes first.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Ward",
                  "call" : "Ward (Number)",
                  "art" : "ward",
                  "description" : "This Effect is instantaneous and may only be cast on the source. A barrier of invisible magical energy surrounds the character casting the Spell. This Ward protects the character from any ranged Effect not delivered by weapon blow that would normally affect them (Except Drop, Diagnose and Notice Bleed). The number in the Ward is the number of times the character will be protected, this is the “charges” that the Ward Spell has. A character should respond “warded” if their Ward protects them from an Effect in this way, and one charge in their Ward is removed. The number of charges on the Ward is determined by the Spell that grants it. <p>A Ward Effect expires when all charges are removed, or if the character willingly drops their Ward. A warded character cannot regain Vigour.</p>",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Sunder",
                  "call" : "Sunder",
                  "art" : "sunder",
                  "description" : "This Effect is instantaneous. If this Effect targets a location that location’s Armour hits are reduced to 0. If the location’s Armour hits were already at 0, then the location is taken to -1 Body hits. This Effect cannot be combined with a Damage Effect.",
                  "magicSchool" : ["Effect"]
              }
          ]
      },        
      {
          "pathName" : "Event Team Effects",
          "featPathColour" : "DarkOliveGreen",
          "feats":[
              {
                  "featName" : "Time In",
                  "call" : "Time In",
                  "art" : "time-in",
                  "description" : "This indicates that play has begun for the day, and the game area is to be considered In Character (IC). This call is also used to end a Time Freeze and resume play.<p>When Time In is called at the beginning of the gameplay for that day, all characters who were still alive at Time Out the night before come into play with full Body hits, Armour hits, and Vigour.</p>",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Time Freeze",
                  "call" : "Time Freeze",
                  "art" : "time-freeze",
                  "description" : "This indicates that play is to be paused in the area until further notice from a Referee, who will resume play with the Time In call.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Time Out",
                  "call" : "Time Out",
                  "art" : "time-out",
                  "description" : "This Indicates that play has ended for the day. The game area is to now be considered Out of Character (OOC).",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Drop",
                  "call" : "Drop",
                  "art" : "drop",
                  "description" : "Your character immediately enters an unconscious state. Your Body and Armour hits cannot be discerned and a Diagnose Effect targeting your character should receive the response “Indeterminate”. The Referee who called you to Drop will brief you on your character’s new status as soon as possible.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Fair Escape",
                  "call" : "Fair Escape",
                  "art" : "fair-escape",
                  "description" : "This means that a character (or group of characters) has successfully evaded their pursuers for now and should not be chased. A referee may declare “Fair Escape” if a character has sufficient distance or obstacles between them and their pursuers, or if a character has an IC attribute to support it.",
                  "magicSchool" : ["Effect"]
              }
          ]
      },        
      {
          "pathName" : "Special actions",
          "featPathColour" : "#993366",
          "feats":[
              {
                  "featName" : "Searching & IC Theft",
                  "call" : "N/A",
                  "art" : "search",
                  "description" : "Any weapons or IC items (other than armour or clothing) that are being held or worn visibly by an unresisting character may be freely taken by asking the player to hand them over. To facilitate this we have an IC searching mechanic. While searching another character, you should mime actions of searching them without touching the target.<p id='hrId'> To search another character, that character should be stationary and unresisting (and can state they are resisting at any stage during the search to stop it). A character can resist if they would reasonably be able to resist someone searching them. You should spend 30 seconds of Concentration and roleplayed action, at the end of which time you will be informed of any lammied items on the character, as well as any IC documents, currency, or other IC items on the character. You will also be informed if the character was recently searched. The victim is required to hand over any items that are requested of them. </p>",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Disarming",
                  "call" : "N/A",
                  "art" : "disarm",
                  "description" : "If you have a prisoner and you wish to disarm them you may “take” any obviously visible weapons from them instantly rather than requiring a full search. This can either be done either by placing the phys reps nearby or informing the prisoner that the weapons have been taken and tossed away (allowing the prisoner to retain their phys reps).",
                  "magicSchool" : ["Effect"]
              }
          ]
      },        
      {
          "pathName" : "Effect Modifiers",
          "featPathColour" : "red",
          "feats":[
              {
                  "featName" : "Full",
                  "call" : "Full",
                  "art" : "full",
                  "description" : "Full is a Modifier that can be applied to the Healing or Repair Effects. A Full Healing will restore a character’s Body hits to the total allowed by their Feats and any magic items the character has that give extra Body hits. A Full Repair will restore a character’s Armour hits to the total allowed by their Feats and any magic items the character has that give extra Armour hits. This Modifier can be combined with the Global Modifier.",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Global",
                  "call" : "Global",
                  "art" : "global",
                  "description" : "Global is a Modifier that can be applied to the Damage, Healing or Repair Effects, which allows the Effect to target all 6 locations on the target character’s body. A Global Damage Effect will target all 6 locations on the targets body, and remove 1 Body hit from each location, removing Armour hits first as normal. A Global Healing 1 Effect will target all 6 locations on the target character’s body, and restore 1 Body hit to each location. A Global Repair 1 Effect will target all 6 locations on the target character’s body, and restore 1 Armour hit to each location. This Modifier can be combined with the Full Modifier",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Mass",
                  "call" : "Mass",
                  "art" : "mass",
                  "description" : "The Mass Modifier can be added to many Effects, determined by Feats and magic items. Using the Mass Modifier with an Effect means the Effect will be used on everyone within 5m of the character generating the Effect, apart from the character themselves. The character may indicate an arc with both hands in front of them, which allows them to target all characters within that arc.<p id='hrId'>The character generating a Mass Effect must specify who will be targeted when completing their call. For example, the character may add “…all around me” or simply “Mass” before the Effect to target every character within 5m, or “…all within this arc” to target specific characters. The arc must be the area in front of the character between their arms, a character may not designate the area behind them as the arc for a Mass Effect.</p>",
                  "magicSchool" : ["Effect"]
              }
          ]
      },        
      {
          "pathName" : "Special Calls & Rules",
          "featPathColour" : "#9C4722",
          "feats":[
              {
                  "featName" : "Action Calls",
                  "call" : "(Action) (10...9...8...)",
                  "art" : "action-call",
                  "description" : "To indicate that an important, interruptible action is being taken IC, a character may be instructed by a referee to use an Action Call. This consists of a countdown and a short, repeated description of the action being taken. For example: “Destroying the evidence 10! Destroying the evidence 9! Destroying the evidence 8!...”. Once the end of the countdown is reached the final call should indicate that the action has been completed, eg “Evidence Destroyed!”. <p>Action Calls require Concentration. Executing is a special and specific case of the Action Call with its own rules for how and when it can be used.</p><p id='hrId'> If a character with their finger in the air is performing an Action Call that is describing how they are appearing (eg “Crawling out of the ground 5! Crawling out of the ground 4!...”), they can not be attacked or interacted with until their Action Call has been completed. Once the character has finished their Action Call and lowered their finger, they can be interacted with as normal.</p>",
                  "magicSchool" : ["Effect"]
              },
              {
                  "featName" : "Effect priority",
                  "call" : "N/A",
                  "art" : "priority",
                  "description" : "Effects are broken into physical effects and mental effects. If one Effect would interfere with carrying out another Effect, physical takes precedence over mental, and the first listed Effect gets resolved first. If the original Effect would still be in duration when the interfering Effect is resolved you then resolve the original Effect until the duration is over.<p id='hrId'> E.g. If your character is hit with Rampage 30s, and 15 seconds into the duration of that they suffer the Lure Effect. Lure has priority as it is higher on the list for mental Effects than Rampage. Your character follows the Lure Effect’s directions for the next 10 seconds, before reverting to the Rampage Effect for the final 5 seconds of its duration.</p><hr/><div class='effectInteraction' id='hrId'><i id='hrId'>Physical Effects priority</i><ul id='hrId'><li id='hrId'>Fumble</li><li id='hrId'>Push</li><li id='hrId'>Strikedown</li><li id='hrId'>Halt</li></ul></div><div class='effectInteraction2'><i id='hrId'>Mental Effects priority</i><ul><li id='hrId'>Lure</li><li id='hrId'>Fear</li><li id='hrId'>Rampage</li><li id='hrId'>Sleep</li><li id='hrId'>Daze</li><li id='hrId'>Charm</li></ul></div>",
                  "magicSchool" : ["Effect"]
              }
          ]
      }
  ]
}

var mq = window.matchMedia( "(max-width: 480px)" );

var isMobile = mq.matches;

function addSectionContainer(idToAmend){
  spellJson.featPath.forEach((feat) => apendText(feat));
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
        let keywords = feat.magicSchool;
        let keywordsText = "";
        let call = feat.call;

        if(featName != "Effect priority" &&  featName != "Searching & IC Theft" &&  featName != "Restrained"){
          keywordsText = "<hr id='hrId'><p id='popupKeywordTextPTag'><i id='popupKeywordText'>Keywords: ";

          for (let i = 0; i < keywords.length; i++) {
          
            if(i < (keywords.length - 1)){
              keywordsText += manageKeywordsOnPopup(keywords[i]) + ", ";
            }
            else{ keywordsText += manageKeywordsOnPopup(keywords[i]) + " "; }  
          }

          description = "<p><i id='popupMaterialCost'>Call: " + call + " </i></p>" + description;
        }

        let url = "./img/Effects/" + art + ".png";

        keywordsText + "</i>";

        description += keywordsText + "</p>";

        featCode +=
          "<div class=\"item\">" +
            "<div class=\"item-icon iconsize expandable\" data-bgimage=\"" + url + "\" name=\"item-icon\" id = \"" + featName + "\" data-description = \"" + description + "\" style=\"background-color: " + featPathColour + "; background-image: url('');\"></div>" + 
            "<div class=\"item-text-container text expandable\">" +
              "<div class=\"item-title feat-description-title-text expandable\" style=\" color:" + featPathColour + ";    \">" + featName + "</div>" +
              "<div class=\"feat-description-requirements-text expandable\" style=\"color:" + featPathColour + ";\">Call: " + call + "</div>" +
            "</div>" +       
          "</div>";        
        });

    featCode +=   
      "</div>" +
    "</div>" +
  "</div>";

if(isMobile){
  featCode = featCode.replace(", eg “Evidence Destroyed!”", "");
  featCode = featCode.replace("<p id='hrId'> If a character with their finger in the air is performing an Action Call that is describing how they are appearing (eg “Crawling out of the ground 5! Crawling out of the ground 4!...”), they can not be attacked or interacted with until their Action Call has been completed. Once the character has finished their Action Call and lowered their finger, they can be interacted with as normal.</p>", "");
  featCode = featCode.replace("<p id='hrId'> E.g. If your character is hit with Rampage 30s, and 15 seconds into the duration of that they suffer the Lure Effect. Lure has priority as it is higher on the list for mental Effects than Rampage. Your character follows the Lure Effect’s directions for the next 10 seconds, before reverting to the Rampage Effect for the final 5 seconds of its duration.</p>","");
  featCode = featCode.replace(" For example: “Destroying the evidence 10! Destroying the evidence 9! Destroying the evidence 8!...”.","");
  featCode = featCode.replace("(eg “Crawling out of the ground 5! Crawling out of the ground 4!...”)","");
  featCode = featCode.replace("For example: “Destroying the evidence 10! Destroying the evidence 9! Destroying the evidence 8!...”.","");
  featCode = featCode.replace("Physical Effects priority", "Physical priority");
  featCode = featCode.replace("Mental Effects priority", "Mental priority");
  featCode = featCode.replace("<p>Most Immunities are reactive. What this means is that Feat or items will grant a character the ability to spend Vigour and become immune to an Effect when they are targeted with the Effect. If they spend the Vigour, the character declares “No Effect”, and gains the Immunity which lasts for a further short duration as specified by the Feat or item.</p>", "");
  featCode = featCode.replace("<span><p>At no point should a player be out of character grappled or restrained. However there may be situations where a character needs to be restrained. To do so, you will need a phys rep of some kind, such as a ribbon or a sash.", "<span style='font-size:11px;'><p>");
  featCode = featCode.replace(" For example, the character may add “…all around me” or simply “Mass” before the Effect to target every character within 5m, or “…all within this arc” to target specific characters. The arc must be the area in front of the character between their arms, a character may not designate the area behind them as the arc for a Mass Effect.", "");
  featCode = featCode.replace("Any weapons or IC items (other than armour or clothing) that are being held or worn visibly by an unresisting character may be freely taken by asking the player to hand them over. To facilitate this we have an IC searching mechanic. While searching another character, you should mime actions of searching them without touching the target.", "");
  featCode = featCode.replace(" You should spend 30 seconds", "</p><p> You should spend 30 seconds");
  featCode = featCode.replace("A barrier of invisible magical energy surrounds the character casting the Spell.", "");
  featCode = featCode.replace("This Effect is instantaneous and may only be cast on the source. ", "");
  featCode = featCode.replace(", this is the “charges” that the Ward Spell has", "");
  featCode = featCode.replace(" in their Ward", "");
  featCode = featCode.replace("At no point should a player be out of character grappled or restrained. However there may be situations where a character needs to be restrained. To do so, you will need a phys rep of some kind, such as a ribbon or a sash. ", "");
  featCode = featCode.replace("<span>Certain actions in these rules refer", "<span style='font-size:12px;'>Certain actions in these rules refer");
  featCode = featCode.replace("<span><p>At no point should a player be out of character ", "<span style='font-size:12px;'><p>At no point should a player be out of character ");
  featCode = featCode.replace("<span><p>This Effect is instantaneous. When this Effect targets a character’s armour", "<span style='font-size:11px;'><p>This Effect is instantaneous. When this Effect targets a character’s armour");
}

document.getElementById("featsContainer").innerHTML += featCode;
}

function manageKeywordsOnPopup(keyword){
  let returnText = "";

  return keyword;
}

addSectionContainer("addSectionContainer");

var itemIconElements = document.getElementsByClassName("item-icon"); 

for(let element of itemIconElements){

  element.addEventListener("click", e => event.stopPropagation(), true);
  element.addEventListener("click", e => showHide(element.id), true);
}

document.addEventListener("click", e => hidePopup(e), true)
  