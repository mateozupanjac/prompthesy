export type HexLines = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};
export type HexEntry = {
  key: string; // e.g. "chien01"
  id: number; // 1..64
  name: string; // English canonical
  judgment: string;
  comment?: string;
  footnote?: string;
  imageText?: string | null;
  upper: "QIAN" | "KUN" | "ZHEN" | "KAN" | "GEN" | "XUN" | "LI" | "DUI";
  lower: "QIAN" | "KUN" | "ZHEN" | "KAN" | "GEN" | "XUN" | "LI" | "DUI";
  lines: HexLines; // 1..6 (bottom → top)
};



export const hexSlice: HexEntry[] = [
  {
    key: "chien01",
    id: 1,
    name: "Qian – The Creative",
    judgment:
      "Creative power, supported by perseverance, leads to the highest success.",
    comment: `Creativity is the driving force of evolution. This is an exceptionally favorable time in terms of energy, will, and inspiration. It can be likened to the generative power of conception. This effective force moves you toward your destiny, regardless of the restless mind’s opinions.

Your activities will align with your true needs. You can rouse yourself and others to great endeavors—channel this power wisely toward worthy goals that benefit the community. Only just and valuable aims culminate in the highest success.

In business and public matters, others may see you as a leader and seek your counsel. You have the chance to harmonize personal aims with collective needs, establishing order and peace. Do not allow trivialities to distract you.

Use this time wisely; do not scatter your creative energy. Right timing matters: listen for the moment to act—or to refrain. Uphold integrity. Loved ones will look to you—lead with confidence. Inner strength grows as you adhere to noble principles. Success is assured and cannot be stopped.`,
    footnote: `Without changing lines, The Creative signifies great importance: what you initiate now becomes a foundation for future events. If all lines are changing, your uniqueness is stable and balanced—you can exert a profound influence and transform existing values.`,
    upper: "QIAN",
    lower: "QIAN",
    lines: {
      1: "Bottom line: The time is not yet ripe to act. Creative power is available, but you must wait for the right moment. If necessary, guide matters discreetly from behind the scenes.",
      2: "Second line: Be mindful of a person active in your sphere. Though not in a leading role, their impeccable conduct grants them great influence. Joining forces would be beneficial.",
      3: "Third line: A vast new world of creative power opens before you. Others will notice and may try to ride your rising reputation. Guard your focus. Hold your dignity and vision—then no one can harm you.",
      4: "Fourth line: It’s time to choose. With abundant power, decide whether to step into public service or cultivate yourself in seclusion. Follow your inner voice.",
      5: "Fifth line: What you now decide accords with nature. Your mind is ordered; your influence is uplifting to others.",
      6: "Top line: Your ambitions exceed what creative power can sustain. If you force your vision, you’ll lose touch with reality and with others, leading to regret.",
    },
  },
  {
    key: "kun02",
    id: 2,
    name: "Kun – The Receptive",
    judgment:
      "Receptivity, sustained by perseverance—like that of a mare—brings the highest success. If the noble one leads, he goes astray; if he follows, he finds the way. It favors gaining friends in the west and south and losing friends in the east and north. Calm, correct persistence brings good fortune.",
    comment: `Yielding receptivity should be foremost now. Nature unfailingly follows the seasons—renewing and adapting. Power lies in accepting what accords with the natural law. The situation concerns concrete realities rather than abstractions. Since only outer conditions may be visible, avoid taking the lead—follow wise guidance and you will reach your aims.

Even in complex affairs, receptivity attunes you to the unseen order. With good allies, you will reach the best position. Above all, refrain from self-assertive leadership for now. Overreliance on your own strength can backfire. Calculated restraint is the formula of the moment.

In relationships, be compassionate and open; allow others to take the initiative. If the matter concerns the Self, contemplate your life course in solitude. Observing the world with openness preserves inner purity and steadies your character while fostering composure outwardly.`,
    footnote:
      "If all lines are changing, your inner strength and personal power depend directly on the perseverance with which you materialize your ideas. The new situation will be enduring.",
    upper: "KUN",
    lower: "KUN",
    lines: {
      1: "Bottom line: Signs of decline are already visible. Prepare for the coming change.",
      2: "Second line: Avoid artificiality. Imitate nature—be tolerant, direct, and open. Find inner balance and success will follow.",
      3: "Third line: Leave the thirst for fame to others. Quietly cultivate the best possible outcome now; your talents will mature naturally and later be recognized.",
      4: "Fourth line: The time is complex; proceed with caution. Maintain reserve in solitude or in society. Opposition would bring conflict and unwanted obligations.",
      5: "Fifth line: Do not display your abilities openly. Let them permeate your actions. Modesty and discretion bring the greatest happiness.",
      6: "Top line: A vain attempt is made to usurp authority. Fierce struggle leads to losses on both sides.",
    },
  },
  {
    key: "jun03",
    id: 3,
    name: "Zhun – Difficulty at the Beginning",
    judgment:
      "Difficulty at the beginning—then great success. Perseverance on the right path brings reward; do not seek a new goal; it is favorable to consolidate your present position.",
    comment: `Beginnings are marked by confusion as forms coalesce. Though disorder reigns, order and efficiency will follow—like fruitful rain after thunder. Hold fast to high principles to weather the storm.

Focus on immediate problems, especially practical ones; consolidate your base before expanding. Enlist capable helpers for current aims; going it alone risks failure.

Inwardly, early-stage upheaval may bring identity confusion. Don’t resist inner changes. Seek neutral counsel; avoid untested ventures. Keep to your spiritual anchor and carefully sort the flood of information.

Relationships are tangled. Preserve inner calm; consult a neutral party. Remember: these difficulties are growing pains—perseverance brings success.`,
    footnote:
      "If no lines are changing, you face an unrecognized or seemingly insurmountable obstacle regarding your question. Only by establishing new value criteria can you move beyond it.",
    upper: "KAN", // struktura: ['Jen','Kan'] → lower ZHEN, upper KAN
    lower: "ZHEN",
    lines: {
      1: "Bottom line: You seem to have overcome an obstacle at the outset. Keep a humble stance; it attracts help. Avoid lone heroics.",
      2: "Second line: Disorder grows; it’s impossible to decide. Accepting help would incur heavy obligations later. Wait for normalcy to return.",
      3: "Third line: You sense the difficulties ahead. If you plunge in without an experienced guide, humiliation follows. The wise would revise their aims here.",
      4: "Fourth line: With a little assistance or a connection, the goal is achievable—admit you lack the strength to go alone. Hesitation hinders.",
      5: "Fifth line: Though you hold authority, you must still prove yourself. Modest efforts bear fruit; avoid grand ventures—they would fail.",
      6: "Top line: You’ve lost perspective; you neither see your troubles clearly nor an exit. This leads to regret. Best to begin anew.",
    },
  },
  {
    key: "meng04",
    id: 4,
    name: "Meng – Youthful Folly",
    judgment:
      "Youthful Folly—success. I do not seek the young fool; the young fool seeks me. I will explain the oracle once; if he presses importunately, I give no further answer. The oracle points to the need for right guidance.",
    comment: `You manage many areas of life well—except this one. Your confusion doesn’t arise from ignorance or laziness, but from simple inexperience. Yet this phase can bring noble success because you must learn, gain insight, and grow.

Begin by admitting you don’t know what to do, and act accordingly. Seek a capable teacher, ask sincerely, and practice diligently. The asking itself cultivates perseverance and steadiness.

If advice is hard to grasp or differs from expectation, attribute that to inexperience—if you already knew, you wouldn’t ask. Don’t pressure the teacher to reveal every step of reasoning; that alienates help precisely when you need it most.

If advising others, don’t waste energy on the unserious or obstinate—you have more important work.`,
    footnote:
      "In static form, Youthful Folly suggests that before proceeding, a deep riddle or misinterpreted part of your nature must be clarified. With the right attitude and receptivity, ‘beginner’s luck’ is possible—stay vigilant and don’t be intoxicated by it.",
    upper: "GEN", // struktura: ['Kan','Gen'] → lower KAN, upper GEN
    lower: "KAN",
    lines: {
      1: "Bottom line: Lack of discipline; a frivolous approach to obligations prevents progress. Follow guidance enough to avoid misfortune.",
      2: "Second line: One in this position truly accepts the human condition—its folly and its beauty—and can lead with wisdom, compassion, and inspiration.",
      3: "Third line: You risk losing yourself by rushing toward what you desire. Without strength of character, nothing truly significant can be achieved.",
      4: "Fourth line: Fantasizing and obsession will undo you. Your stance toward reality is unreal, and thus you cannot be taught. Only thorough humiliation will awaken you.",
      5: "Fifth line: Ask for help with childlike openness—good fortune results.",
      6: "Top line: To keep one from straying, the inexperienced must sometimes be corrected. The aim is guidance, not punishment for its own sake.",
    },
  },
  {
    key: "hsu05",
    id: 5,
    name: "Xu – Waiting (Calculated Waiting)",
    judgment:
      "Waiting with sincerity brings brilliant success. Correct perseverance brings good fortune. It is favorable to cross the great river.",
    comment: `A period of calculated waiting is required before your needs align with natural processes. Change is reshaping many areas—new ideas arise, alliances form, systems fall, and new collective aims appear.

This is a risky time because key elements lie beyond your control. Anxiety clouds discernment and wastes energy. To reach your goal, wait until circumstances favor you. Face facts without the distortions of fear or fantasy. Know your strengths and weaknesses; when the time comes, you’ll act rightly.

This waiting tests confidence. Live in the present; keep a cheerful, positive demeanor—trust grows, as does your own security. Inner development now finds outer expression in disciplines that harmonize body and mind.

In relationships, all are implicated in conditions that require patience. Since destiny’s hand is at work, reactions would be premature or excessive. Encourage and support one another.`,
    footnote:
      "In static form, Calculated Waiting suggests the solution lies beyond your reach for now. The aim requires deeper understanding of the elements at play. Nothing can be done yet; regard this time positively as an important phase of maturation.",
    upper: "KAN", // struktura: ['Chien','Kan'] → lower QIAN, upper KAN
    lower: "QIAN",
    lines: {
      1: "Bottom line: Don’t be agitated by problems. Live as normally as possible; acting now would concede your power to overcome what lies ahead.",
      2: "Second line: Difficulties arise from what you intend to do; you may even face slander. Do not defend yourself—silence undercuts baseless accusations. Success comes gradually.",
      3: "Third line: Premature action, perhaps driven by fear, exposes you to attack. You are vulnerable—be cautious to protect yourself.",
      4: "Fourth line: You are waiting amid chaos. Confronting problems now would worsen things. Withdraw unobtrusively at once.",
      5: "Fifth line: Difficulties are under control. Rest and gain a fuller view of your position, but remember there is still work to do.",
      6: "Top line: Pressures end the waiting and there seems no way out—yet help will come if recognized. Welcome the unusual support; it turns the situation to good.",
    },
  },
  {
    key: "sung06",
    id: 6,
    name: "Song – Conflict",
    judgment:
      "Conflict. Sincere, yet meeting obstruction. Affairs may advance only halfway, and with caution. To press on to the end brings misfortune. It is favorable to see the great person, but not to cross the great water.",
    comment: `Deep down you are certain your path is right, but the road ahead leads straight into conflict. Opposition—inner or outer—blocks the way, and the other side also believes it is right. This will halt you and force a rethink of your original intent.

Study complications early to avoid exhausting strife that could undo prior efforts. As things stand, grappling with the problem head-on would bring misfortune.

In public or political matters, bring the dispute before a neutral and just authority to prevent rupture. Delay ambitious undertakings for a more timely moment.

In relationships, avoid open clashes; it is wiser to yield than to debate what has no final resolution. Seek a neutral third party for clarity. Do not insist on your views. They are only one side of the coin—turn inward and examine your true feelings.

In inner development, natural growth presently meets strong resistance. This is a time for maturation; do not force. Good fortune comes through flexibility and careful conduct.`,
    footnote:
      "In static form, Conflict suggests a fundamental rift regarding your question. You may be losing cherished illusions and discovering that what seemed a universal truth was only a personal view. Re-examine your assumptions; inner adjustment opens better prospects.",
    upper: "QIAN", // struktura: ['Kan','Chien'] → lower KAN, upper QIAN
    lower: "KAN",
    lines: {
      1: "Bottom line: Avoid and immediately end any conflict. Don’t push matters to completion or join debates. You may feel a victim briefly, but things end well.",
      2: "Second line: The obstacle is insurmountable. Do not let pride draw you into open conflict. Withdraw to avoid defeat for yourself and others.",
      3: "Third line: Ground yourself. Adhere to proven methods and traditional values. Shunning status and wealth, let inner virtue be your measure.",
      4: "Fourth line: Hoping to improve your position by contending with weaker parties gives no real satisfaction. Return to dignity, rely on inner poise, and accept fate with calm.",
      5: "Fifth line: Present the dispute to an upright authority. If you are in the right, resolution follows.",
      6: "Top line: You might win a fierce battle now, but it invites endless contention and scrutiny. Such victories become meaningless.",
    },
  },

  // 7 — Shi / The Army
  {
    key: "shi07",
    id: 7,
    name: "Shi – The Army (Collective Power)",
    judgment:
      "The Army needs perseverance and a strong leader. Persistence in the right brings good fortune and frees from blame.",
    comment: `This time demands discipline, organization, and just aims. Those in office must trust you, and you must win people’s goodwill. With clear communication and aligned goals, the power of collective support can be used well. The Army warns: mobilize collective strength only when necessary and for worthy purposes.

If you hold authority, the moment is favorable to lead with gentleness and generosity. All endeavors require inner conviction. Recognize the collective force behind your actions; broaden your view beyond the personal to the human whole.

Be generous and adaptable in relationships. Consider your role within the wider world. Philosophic thinking will help; narrow self-interest leads to dead ends. Overcome difficulties through mutual support and love—the thread running through all sound organizations and relationships.

Return often to the center of the Self to orient your course. Enlarge your aims to embrace what benefits humanity; this strengthens character and attunes you to the call of collective power in dangerous times.`,
    footnote:
      "In static form, Collective Power signals a phase to understand humanity’s aims before advancing. Be open and generous to others’ needs to align with universal goals and increase your own strength.",
    upper: "KUN", // struktura: ['Kan','Kun'] → lower KAN, upper KUN
    lower: "KAN",
    lines: {
      1: "Bottom line: Before acting, be sure your aims merit the effort and that your organization is sound. Without order, chaos and misfortune follow. Discipline is key.",
      2: "Second line: You are well placed to communicate and coordinate; circumstances favor you. Great good fortune and recognition from superiors.",
      3: "Third line: A lack of vision and leadership—whether due to divided aims or an unfit leader—ends in misfortune.",
      4: "Fourth line: Insurmountable obstacles lie ahead. Struggling against them is useless; withdrawal is best.",
      5: "Fifth line: Rely on the counsel of an experienced, measured person to set things right. Enthusiastic but unseasoned leaders bring misfortune.",
      6: "Top line: The goal has been achieved. As you consolidate, check that aims accord with true human values. Put unworthy people or ideas in their proper place; do not let them interfere.",
    },
  },

  // 8 — Bi / Holding Together (Unity)
  {
    key: "bi08",
    id: 8,
    name: "Bi – Holding Together (Unity)",
    judgment:
      "Holding Together brings good fortune. Reconsult the oracle to test your firmness, steadfastness, and nobility; then there is no blame. The bewildered gather. The slow to act fall away.",
    comment: `We are both creators of and created by civilization. Our bond with language, tradition, and order undergirds progress. Right now, social consciousness surrounds your question. Recognize the need for timely unity: seeing yourself as part of the whole both strengthens and transcends individuality.

When opportunities for unity appear, seize them. Ignore them and you’re sidelined; your influence wanes. Whether that means civic engagement, joining an organization, supporting culture, or simply taking more responsibility in your environment—now is the time.

There is a proper time for solitude and a proper time for social unity and productivity. You may also be called to lead or catalyze cooperation. Such a role demands responsibility, integrity, and resolve—verify your motives and firmness with the oracle, then proceed.`,
    footnote:
      "In static form, Unity warns that without strong social bonds you risk isolation—an island amid your own illusions. Consider others’ views. Cross the great water and explore new worlds of ideas.",
    upper: "KAN", // struktura: ['Kun','Kan'] → lower KUN, upper KAN
    lower: "KUN",
    lines: {
      1: "Bottom line: Sincere, uncontrived conduct is the best basis for relationship. It naturally attracts others—unexpected good fortune.",
      2: "Second line: Trust your deepest motives; act honestly in line with conviction and others will follow. Chase approval and you lose dignity.",
      3: "Third line: The current group or environment does not suit you. Keep polite relations but avoid close attachment; it could later damage your reputation.",
      4: "Fourth line: You are in close contact with the community’s center—perhaps a leader. Express support openly, but don’t lose yourself in excessive display of loyalty.",
      5: "Fifth line: Destiny now draws you together with those who can advance you. The attraction is natural; the climate is liberal—much can be achieved. Good fortune.",
      6: "Top line: The moment to form cooperation has passed. Something was missing from the start and every attempt failed. Re-examine the situation and the weight of your support.",
    },
  },

  // 9 — Xiao Chu / The Taming Power of the Small
  {
    key: "hsiaochu09",
    id: 9,
    name: "Xiao Chu – The Taming Power of the Small",
    judgment:
      "The Taming Power of the Small. Success. Dense clouds come from the west, yet it does not rain.",
    comment: `A subtle external force restrains your strong impulses and serious plans. Whatever you attempt is held back from decisive action. The image “dense clouds bring no rain” speaks of opportunities that are hard to realize now, yet small, gentle corrections promise mild success.

You can exert only brief, light influence. Do not provoke the great forces of stagnation. Stay near the situation you wish to affect; use friendly persuasion to maintain your footing and prevent events from bypassing you. Suppress impulses toward aggressive measures.

This is not favorable for new ventures. Wait for clear signs. Meanwhile, perfect details of ongoing work—refine the form, avoid sweeping changes. In relationships, skill is needed; you cannot control circumstances. Either accept the climate of restraint and wait for an amicable outcome or leave entirely. Better yet, improve your image and curb assumptions; invest saved energy in how you affect others. Identify which aspect of your character most influences your environment and show it consistently. Success comes if you can restrain yourself until circumstances align.`,
    footnote:
      "In unchanging form, The Taming Power of the Small shows your matter blocked by small but persistent influences. Nothing external will help; the remedy lies in cultivating yourself.",
    upper: "XUN", // struktura: ['Chien','Sun'] → lower QIAN, upper XUN
    lower: "QIAN",
    lines: {
      1: "Bottom line: You’ve met obstacles on your path. Return to a position from which you can choose advance or retreat. From there, perceive the true nature of the situation.",
      2: "Second line: Though you wish to act, reconsider the situation in light of predecessors’ example. Withdrawal brings good fortune.",
      3: "Third line: Resistance seems weak and progress possible, yet the situation is not under your control. If you push stubbornly, endless hindrances will overcome you—undignified.",
      4: "Fourth line: You avoid grave dangers only by being honest and sincere and by influencing others with right counsel. Truth dispels fear; no blame.",
      5: "Fifth line: In a cooperative, trusting bond, both parties increase their resources. This is the path to the goal.",
      6: "Top line: You’ve won a battle. Rest, consolidate, and restrain yourself from total war. Caution—difficulties gather; new moves bring misfortune.",
    },
  },

  // 10 — Lü / Treading (Conduct)
  {
    key: "li10",
    id: 10,
    name: "Lü – Treading (Conduct)",
    judgment:
      "He treads on the tail of the tiger, yet it does not bite. Success.",
    comment: `This can be a brilliant, inspired period—and a dangerous one. Success depends entirely on conduct.

Dignified composure prevents chaos from shaking you. Be courteous and attentive. When in doubt, keep decorum. Social reordering is in the air; relationships may shift, some rising and others falling—naturally and without harm.

In work, refine your demeanor. Subordinates may surprise with boldness; base your responses on inner worth and your authority remains intact. You can undertake daring ventures—yet stay within traditional norms of conduct.

In personal relations, reassess aims and desires. Maintain inner calm amid confusion. Success comes through thoughtful, courteous behavior. Avoid impulsive emotional moves; bring more dignity into the bond to enable growth.

Overall, remain steady. Your manner now determines outcomes. A benevolent stance wards off stress-borne illness. Use this time to elevate your self-regard: highlight your finest qualities and steer inner development toward them.`,
    footnote:
      "When Lü is unchanging, your values are in question. You seem either too constrained and lost, or too yielding and unselective toward influences. Seek balance to make progress.",
    upper: "QIAN", // struktura: ['Duei','Chien'] → lower DUI, upper QIAN
    lower: "DUI",
    lines: {
      1: "Bottom line: Rely on essential virtues while advancing. Don’t exploit relationships or bind yourself with obligations. Your station is not high; simplicity prevents error.",
      2: "Second line: Aim to appear modest and moderate. Expect little and demand nothing. Don’t meddle in others’ plans or set over-ambitious goals. Good fortune.",
      3: "Third line: Your ambitions fall short and willfulness invites ruin. Such conduct befits only one ready to sacrifice himself for a superior.",
      4: "Fourth line: Advancing with great caution, you may now undertake risky ventures.",
      5: "Fifth line: Your plan is dangerous, but awareness of danger gives strength to succeed. If you do not cultivate sincere devotion in your heart, re-examine your path.",
      6: "Top line: Review honestly what your conduct has achieved. Are you on the right path? Judge by the benefits it has brought. It is time to reassess aims; by observing the past you can glimpse the future.",
    },
  },
  // 11 — Tai / Peace
  {
    key: "tai11",
    id: 11,
    name: "Tai – Peace (Advance)",
    judgment:
      "Peace. The wicked recede; the great and the good advance. Good fortune and success!",
    comment: `A time of advance like the onset of spring when natural forces harmonize. Conditions are ideal for new awakenings, healthy growth, and progressive plans. A receptive environment becomes the driver of flourishing.

The noble one recognizes the cosmic signal and cultivates the fertile ground: organizing, setting boundaries, and shaping the future. Improve situations with strong, wholesome ideas; root out the degenerate remnants of the past.

Relations can become highly fruitful. If you’ve avoided gatherings, you can now form new connections—enmity and distrust give way to goodwill. Wise leaders can transform even the darkest elements of society; this is a favorable time for sound laws and forward systems that help everyone act effectively.

Business especially benefits: leverage the general progress around you to structure lasting systems that endure leaner times later—service-oriented work prospers.

Spiritually, you align naturally with yourself; calm radiates from inner growth and instinct harmonizes with greater forces. Even small uncalculated acts help all. Health improves as weak elements fall away. Overall, serenity pervades and success follows.`,
    footnote:
      "Unchanging Peace signifies success arising from a benevolent, harmonious milieu. It’s a very fortunate sign that still asks for responsibility toward others: study the harmony, grasp its essence, and notice the unobstructed exchange between Heaven and Earth.",
    upper: "KUN", // struktura: ['Chien','Kun'] → lower QIAN, upper KUN
    lower: "QIAN",
    lines: {
      1: "Bottom line: Acts that benefit others—especially public-spirited moves—bring good fortune. You attract allies with shared aims.",
      2: "Second line: In a time of progress, keep worthy attitudes and proper conduct. You bear heavy tasks—be tolerant; avoid factionalism and elite cliques.",
      3: "Third line: A decision point nears—change never sleeps. Inner confidence and perseverance overcome obstacles. Meanwhile, enjoy the present moment.",
      4: "Fourth line: Now is the time for sincere communication and alliance with superiors. Ignore thoughts of reward; hold to your course and accept help.",
      5: "Fifth line: Impartiality brings your goal and great good fortune. With modesty and moderation you’ll communicate well with supporters—be mindful of their feelings and gain their backing.",
      6: "Top line: Decline in outer affairs has begun. Trying to arrest it brings humiliation. Instead, use this time to strengthen bonds with your close ones.",
    },
  },

  // 12 — Pi / Standstill (Stagnation)
  {
    key: "pi12",
    id: 12,
    name: "Pi – Standstill (Stagnation, Obstruction)",
    judgment:
      "Standstill caused by petty people. Though signs foretell adversity for the noble, he must not neglect upright persistence. The great departs; the small approaches.",
    comment: `Forces have reached a dead end; connection is broken and nothing productive emerges. Cooperation that fosters growth has been cut off—so needs go unknown and development stalls. Your useful insights meet apathy; even altruistic ideas are rejected.

Motives aren’t the issue—whether gain or charity, nothing advances. Stagnation breeds decay; unworthy people or ideas may rise to influence, politics corrodes, systems lose meaning. Leaders are out of touch, aims diverge, distrust spreads; everything reaches an impasse.

Social intensity wanes. Works once praised now seem empty; truly inspired efforts are ignored. Do not doubt your inner vision or ethics. You cannot change the climate—engagement only entangles you in confusion. Withdraw; don’t try to influence others, don’t compromise your standards. Ignore tempting rewards that require participation in discord; the price is your integrity.

Hold firmly to your values and wait this out—also for health matters, progress depends on your own strength.`,
    footnote:
      "Useful communications are blocked by strong counter-currents. Unchanging Standstill indicates your matter is not—and may never be—in line with the broader direction of your life.",
    upper: "QIAN", // struktura: ['Kun','Chien'] → lower KUN, upper QIAN
    lower: "KUN",
    lines: {
      1: "Bottom line: If you cannot change the environment without betraying your principles, leave it entirely. The success foreseen will be deeper than any compromise could bring. Allies will join you. Good fortune.",
      2: "Second line: Better to accept the standstill than bargain with leaders and their self-sacrificing supporters. Stay apart to keep your principles—success is foreseen.",
      3: "Third line: Having gained position through dubious means, your plans fail. Regret—but improvement follows.",
      4: "Fourth line: Order can be restored. If you sincerely answer the larger tendency, you and your partners benefit greatly; if you proclaim yourself leader, outcomes are poor.",
      5: "Fifth line: Improvement is in sight. Corrections are possible, but caution and restraint are essential. Follow this and success is doubled, laying a firm foundation.",
      6: "Top line: The chance to break the standstill is at hand, but it won’t happen by itself. To reach the highest success and sustain it requires strong, continuous purpose.",
    },
  },

  // 13 — Tong Ren / Fellowship with Men (Community)
  {
    key: "tungyen13",
    id: 13,
    name: "Tong Ren – Fellowship with Men (Community & Friends)",
    judgment:
      "Fellowship in the open. Success. It furthers to cross the great water. The noble advances by not yielding in perseverance.",
    comment: `Community works best when each person finds a right place in the structure—fully employed without losing initiative; excelling at their craft while serving common aims. When the community’s lasting progress comes first, great achievements become possible.

Whether central or peripheral in public life, you are shaped by social forces—tradition, economy, laws. Isolation profits nothing now; see your life through the needs of your community.

If you can help organize, the role demands firmness and the rejection of selfish motives. Time strongly favors collective goals, but little can be achieved amidst ego and separatism. Arrange people by talent; give each a place where they can contribute and find satisfaction—order and system prevent chaos.

If you’re simply a member, be consistent and principled in your work; your success will match your devotion and will benefit others, too. This is a good time to begin ventures that require structure, discipline, and healthy mechanisms—especially those serving real human needs.

Family is a microcosm of community; ask whether your goals serve your closest people. This is not a time for lone displays.`,
    footnote:
      "Unchanging, Fellowship says you will satisfy deep needs through joining with others. Commitment to community forges strong moral quality—your next step in self-development.",
    upper: "QIAN", // struktura: ['Li','Chien'] → lower LI, upper QIAN
    lower: "LI",
    lines: {
      1: "Bottom line: Shared needs draw people together—brotherhood begins. So long as interests stay aligned, things go smoothly.",
      2: "Second line: Elitism and exclusiveness restrict everyone; in such selfish circumstances there will be cause for regret.",
      3: "Third line: People involved may have selfish aims and conflicting drives. Distrust brings deadlock; until aims align, no progress is possible.",
      4: "Fourth line: Drop vanity and envy; don’t compete with or imitate those in high position. Focus on your work to avoid error.",
      5: "Fifth line: Your sincerity gathers followers—this is the path to right relations. But avoid over-familiarity; keep a reserved, principled approach.",
      6: "Top line: Great blessings and supreme good fortune lie ahead. Maintain balance, be devoted, and openly thank those who help. Lofty success follows.",
    },
  },

  // 14 — Da You / Great Possession (Supreme Possession)
  {
    key: "dayu14",
    id: 14,
    name: "Da You – Great Possession (Supreme Authority)",
    judgment: "Great Possession. Wealth and abundance—highest success!",
    comment: `Great success arrives—unexpected good fortune—and you have the capacity to receive it. You hold authority yet remain modest; thus you threaten no one and people willingly accord you leadership. Such power must be tempered by moderation and humility to unlock vast progress.

All eyes are on you—above and below. Proper conduct is essential. Watch the ego: imbalance begins with the smallest signs. Remove vanity; it ill suits one in supreme position. Quell inner corruption; align wholly with the good. Strength now comes from concord with cosmic order, where good and evil are correctly placed. Material wealth is possible; even superiors accept your leadership when your management succeeds.

In society, the most powerful will incline toward you—won by kindness and empathy. Artists find inspiration tied directly to culture and enjoy success. In intimacy, bonds may be calm rather than passionate, yet flourish through benevolence and unselfishness.

Within the Self, supreme power is both burden and blessing. Material success tempts pride and greed; restrain desires that would bring shame and weaken character. Emphasize qualities that express your goodness.`,
    footnote:
      "Unchanging, Great Possession asks unwavering adherence to principle—without dogmatism. Clear thought plus strength of character yields the inner integrity needed to carry the task forward; when authority becomes mere institution, it loses meaning.",
    upper: "LI", // struktura: ['Chien','Li'] → lower QIAN, upper LI
    lower: "QIAN",
    lines: {
      1: "Bottom line: Though you possess great inner wealth, you’ve not yet expressed it. This is the beginning; difficulties lie ahead. Awareness prevents error.",
      2: "Second line: You have vast resources and the skill to deploy them. Such ingenuity lets you pursue the most ambitious ventures without fear.",
      3: "Third line: The noble offers knowledge and wealth in service to the leader or community; generosity brings followers. Small people cannot do this.",
      4: "Fourth line: Obsession with personal aims cuts you off from others. The harder you grasp, the farther from community you become. Solitude eventually brings clarity. Good fortune.",
      5: "Fifth line: Obstacles bring sorrow. If you express your grief openly, it resonates with your close ones; reunion brings joy, and with kindred support you weather hardship.",
      6: "Top line: The unity possible here is not significant for universal needs; yet joining with others even in small matters is no fault.",
    },
  },

  // 15 — Qian / Modesty (Humility)
  {
    key: "chien15",
    id: 15,
    name: "Qian – Modesty (Humility)",
    judgment:
      "Modesty brings success. The noble person brings affairs to completion.",
    comment: `Dominant forces now seek balance and reconciliation of opposites. The universe tends toward equilibrium; modesty is its human expression.

On earth, mountains wear down while valleys fill; polarities draw each other and neutralize; nature balances through cycles of drought and plenty. Human nature seeks modesty by taking from excess and filling want.

Modesty enables successful completion of affairs. A leader carries out aims not by force but with steady sincerity. As Confucius put it: “When the public man remains what he was in private, his strength is unshakable.” Unpretentious yet firm expression of will marks the self-realized leader.

Avoid extremes in social dealings. Very clever or very dull people alike tend toward excess in views and behavior. Establish balanced relations and modest order in institutions—tolerance for human weakness belongs to true moderation.

In personal ties, examine feelings: are expectations too high, or motives self-serving? Bring fantasies to measure. Inner growth now asks a humble, honest approach—no extremes, but willingness to meet new experience within measure. Through modesty you gain some control of destiny; find your center and align with the Way.`,
    footnote:
      "Unchanging Modesty signals a need for restraint regarding this matter; only thus can you progress.",
    upper: "KUN", // struktura: ['Gen','Kun'] → lower GEN, upper KUN
    lower: "GEN",
    lines: {
      1: "Bottom line: Work quietly, competently, thoroughly—without show. Significant results follow; modest discipline arouses no resistance.",
      2: "Second line: By carefully maintaining inner moderation, your outward actions gain weight. Responsibilities will be entrusted to you—thoroughness brings good fortune.",
      3: "Third line: Through steadfast devotion and hard work you’ve earned respect and renown. Don’t let honors divert you into compromise—perseverance secures stable support and completion.",
      4: "Fourth line: Once true balance is reached, it must be maintained—not just formally, but through long cultivation of inner poise and social responsibility.",
      5: "Fifth line: Despite fine balance, energetic action may be needed—firm, deliberate, reasonable, not forceful. Progress in all undertakings.",
      6: "Top line: Your inner work is unfinished; self-discipline is required. Under pressure, don’t blame others—assume responsibility and you can set your world in order.",
    },
  },
  // 16 — Yu / Enthusiasm
  {
    key: "yi16",
    id: 16,
    name: "Yu – Enthusiasm (Alignment)",
    judgment:
      "Enthusiasm. It benefits those who build the land and command the army.",
    comment: `All natural events follow the path of least resistance and a harmonious order. Rivers carve channels through the softest terrain; the moon draws tides; the sun governs seasons. Human affairs are likewise shaped by shared customs and attractions. To move, lead, or influence people, align your intent with prevailing values—then attention, cooperation, and loyalty follow. Bans that violate collective sentiment invite revolt; unpopular wars unravel social order.

Discern the essence of the moment. Grasp the direction of movement and respond in step—you can achieve great things. New ideas and innovations can now be developed and championed. Study the currents, foresee what will be welcomed, and gather capable partners who share your zeal.

Like composing music, true harmony lifts every heart; moments of perfect accord can carry a leader to mastery. Align outwardly with the time and inwardly with your nature: listen to your body’s rhythms and inner voice. Such intimacy with yourself improves health and well-being. By attuning spirit to cosmic order, the body regains vitality for life.`,
    footnote:
      "Unchanging Enthusiasm says alignment is vital. Heed your inner voice for right conduct. When deciding, follow instinct—choose the path of least resistance and move with the moment.",
    upper: "ZHEN", // struktura: ['Kun','Jen'] → lower KUN, upper ZHEN (Thunder)
    lower: "KUN",
    lines: {
      1: "Bottom line: Harmony with someone in high position doesn’t mean you control the situation. Boasting of advantages invites misfortune.",
      2: "Second line: Sensing first signs of change is a great gift. Let others chase fads; you hold to essentials and answer the time—this is how true leaders act.",
      3: "Third line: You’ve waited too passively for another to motivate you. Idle pleasures or inertia risk your independence and inner support. You can still recover—get moving.",
      4: "Fourth line: A time of accord approaches. Confidence returns; people are ready to join and work with you—great achievements follow.",
      5: "Fifth line: Perfect harmony is impossible; knowing this prevents you from sinking into chaos and total loss.",
      6: "Top line: Lost in the memory of a past rapture, only an empty shell of self-satisfaction remains. Fortunately, renewal is possible—an opening for a new beginning appears.",
    },
  },

  // 17 — Sui / Following (Adaptation)
  {
    key: "suei17",
    id: 17,
    name: "Sui – Following (Adaptation)",
    judgment:
      "Following brings exalted success. Perseverance brings reward—no mistake.",
    comment: `As autumn comes, all that lives adapts: fur thickens, seeds ride the wind, bark grows dense, insects burrow. By accepting the downward shift, life rests and is protected for future activity.

Following means knowing when to act or be still, speak or be silent. This is like autumn’s quieting—no struggle; a willing adjustment to prevailing forces. Let others steer the outer situation; even if you could alter events, it serves you now to remain in place. True strength lies in service—progress comes by fitting yourself to what is.

People follow leaders who tune their vision to the public mood. If a leader’s ideals ignore reality, following is dangerous; if aligned with the time’s pulse, you can join and be renewed.

Be adaptable in social dealings and, when needed, yield. Don’t spend energy resisting stronger forces; adapt to draw the most from relationships. Drop stale prejudices. If your aims don’t match the world’s, change yourself. Your progress rests on the facts around you: at home act as you wish, but outside—adapt. This brings inner peace and success.`,
    footnote:
      "Unchanging Following indicates no growth begins until the time’s demands are met. You cannot rule circumstances until you first serve them. Do not struggle—relax and adapt.",
    upper: "DUI", // struktura: ['Jen','Duei'] → lower ZHEN, upper DUI (Lake)
    lower: "ZHEN",
    lines: {
      1: "Bottom line: Goals and conditions shift. To achieve anything, engage across differences—yet don’t abandon your principles or good sense.",
      2: "Second line: Examine your aims and standards. If they’re base, weak, or absent, you fall behind stronger influences. Decide.",
      3: "Third line: As you connect with worthy people and ideas, you part from inferior elements. Hold to the higher path—you’ll find what you seek and your character improves.",
      4: "Fourth line: Those who seem to follow you harbor hidden motives. Look past the flattery to your primary aim; act independently.",
      5: "Fifth line: If you sincerely want the best for yourself, you can attain it. Aim high. Good fortune.",
      6: "Top line: Called to lead by virtue and wisdom, you’ll be drawn into many affairs—and rewarded for uncommon service.",
    },
  },

  // 18 — Gu / Work on What Has Been Spoiled (Correction)
  {
    key: "gu18",
    id: 18,
    name: "Gu – Work on Decay (Correction)",
    judgment:
      "Work on what is spoiled brings exalted success. It furthers to cross the great water. What has happened once will happen again (three days before the beginning; three days after).",
    comment: `The matter is in neglect—whether innate flaw or the result of lax oversight. You cannot ignore even the smallest detail of what you wish to govern. Everything has weak points; relationships and projects most of all.

Pause and reflect. Pressures surround you, but success is promised if you commit to correction. Through diligent work you can eliminate the consequences of past indifference. External forces don’t control this—your previous stance caused the damage; only you can repair it.

Before acting, consider how you arrived here. With thoughtful review your course will be right. The classic advises “three days of reflection” before and after beginning—adapt the interval to your aim. Favor constructive over destructive measures; build foundations for ongoing progress.

Avoid radical overhauls now. Seek immediately the field where constructive action and positive thinking apply. Be vigorous once the path is clear; don’t let inertia return. After problems are removed, new energy arises—maintain firm, consistent management so decay doesn’t recur.`,
    footnote:
      "Unchanging, Work on Decay calls for a changed stance toward your world. Too much has been neglected. You cannot master fate without authority over daily affairs—advance with unwavering, energetic conscientiousness.",
    upper: "GEN", // struktura: ['Sun','Gen'] → lower XUN, upper GEN (Mountain)
    lower: "XUN",
    lines: {
      1: "Bottom line: To avert decay, an entrenched, outworn structure must be changed. Though such reform feels drastic, careful action brings success and reward.",
      2: "Second line: Aware of past mistakes, you proceed with great care; needed changes may hurt those dear to you—move sensitively.",
      3: "Third line: You rush to fix the past and leap forward. Actions seem tactless, yet in the end you do not suffer for it.",
      4: "Fourth line: Disorder has been tolerated too long; under such conditions things continue to spoil.",
      5: "Fifth line: You are positioned to take responsibility for long-desired reform. Do it. Support comes; you are honored.",
      6: "Top line: You can transcend the whole situation—focus on universal aims and inner growth rather than every social detail. Beware superiority or contempt; they derail your development.",
    },
  },

  // 19 — Lin / Approach (Advancing)
  {
    key: "lin19",
    id: 19,
    name: "Lin – Approach (Advancing)",
    judgment:
      "Approach has exalted success. Perseverance brings reward. Yet in the eighth month there is misfortune.",
    comment: `A surge of advance—like late winter turning to early spring. As a sprout breaks the soil, you can make first steps toward your aim.

In politics or power, this is the moment for action: talents come to center stage; an authoritative role beckons. To secure position, respond to the people’s needs. The season won’t last—prepare for the natural autumnal decline (“in the eighth month, misfortune”), so use this spring to its fullest.

Business advances: leaders are receptive; large gains and sound finances are possible. In society, you “appear”—charisma influences others and sparks culture. Relations have strong potential; you become a trusted partner. Nurture your bond gently; early tolerance builds resilience for later storms.

Within, dynamic growth accelerates: identity and place clarify, physical and spiritual strength increase. Make confidence a lasting trait—your main support in future turmoil.`,
    footnote:
      "Unchanging Approach foretells an enduring spring regarding this matter—very fortunate: you’re well placed to realize plans and help others realize theirs.",
    upper: "KUN", // struktura: ['Duei','Kun'] → lower DUI, upper KUN
    lower: "DUI",
    lines: {
      1: "Bottom line: Begin with companions who share your enthusiasm—this support is vital for great aims. Ensure the aims are worthy. Advancing in line with principle brings good fortune.",
      2: "Second line: Higher powers favor your intent; aims so right that you rise beyond innate hindrances. A bright future.",
      3: "Third line: Progress faces no obstacle—beware carelessness. Overconfidence is dangerous; sustained alertness prevents harmful errors.",
      4: "Fourth line: Your approach is skillful. Despite difficulties in a new role, your conduct is so fitting you may proceed without worry.",
      5: "Fifth line: A ruler’s position—entrust capable helpers and refrain from meddling. True authority is achieved.",
      6: "Top line: You let others draw from your deep experience; such generosity produces remarkable progress for all—a magnificent moment.",
    },
  },

  // 20 — Guan / Contemplation (Viewing)
  {
    key: "guan20",
    id: 20,
    name: "Guan – Contemplation (Viewing)",
    judgment:
      "Contemplation. The rite is performed, but the offering is not yet made. Sincerity inspires trust.",
    comment: `Seasons follow in fixed order; cycles govern planets and migrations. All matter moves in cycles; so do individual and communal fates. By observing these laws and their effects, you discern the patterns woven through events. Such insight, developed honestly, lets a person master self and circumstances.

Life itself has seasons: spring—insight; summer—work; autumn—harvest; winter—rest and viewing. To grasp the present, consider what directly preceded it and what will naturally follow.

One resists admitting our inborn capacity to foresee trends because we seldom know what we truly want. Courageous, objective observation grows power over time. Aligned with nature’s law, responses become spontaneous and fitting; others feel the force of such presence—true leadership guides not by force but by inspired clarity.

You may be out among people now—listen closely, then offer counsel; your words carry weight. In work, investigate, watch, and adjust practices that don’t fit. Sincere observation without hidden agenda builds mutual trust. Understand what’s needed and answer rightly; partnerships rise to a higher level.

Know that others are also observing you. Supported by natural law, your station is conspicuous and your influence, obvious. As you climb to see farther, you too are more visible.`,
    footnote:
      "Unchanging Contemplation means there’s more to do about this matter. Study it seriously; grasp the core tendency and trajectory, then act decisively to adjust it. If you’ve been realistic, people will trust you.",
    upper: "XUN", // struktura: ['Kun','Sun'] → lower KUN, upper XUN (Wind)
    lower: "KUN",
    lines: {
      1: "Bottom line: Superficial viewing—judging by side effects—is unfit. See the situation within a larger whole to discern its true meaning.",
      2: "Second line: If ambition outruns inner peace and reaches for public life, broaden your view—stop measuring everything by private standards.",
      3: "Third line: Sound choices require objective self-knowledge—not merely analyzing thoughts and dreams. Know yourself by watching your effect on others.",
      4: "Fourth line: Advance by contemplating society’s worthy aims, leaders, or organizations you could join or support. Social awareness opens you and increases your influence.",
      5: "Fifth line: Observe your life’s impact on others to glimpse what the future holds. If you set a good example, you are free of blame—and that is its own reward.",
      6: "Top line: Standing somewhat apart, you can view life with few preconceptions and see the value of right conduct. No regret. Observation free of ego is the key.",
    },
  },
  // 21 — Shi He / Biting Through
  {
    key: "shiho21",
    id: 21,
    name: "Shi He – Biting Through (Change, Breaking Through)",
    judgment: "Biting Through. Success. Favorable for legal matters.",
    comment: `It’s time for decisive reform. Whether faced with an improper person or a concrete obstacle, something blocks your efforts. Expose it to the light and remove it through firm change. Success comes by applying law and justice; compromise won’t work and the problem won’t fade on its own.

In public life, hold to clear principles and sound laws. If you lead, champion fair and timely rules and order; if you follow, support capable leadership that can enact deep reform.

Personal ties without clear agreements and mutual respect risk collapsing into confusion. This is not a time to avoid confrontation or hide feelings—energetic, sensible action brings results.

Turn the lens inward as well: see where self-deception and habit have hijacked discernment. Discover what truly aligns you with Self and with the world; make that your compass. Remove the factors that seize control of your conduct or health. Be cool, firm, gentle, and resolute—renew yourself and your surroundings.

A strong wind has been blowing around this matter for some time.`,
    footnote:
      "Unchanging Biting Through signals a necessary, radical change. It will provoke reactions but release the tension that blocks your aims.",
    upper: "LI",
    lower: "ZHEN",
    lines: {
      1: "Bottom line: Because this is only a slight deviation, the penalty is light—meant to prompt timely change.",
      2: "Second line: Persistent misbehavior must meet swift correction. Though it seems harsh, it completes the change—no blame in the end.",
      3: "Third line: Lacking strength and authority, your attempts meet indifference and even ridicule. Yet change is needed—your efforts are justified.",
      4: "Fourth line: A hard task—the obstruction is firmly seated. Be unwavering from the start; only sustained alert effort succeeds.",
      5: "Fifth line: Decision is hard though choices are few. Once you choose, do not swerve. Aware of dangers, go straight.",
      6: "Top line: One who won’t recognize or admit faults strays ever farther. Ignoring the Way, warnings mean nothing—misfortune.",
    },
  },

  // 22 — Bi / Grace (Adorning, Charm)
  {
    key: "bi22",
    id: 22,
    name: "Bi – Grace (Charm, Adornment)",
    judgment:
      "Grace. Success. A small advantage if there is a goal or destination.",
    comment: `A moment of perfect poise and aesthetic refinement—diverse experiences shimmer as one still, radiant image. Elegance brings joy to the heart, clarity to mind, and peace to soul. Enjoy the enchantment, but don’t mistake form for substance or plan the future on ideal beauty; that leads to error.

In work, keep to proven principles; Grace can polish endeavors and public image, but avoid far-reaching decisions. It favors arts, performance, PR, and image.

In relationships, ideals soar—lovely, yet everyday life will test them. Let Grace adorn the present, not dictate fate. Creatively and spiritually this is rich; let the moment refine you, not push radical change.`,
    footnote:
      "Unchanging Grace marks a timeless, isolated moment. Enjoy the ideal, but don’t confuse it with reality—heaven’s perfection has dazzled your sight.",
    upper: "GEN",
    lower: "LI",
    lines: {
      1: "Bottom line: Advance on your own strength; avoid false fronts, shortcuts, and swagger. Rely on inner virtue.",
      2: "Second line: Grace alone is nothing; it is mere ornament. Attend to content, not the vessel.",
      3: "Third line: Enchanted by the moment, you drift. Don’t be lulled—hold to discipline and principle.",
      4: "Fourth line: Two paths: external sheen and status, or simplicity and inner virtue. Simplicity deepens self-knowledge and bonds.",
      5: "Fifth line: You’d strengthen a bond with one you admire but doubt your worth. Sincere intent and friendship suffice—good fortune.",
      6: "Top line: Inner purity gives outer radiance. No need for pose or polish. Choose simplicity—no mistake.",
    },
  },

  // 23 — Bo / Splitting Apart (Decay, Stripping)
  {
    key: "bo23",
    id: 23,
    name: "Bo – Splitting Apart (Decay, Stripping Away)",
    judgment: "Splitting Apart. It does not further to go anywhere.",
    comment: `Decay dominates; inferior elements control the situation. The process will run its course; the superior person can only wait. In governance and groups, incompetence at the top hastens collapse—best to respect cycles of rise and fall and shelter those close to you.

In business and finance, avoid pursuits of personal gain; conditions are in unfit hands. Consolidate position, support those below you, and wait out the turn.

Socially, communicate with restraint; if possible, skip public showcases. In close ties, rifts are hard to bridge; remain quiet, kind, and supportive until the tide turns.

Health and inner work suffer under the ambient negativity; nurture body and spirit and accept what is until time restores balance.`,
    footnote:
      "Unchanging Splitting Apart shows little hope in this matter now. Nothing is under your control. Strengthen your base through modest service to others; any exit lies in humility.",
    upper: "GEN",
    lower: "KUN",
    lines: {
      1: "Bottom line: Your footing is shaken; petty people have slipped in. Time is not friendly to the upright—wait.",
      2: "Second line: Extreme caution: you stand compromised and alone. Adapt as best you can; forcing your way brings hurt.",
      3: "Third line: You must deal with unworthy people. If you hold fast to higher powers, you avoid decay and later regret.",
      4: "Fourth line: Danger closes in; defeat nears without warning.",
      5: "Fifth line: The inferior phase begins to reverse—cooperation becomes possible. Success can open.",
      6: "Top line: The forces of decay lose power. Those with clear vision regain support; the unworthy fall by their own doing.",
    },
  },

  // 24 — Fu / Return (The Turning Point)
  {
    key: "fu24",
    id: 24,
    name: "Fu – Return (Turning Back)",
    judgment:
      "Return. Success. Going and coming without error. Friends come—no blame. After seven days comes return. It furthers to have a goal.",
    comment: `After long stagnation, a new cycle begins. Paths open, but it’s only the start—don’t force growth; improvement will come gradually, as surely as spring after winter. Conserve energy for the complications that attend every new phase; let Return settle of itself, and take a comfortable place within it.

Gather allies around a shared aim; success will follow as movement frees itself from inner and outer blocks.

Socially, the lull may still linger; improve will come—avoid frantic catch-up. Rest and prepare before re-entering the center. In important relationships, consider a fresh approach—again, avoid haste.

Ensure all ties match your true nature; if unsure, this is a prime time for self-knowledge. Return reveals patterns in your life—seeing them brings wisdom about your Way.`,
    footnote:
      "Unchanging Return may mark the start of one of your recurring cycles. Recognize familiar patterns—perhaps a neurosis or an excuse to remain the same. A better stance toward your fated elements brings greater contentment.",
    upper: "KUN",
    lower: "ZHEN",
    lines: {
      1: "Bottom line: You toy with an idea at odds with your principles. Keep discipline and the right path to strengthen character and achieve great things.",
      2: "Second line: Right action is easier in good company—learn from worthy examples.",
      3: "Third line: You waver among tempting alternatives; such experimenting can be risky and vexing, yet the situation improves.",
      4: "Fourth line: Your milieu is on a lower level than you. You see a better way and wish to go—friends may not follow; you may go alone.",
      5: "Fifth line: Aware of the need for a new start, you act bravely. Character improves by objectively viewing and crossing your faults.",
      6: "Top line: At the cycle’s start you missed the chance to change though you saw the need. Now wait for the wheel to turn before the next opening.",
    },
  },

  // 25 — Wu Wang / Innocence (The Unexpected)
  {
    key: "wuwang25",
    id: 25,
    name: "Wu Wang – Innocence (The Unexpected)",
    judgment:
      "Innocence. Supreme success. Perseverance furthers. Misfortune to those not in accord with their nature. Nothing furthers to undertake.",
    comment: `Yield to the cosmic current before acting, or mistakes are certain. Even well-planned moves go awry now. Align by becoming guileless: examine motives—impurity is the root of trouble. Act without calculation or grasping; be simple and sincere. Health, service, and learning deserve first care. Without ethics and firmness, “following your instincts” would be dangerous—let your way forward be indirect.

Rely on inner value rather than strategy. Innocence enriches life through spontaneous creativity and inspires others. If you teach or lead, meet needs without any thought of status.

Heaven’s laws don’t track human wishes; the unexpected will occur. Be ready for sudden turns and for the complications that attend beginnings. In intimacy, spontaneity refreshes and reveals true feeling; scheming entangles. For stuck problems, a simple, oblique approach yields original solutions.`,
    footnote:
      "Unchanging Innocence heightens the chance of surprises. Expect outcomes unlike your expectations; stay flexible and you won’t err.",
    upper: "QIAN",
    lower: "ZHEN",
    lines: {
      1: "Bottom line: Steady, spontaneous action succeeds. Acting from a pure heart, trust your instincts—good fortune.",
      2: "Second line: Don’t daydream about results; act for the work itself, fully present. Only then is the goal reached.",
      3: "Third line: Undeserved misfortune may strike—but it will pass. Innocence doesn’t prevent fate’s turns; keep simplicity and integrity.",
      4: "Fourth line: Do not be swayed by others’ ideas; trust your inner vision. Follow intuition.",
      5: "Fifth line: What seems unlucky springs from inner attitudes. Outer help won’t solve it—it is an inner process. Let nature work; resolution comes by itself.",
      6: "Top line: Progress is blocked; even innocent action would cause disorder. Attempt nothing new; do not try to fix things. Do nothing.",
    },
  },
  // 26 — Da Chu / The Taming Power of the Great
  {
    key: "dachu26",
    id: 26,
    name: "Da Chu – The Taming Power of the Great (Potential Strength)",
    judgment:
      "The great store of power favors perseverance. Good fortune if one does not eat at home. It furthers to cross the great water.",
    comment: `You hold a large reserve of stored power—use it with timing and restraint. Control, channel, and conserve strength; keep re-evaluating your plan.

In public matters, choose the common good over private gain; place your strength in service of a worthy leader and great aims. In business, favor public service and broadly useful ventures; you have resources to risk, but keep goals large and worthy.

Tolerate imperfect ties and cultivate useful connections; extend your communications pragmatically. Personally, relationships may blossom quickly—stay with traditional values. Inwardly, a clear vision coalesces; this can be a leap in maturity. You possess the potential power for an enlightened insight that could change your life.`,
    footnote:
      "Unchanging Da Chu signals a volatile build-up. Bleed off pressure carefully. Seek guidance from proven authorities or traditions—and act now.",
    upper: "GEN",
    lower: "QIAN",
    lines: {
      1: "Bottom line: Gather yourself. You feel halted; in truth the obstacles lie just ahead—stop for now.",
      2: "Second line: Progress stalls under forces beyond reach. Stay put and conserve strength; be content—no conflict.",
      3: "Third line: The way opens and you advance; allies join. Keep your own aims in view—proceed with care.",
      4: "Fourth line: What seemed to restrain you actually helped you mature—preserving a great reserve of power.",
      5: "Fifth line: Great unchecked force is best curbed by cutting it off from its source—an indirect check. Good fortune.",
      6: "Top line: All barriers are gone. Use the stored power for works of wide benefit; align with the Tao—unheard-of success.",
    },
  },

  // 27 — Yi / Nourishment (The Corners of the Mouth)
  {
    key: "yi27",
    id: 27,
    name: "Yi – Nourishment (Feeding)",
    judgment:
      "Nourishment. Perseverance brings good fortune. Attend to what one takes in—and to what one gives to nourish others.",
    comment: `Life is a self-renewing chain of exchange. Quality in the chain produces quality in results. Focus now on healthy nourishment—of body, mind, and community.

When you feed others, choose the worthy—those who will in turn nourish many. Use the “food model” to judge people and situations: inferior character reflects inferior intake and yields little; admirable character reflects sound intake and can give much.

If relations misfire, check the quality of what you offer—do you encourage or discourage? Discipline thoughts; cultivate fruitful ideas; keep a calm mind when working; avoid anger and excess. Guard what you allow into your body and mind; avoid self-indulgence. You are the product of what you take in—then you pass that on.`,
    footnote:
      "Unchanging Yi is well-balanced. If you like the current state, keep your habits—they created it. If not, you must seriously reduce your appetites.",
    upper: "GEN",
    lower: "ZHEN",
    lines: {
      1: "Bottom line: Absorbed in advancing others, you lose hold of your own fate—blame and misfortune.",
      2: "Second line: You could feed yourself, yet rely on unfit people or methods—this risks your freedom and invites trouble.",
      3: "Third line: You stay hungry, seeking food in the wrong place and turning your back on those who could help—eccentric and dangerous.",
      4: "Fourth line: Your wish to nourish others can be fulfilled; you have position, but will need helpers. Seek skilled aid—no mistake.",
      5: "Fifth line: Aware of the need to nourish, you lack strength alone. Don’t act directly—follow one stronger. Do not go it alone.",
      6: "Top line: A high awareness of how to raise and nourish others; responsible acceptance of the task brings wide good fortune.",
    },
  },

  // 28 — Da Guo / Great Exceeding (Critical Mass)
  {
    key: "daguo28",
    id: 28,
    name: "Da Guo – Great Exceeding (Critical Mass, Preponderance of the Great)",
    judgment:
      "Great Exceeding. The ridgepole bends. It furthers to have a goal or destination. Success.",
    comment: `Many weighty matters converge—decisions, ideas, people’s urgent needs. Your world has become a crossing of pressures; it can reach critical mass.

Take shelter and prepare your next move. Appraise everything that bears on you; use ingenuity to ready a decisive shift. Define a destination. Secure your essentials and be ready for a quick transition to a new mode of life.

In relationships and inner life this is crisis: gather strength and face the core. Retreat to the innermost self and grasp your position. Rely on character; endure until resolution. You may have to stand apart and sever some ties to get through—do it bravely.

Above all, act quickly when the mass nears breaking: whether planned withdrawal or meeting events head-on, only firm, sure action succeeds.`,
    footnote:
      "Unchanging Da Guo: under heavy strain you must act firmly and independently. Even good things should not be overdone.",
    upper: "DUI",
    lower: "XUN",
    lines: {
      1: "Bottom line: At the outset of a major venture, attend to details. The time is delicate—choose path and method with extra care.",
      2: "Second line: Seek modest beginners and enlist their help—kindred spirits who share your aim. Things flow; life stirs.",
      3: "Third line: You force a way forward against constant obstacles and reject advice you don’t want—misfortune is inevitable.",
      4: "Fourth line: Your vision is clear; you can complete the work. Do not lean on outer things or people—dependence now brings shame.",
      5: "Fifth line: In critical times, don’t exhaust yourself with ideals while ignoring facts—the facts structure your life. Forgetting the source brings anxiety and failure.",
      6: "Top line: The aim is worthy though the cost is great. Action brings no blame—but recognize the extreme conditions in time.",
    },
  },

  // 29 — Kan / The Abysmal (Water)
  {
    key: "kan29",
    id: 29,
    name: "Kan – The Abysmal (Danger, The Pit)",
    judgment:
      "Repeated Abyss—the danger is real. With sincerity and caution, all ends well; what you do succeeds.",
    comment: `This is concrete external danger, not inner conflict. Meet it with courage and correct conduct. Hold to principle; do not compromise your ethics. In business and politics, follow accepted rules; don’t bargain away your standards. In ties, stay true to your nature; if a bond demands you sacrifice principle, end it.

Danger can forge the self: openly keeping to virtue while defending your aims lets things fall into right form. Your steadiness becomes an example that quietly orders your circle, removing danger from the environment.

Encounters with danger teach life and the cosmos; this enlarged awareness gives your life new meaning.`,
    footnote:
      "Unchanging Kan: danger intensifies around this matter. Desire keeps returning you to the brink. Right conduct strengthens character and lets you rise above the whole situation.",
    upper: "KAN",
    lower: "KAN",
    lines: {
      1: "Bottom line: Inured to bad influences, you no longer resist—you’re lost. The more you do, the farther you stray. Try once more—start again.",
      2: "Second line: The peril is great—no single stroke removes it. Only small, steady efforts at the helm will do.",
      3: "Third line: Unaware you are surrounded by danger; action now would worsen things. Hold to principle and wait for the opening.",
      4: "Fourth line: Address the problem simply and directly; keep a clear mind. Don’t complicate with pose or theatrics.",
      5: "Fifth line: Do only enough to remove the issue. Overreach breeds fresh trouble; the danger will pass of itself.",
      6: "Top line: No remedy has fit; the exit is blocked. A long season of disorder—only waiting remains.",
    },
  },

  // 30 — Li / The Clinging (Fire)
  {
    key: "li30",
    id: 30,
    name: "Li – The Clinging (Radiance, Interdependence)",
    judgment:
      "Radiant clarity. Perseverance furthers; it brings success. Raising a cow (cultivating docility) brings good fortune.",
    comment: `When two things join, together they exceed what either could do alone—this is the fruitful interdependence Li describes. You and your subject are mutually entangled; cooperation and overlap of spheres bring inspired ideas, high energy, sharper perception, and strong communication.

Civically, a just leader brings order and enlightenment—clarity joined to justice can refine the world.

Recognize Earth’s limits: energy, ideas, resources are finite. Work within constraints; ally with natural forces. Read the time: when pressure builds, don’t burst—work it off methodically. When energy rises, don’t get giddy—apply it to real creation. When it falls, rest and store strength. Cultivating inner coordination opens new ways to steer fate.`,
    footnote:
      "Unchanging Li urges aligning the elements of your life. Do career, health, partner, and aims support one another? Inner clarity is near to illumination.",
    upper: "LI",
    lower: "LI",
    lines: {
      1: "Bottom line: On a new path you’re flooded with impressions. Avoid confusion by keeping the goal before you; accept beginner’s distance.",
      2: "Second line: A restrained, reasonable approach brings the greatest good fortune—avoid extremes in thought and deed.",
      3: "Third line: Submit to what is; giving in to bliss or clinging to the past alike loses inner freedom—misfortune.",
      4: "Fourth line: Over-zealous striving scatters your fire—nothing comes of it.",
      5: "Fifth line: A dramatic shift of feeling brings deep grief—yet after sorrow comes joy; the change ushers in better days.",
      6: "Top line: Strike the root of the problem; don’t hold grudges against the misled. Once the cause is cleared, order returns. (This can also point to a bad habit or trait.)",
    },
  },
  // 31 — Xian / Influence (Attraction)
  {
    key: "hsien31",
    id: 31,
    name: "Xian – Influence (Attraction)",
    judgment:
      "Attraction. Success. Perseverance brings reward. Taking a spouse brings good fortune.",
    comment: `The known world is shaped by laws of attraction—from atomic bonds to orbital systems. In life, attraction weaves intent, perseverance, and fulfillment; polar draw and our social/creative urge form the basis of family and society.

A serious, mutual attraction is forming between you and the subject—person or situation. You hold initiative. Clear hidden motives and biases; let the object of interest affect and refine you. Then influence becomes mutual and the bond fulfills itself.

Leaders influence best by serving people; openness invites approach and gentle guidance. Socially, your receptivity attracts others. In intimate matters, “marriage brings good fortune.”

When judging a person or path, notice what they attract—ideas, people, problems—and infer the nature of your future together. The same read applies to ventures: what do they draw toward your life, health, and destiny?`,
    footnote:
      "Unchanging Influence advises openness and receptivity to what now enters your life. Mutual influence—perhaps a love bond—must be experienced before the next change.",
    upper: "DUI",
    lower: "GEN",
    lines: {
      1: "Bottom line: Something is in the air—an inkling of attraction or a clarifying idea. It’s minor yet; much must be done to make it real.",
      2: "Second line: You feel moved to act without clarity—like walking in sleep. Avoid action until you see what’s happening, or you invite trouble.",
      3: "Third line: Establish self-control. Don’t chase control of others or indulgence in pleasures. Set limits and act within them until discipline grows.",
      4: "Fourth line: You long to influence someone or a situation. Don’t scheme; show conviction by steady example. Persistence achieves the aim.",
      5: "Fifth line: Look within and gauge your real influence. Deep-rooted resolve moves much; shallow roots move little.",
      6: "Top line: Words are only words. Ideas not enacted mean little. What will you do?",
    },
  },

  // 32 — Heng / Duration (Perseverance)
  {
    key: "heng32",
    id: 32,
    name: "Heng – Duration (Perseverance)",
    judgment:
      "Perseverance. Success without blame. Constancy furthers. It is favorable to have a goal or place to go.",
    comment: `Study what endures: plants unfold to the sun and root into earth; blossom, fruit, seed, and renew. So too with human ways—traditions that sustain life deserve respect. Seek in yourself the traits that renew and continue.

Pursue aims through personal constancy—act by your inborn rightness and trust your instincts. Social customs give safety because of their longevity; embrace foundations that make life effective, not stale forms.

In work and politics, support proven rules and refine them with fresh thinking—this is not the moment to change methods for novelty’s sake. Success comes by steady progress toward long-range, life-organizing goals.

Relationships thrive within stable institutions (home, marriage). Ceremonies and traditions add joy and security; let bonds be purposeful and adaptive, not rigid. Traditions are trellises that let the vine climb.`,
    footnote:
      "Unchanging Duration calls for building inner constancy and unity. Let that axis govern behavior. Undisciplined wandering would lead you astray—listen within; seek lasting values.",
    upper: "ZHEN",
    lower: "XUN",
    lines: {
      1: "Bottom line: Don’t adopt a whole new system at once—lifestyles don’t change overnight. No shortcut to renewal; cultivate over time.",
      2: "Second line: Use only as much steady force as needed—too much or too little brings disorder. Avoid extremes.",
      3: "Third line: Your moods react to shifting externals; such inconstancy breeds regret and cycles of trouble. Center yourself.",
      4: "Fourth line: Test your aims for realism. Attempting the impossible earns nothing—re-examine desires.",
      5: "Fifth line: Earthly aims need earthly means; lofty aims need inventive, bold means. Match method to end.",
      6: "Top line: Constant tension exhausts you. Calm, measured conduct achieves more. Understand your position and adapt before making serious trouble.",
    },
  },

  // 33 — Dun / Retreat
  {
    key: "dun33",
    id: 33,
    name: "Dun – Retreat",
    judgment:
      "Retreat. Success. Perseverance in small matters brings advantage.",
    comment: `As the full moon wanes and winter hides within summer, so cycles of advance and decline govern relations. Darkness spreads; withdraw before it, not from fear but in accord with timing. Choose the moment: too early and you underprepare; too late and you are trapped. Make retreat confident and complete; until it is time to counter, only small things can be settled.

Do not engage hostile forces or entangle emotions in no-win fights. Break contact, become self-sufficient, and pull back in mind and heart. Business and politics grow adverse; don’t oppose head-on—improve small internal things and wait for change.

Withdraw broadly from a discordant circle; accept this as a phase and keep cool. Seek contentment within. If ideals and reality clash inside, retreat to gain perspective; leave the inflaming conditions rather than warring with yourself.`,
    footnote:
      "Unchanging Retreat: the matter is obstinate and beyond your reach. Step out calmly, without resentment.",
    upper: "QIAN",
    lower: "GEN",
    lines: {
      1: "Bottom line: You’re too close to the foe; better to have withdrawn earlier. Now any action invites danger.",
      2: "Second line: Lacking strength for full retreat—either firm your resolve to withdraw or follow one who can lead you.",
      3: "Third line: Unable to retreat, you’re in the thick of it—surrounded by petty people and ideas that both protect and confine you.",
      4: "Fourth line: Recognize the moment and retire consciously; you’ll adapt and progress. The uncomposed will suffer greatly.",
      5: "Fifth line: Withdraw firmly yet with grace. Don’t debate it endlessly—steadfast retreat brings good fortune.",
      6: "Top line: You’re far enough outside to retire without blame or doubt. Great good fortune and notable success.",
    },
  },

  // 34 — Da Zhuang / The Power of the Great
  {
    key: "dajuang34",
    id: 34,
    name: "Da Zhuang – The Power of the Great",
    judgment: "Great Power. Persevering in the right brings reward.",
    comment: `Great power tests character: your acts ripple widely. Power is a means, not the end; right timing and noble motive matter most. Combine rectitude with force and you embody Heaven-and-Earth’s intent. The time favors worldly affairs, but verify fairness and stay within policy; rash moves ruin.

Socially you’re in the spotlight—use influence to improve bonds and do good. Keep to traditional roles; even small deviations could spark emotional disorder. Inwardly, don’t mistake power for inner virtue; it’s another trial. Use it with timely, gentle conduct and let others rise—you’ll strengthen your own well-being too.`,
    footnote:
      "Unchanging Great Power asks you to harmonize the Self with traditional ideals so your strength lifts you beyond stifling conditions.",
    upper: "ZHEN",
    lower: "QIAN",
    lines: {
      1: "Bottom line: Though strong, pressing ahead would be wrong—you’re not in position to force things.",
      2: "Second line: Modesty is the key—don’t grow overconfident because resistance is light. Use power carefully.",
      3: "Third line: The untrained flaunt strength; it breeds tangles and danger. Concealed power impresses most now.",
      4: "Fourth line: Quietly accomplishing your aim without display removes obstacles and saves force—good fortune.",
      5: "Fifth line: Drop stubborn prejudice; nothing to prove. Progress comes easily—great force isn’t needed.",
      6: "Top line: Desire has gone too far—you’re at a dead end, worsening things by pushing. When you gather yourself, matters resolve on their own.",
    },
  },

  // 35 — Jin / Progress
  {
    key: "jin35",
    id: 35,
    name: "Jin – Progress",
    judgment:
      "Progress. The powerful prince is given many horses. Thrice in one day he is granted audience.",
    comment: `A time of swift social advance under a brilliant, enlightened figure—recognized by superiors and followers alike. Put yourself and your ideals at the service of the common good. If you can lead a progressive effort, success is great. Keep a conscientious, noble stance; your counsel will be welcomed.

Communication is vital—stay close to current movements, serve needs, and actively support what is forward-looking. In family and close ties, mutual backing turns individual gains into collective honor; jealousy has no place.

Altruism makes you magnetic; loyalty and sincerity harden character. Progress in self-cultivation comes as you examine your conduct toward those above and beside you—and find ways your behavior advances both.`,
    footnote:
      "Unchanging Progress signals a firm, lasting position. Stable harmony lets you found your ethics and philosophy on solid ground and launch future aims from a higher level.",
    upper: "LI",
    lower: "KUN",
    lines: {
      1: "Bottom line: Others don’t yet trust you—don’t push. Stay calm, noble, and warm; focus on your work and avoid future regret.",
      2: "Second line: Your progress isn’t as full as you think; a missed talk with authority blocked it. Unexpected fortune if you persist and keep strict principles.",
      3: "Third line: Progress depends on cooperation—mutual trust removes cause for regret.",
      4: "Fourth line: Advancement via inferior people or dubious means is possible, but truth will out—risky and dangerous.",
      5: "Fifth line: Though influential, act gently, with reserve—don’t scheme for gain or retreat. Keep to right progress—great good fortune.",
      6: "Top line: Be severe only to discipline yourself. Such caution avoids later remorse. Don’t impose the same harshness on others—or you’ll suffer in isolation.",
    },
  },
  // 36 — Ming Yi / Darkening of the Light
  {
    key: "mingiyi36",
    id: 36,
    name: "Ming Yi – Darkening of the Light (Censure)",
    judgment:
      "Darkening of the Light. Perseverance amid hardship brings success.",
    comment: `Opposing forces now menace your convictions and aims, and your position is weak. Practice self-censorship and lie low. Conceal feelings; outwardly conform. Open declaration only invites trouble. Keep your inner focus sharp—this steadies character until you can act.

If you must influence, do it subtly. The superior person hides his brilliance and thus avoids provoking foes while still exerting quiet effect. Let conflicts pass without contention—for now neither public debate nor political action prospers.

Loved ones aren’t ready to hear you; postpone difficult talks. Use the time to strengthen yourself. Accept the season: resisting darkness head-on only feeds it. Night and day are both of the cosmos. Recognizing this helps you grow even in lean times.`,
    footnote:
      "Unchanging Darkening of the Light: your influence on the matter will remain limited. Do not abandon your ideals—this constraint is part of your fate and serves inner development.",
    upper: "KUN",
    lower: "LI",
    lines: {
      1: "Bottom line: Rising above your milieu draws hostility. If you act for self alone against communal need, you’ll be censured.",
      2: "Second line: Recent injustice spurs you to positive action for the common good.",
      3: "Third line: You see the root of past error and could seize control—yet beware sudden rejection of ingrained habits.",
      4: "Fourth line: You see the situation clearly; though bleak, now is the moment to find the exit.",
      5: "Fifth line: You play a key role yet are out of tune with the times. Veil ideals, comply outwardly; in the end, reward.",
      6: "Top line: The phase ends; the darkness fades of itself and is forgotten along with its rulers.",
    },
  },

  // 37 — Jia Ren / The Family
  {
    key: "jiajen37",
    id: 37,
    name: "Jia Ren – The Family",
    judgment: "The Family. The woman’s perseverance brings reward.",
    comment: `Family forms by embracing natural roles infused with love, duty, and respect. The household’s welfare equals that of each member. “Order the family and society follows.”

Leaders—like heads of household—govern from inner firmness, careful words, and sound acts; followers prosper by supporting this order. Lean on loyalty, trust, humility; let deeds speak. Keep to rightful roles and accepted authority.

Refine social ties by choosing roles grounded in attraction and respect, not vanity or pushiness. Tradition and steady principles win confidence. In intimate life, allow a unifying authority to emerge; refusing roles stirs conflict. View every group as a family and seek the place that fits your nature; shun roles that warp your path.`,
    footnote:
      "Unchanging Family: your role is clear; hold to it and you avoid trouble around this matter.",
    upper: "XUN",
    lower: "LI",
    lines: {
      1: "Bottom line: Establish clear roles and systems from the start—then even friction passes without regret.",
      2: "Second line: Don’t act on impulse or by force; tend the near needs of the household—there lies good fortune.",
      3: "Third line: Balance lenience and discipline; if unsure, better be a bit strict than lose order to laxity.",
      4: "Fourth line: Mind the economy and details—modest, honest efforts bring success.",
      5: "Fifth line: Great affection flows between leader and followers—be openly benevolent; good fortune.",
      6: "Top line: You advance in self-cultivation; responsibility to self and others brings success and esteem.",
    },
  },

  // 38 — Kui / Opposition
  {
    key: "kuei38",
    id: 38,
    name: "Kui – Opposition",
    judgment: "Opposition. Good fortune in small matters.",
    comment: `Strong divergence rules the scene—outer conflict or inner split. Understand the root of difference and adapt. Great works need full unity; attempt small tasks and gentle, gradual influences instead.

Paradoxically, opposing forces can forge a higher union than easy alliances. Be patient; diplomacy now works wonders. In home and love, polarities peak—the classic dance of difference before true joining. Even inner dualisms can clarify vision: from a higher view, old dogmas soften and opposites reveal a larger harmony.`,
    footnote:
      "Unchanging Opposition shows estrangement: unlike elements work against each other. Don’t let conflict poison your original aim—stand in your individuality to move again.",
    upper: "LI",
    lower: "DUI",
    lines: {
      1: "Bottom line: Natural partners are estranged—do not force union. Let things return on their own; a cool refusal wards off indecency.",
      2: "Second line: A chance meeting—person or idea—helps; planned approaches fail.",
      3: "Third line: Troubles pile up, resistance meets you everywhere. Hold to your truth and join a capable ally—good in the end.",
      4: "Fourth line: Isolated in opposition, you meet a kindred heart; mutual trust overcomes danger and achieves much.",
      5: "Fifth line: Distrust blinds you to a true helper; they reveal themselves and shared work brings fortune.",
      6: "Top line: Misunderstanding turns friends into foes—eventually you see your error and tension ebbs; at the peak of opposition, fortune begins to return.",
    },
  },

  // 39 — Jian / Obstruction
  {
    key: "jien39",
    id: 39,
    name: "Jian – Obstruction (Limping)",
    judgment:
      "Obstruction. West and south are favorable, not east and north. It is well to see the great person. Perseverance brings good fortune.",
    comment: `Like water dammed, you must pool strength before you overflow the barrier. The obstacle is part of the chosen path; there is nowhere else to go. Do not ram through—gather force, seek counsel and allies (“visit the great person”), organize, research, meditate. Then finish firmly and rightly.

Hire helpers; unite with those who won’t flinch at long plans. Socially, be conscientious and in the right place at the right time. Many outer blocks mirror inner conflicts—hold constructive thoughts and you’ll find uplift.`,
    footnote:
      "Unchanging Obstruction: the block is set—and likely self-set. Don’t blame; use it to know yourself and why you chose this path.",
    upper: "KAN",
    lower: "GEN",
    lines: {
      1: "Bottom line: Don’t try to remove the block now; withdraw and wait for the easy opening.",
      2: "Second line: Serving a larger aim means meeting obstacles—wrong in trifles, right in emergencies; no blame.",
      3: "Third line: Neglecting present needs to fight externals endangers your base and loved ones—retreat and reassess.",
      4: "Fourth line: Breakthrough requires help—ally with a person or body; solo efforts fail.",
      5: "Fifth line: Even in dire straits, your spirit draws helpers; together you succeed and blocks yield.",
      6: "Top line: You cannot stay apart; you will be drawn into the fray. Look to sages—good fortune for all.",
    },
  },

  // 40 — Jie / Deliverance (Release)
  {
    key: "hsie40",
    id: 40,
    name: "Jie – Deliverance (Release)",
    judgment:
      "Release. West and south are favorable. Those who gained nothing by going out rejoice returning; those who gain by going out should hasten to succeed.",
    comment: `A decisive act discharges tension like a thunderstorm clears the air. Resolve quickly and return to normal order; timing matters.

Chronic political or organizational knots can be cut—ignore old slights; forgive where you can. If engulfed in intrigue, a clean exit may be best—don’t dawdle. Business blocks give way—let them; restore regular operations.

Relationships ease as strain dissolves—fix awkward arrangements without delay and without drama. Love warms again; the time is even erotic. After the storm, spirit refreshes; energy and clarity surge for new growth.`,
    footnote:
      "Unchanging Release signals inner unbinding—dropping an unhealthy habit, prejudice, or obsession. The relief is durable and advances your path.",
    upper: "ZHEN",
    lower: "KAN",
    lines: {
      1: "Bottom line: Difficulties are past; the road is clear. Use this time to secure your position.",
      2: "Second line: Petty persons sway authority with low means—expose them plainly; good fortune.",
      3: "Third line: You’ve reached a high seat but don’t know how to act; posing invites envy and eventual humiliation.",
      4: "Fourth line: Some cling to you for gain—a parasitic bond. Cut it or you repel true allies.",
      5: "Fifth line: To quit a low habit or scene, decide within first; once freed, respect follows—good fortune.",
      6: "Top line: Prepare for a hard strike at a strong foe—plan early, stay alert. Remove the block and all proceeds well.",
    },
  },
  // 41 — Sun / Decrease
  {
    key: "sun41",
    id: 41,
    name: "Sun – Decrease",
    judgment:
      "Decrease joined with sincerity brings supreme good fortune without blame. Favorable to undertake something. If there is doubt about the offering, two bowls suffice.",
    comment: `The pendulum swings toward decline. Since decline conceals the seed of growth, conduct now matters most. Accept it as natural; simplify life, act with timing, and you avoid major errors. Clinging to habits of abundance breaks contact with reality.

Simplify relationships rather than forcing excitement; turn energy inward for self-cultivation. In business expect material loss yet success through openness and steady devotion to current duties. In love, ease expectations and be kind; refine character.`,
    footnote:
      "Unchanging Decrease: your feelings are out of step with the time. Accept the reality of decline and temper strong displays until the turn comes.",
    upper: "GEN",
    lower: "DUI",
    lines: {
      1: "Bottom line: In giving or receiving help, avoid excess on either side.",
      2: "Second line: Aid that costs your dignity or violates principle is shameful—only acts that do not diminish the self are worthy.",
      3: "Third line: Intimacy favors pairs; triangles breed jealousy and collapse. Stand alone to find new allies; restore balance.",
      4: "Fourth line: Admit faults and reduce bad habits—friends and helpers approach; modesty opens noble doors.",
      5: "Fifth line: Fortune’s favorite—unseen forces clear the way; fear nothing. Good fortune.",
      6: "Top line: Enlarge aims to embrace the universal; support gathers, prominence follows—accept new rank and duty for the good of many.",
    },
  },

  // 42 — Yi / Increase (Benefit)
  {
    key: "yi42",
    id: 42,
    name: "Yi – Increase (Benefit)",
    judgment:
      "Increase. Favorable to have a goal and to cross the great water.",
    comment: `Extra energy floods the moment—hard tasks are possible. Use it well before conditions shift. Keep daily aims clear and ensure your gains benefit the community; power serves only noble ends.

Leaders should be generous; personal sacrifice for the many inspires deep loyalty. It’s a prime time for philanthropy and reforms. Inwardly, break indulgent habits and strengthen goodness, meaning, and foresight; self-discipline unlocks higher patterns of behavior.`,
    footnote:
      "Unchanging Increase calls for refined perception and sustained generosity. One effort won’t do; prove your commitment in everyday life to secure lasting success.",
    upper: "XUN",
    lower: "ZHEN",
    lines: {
      1: "Bottom line: You have the force for a great work—succeed if the aim is just and benefits others.",
      2: "Second line: Open to pure aims, you prosper—keep life’s structure steady; avoid haste and overconfidence.",
      3: "Third line: Seeking benefit amid misfortune—hold to principle; not blameworthy.",
      4: "Fourth line: Mediate between above and below; argue reasonably for all sides—your counsel carries far.",
      5: "Fifth line: True beneficence without thought of gain earns recognition.",
      6: "Top line: Though you seem resourced to help, you are out of step with the time; influence falls and attacks come—misfortune.",
    },
  },

  // 43 — Guai / Breakthrough (Decision)
  {
    key: "guai43",
    id: 43,
    name: "Guai – Breakthrough (Decision)",
    judgment:
      "Breakthrough. In the king’s court, frankness about the facts is dangerous. When the chief addresses the city, it is not good to bear arms. Favorable to undertake something.",
    comment: `Overcome harmful forces without violence—deny them by affirming your resolve in the open, before friends and community. No compromise. Act serenely and confidently; optimism confers advantage. Tell the truth publicly, yet without aggression.

Declare your constructive intent in relationships; it strengthens bonds. But purge the same flaws within—truth must reach the self. Clean motives, renew resources and exchange, then proceed.`,
    footnote:
      "Unchanging Breakthrough: the struggle is within. State your decision to drop old views and move forward with clear, steady advance.",
    upper: "DUI",
    lower: "QIAN",
    lines: {
      1: "Bottom line: The start is perilous—rethink; a single mistake is costly.",
      2: "Second line: Cultivate constant alertness and inner strength—walk as if in danger; awareness conquers all.",
      3: "Third line: Though supported, the fight is yours alone. Bend briefly to pass through; initial misunderstanding, no blame in the end.",
      4: "Fourth line: Obstacles stack up; you cannot halt. If you’d cede command, problems would ease—but you won’t.",
      5: "Fifth line: To uproot opposition, decide greatly and be unmoved; if not cut to the root it returns. Success through perfect calm.",
      6: "Top line: A speck of inner error—vanity or self-deception—strikes when you relax in resolve; misfortune.",
    },
  },

  // 44 — Gou / Coming to Meet (Temptation)
  {
    key: "gou44",
    id: 44,
    name: "Gou – Coming to Meet (Temptation)",
    judgment:
      "Coming to Meet. The woman is powerful. The man should not marry such a woman.",
    comment: `A seemingly trivial encounter holds danger; attention feeds it. Do not lend force to inferior influences.

In politics and business, refuse shady people and flimsy schemes—speak plainly against them. In intimacy, new ties likely reveal unworthy patterns; avoid binding yourself. Within, confront newborn indulgences—the hardest temptations are internal; discipline passing contacts with weakness.`,
    footnote:
      "Unchanging Coming to Meet: the dynamic meeting of opposites can be fruitful if conduct stays upright and balanced—it may herald renewal or sudden insight.",
    upper: "QIAN",
    lower: "XUN",
    lines: {
      1: "Bottom line: You can restrain the inferior at the outset—act now; ignoring it lets it grow.",
      2: "Second line: Watch the weak points; keep them from exposure or you lose the thread.",
      3: "Third line: Temptation beckons but is blocked; resolve the inner conflict by reflection—avoid error.",
      4: "Fourth line: Don’t grow aloof from the lowly—tomorrow you may need them. If you disconnect now, misfortune.",
      5: "Fifth line: The noble attains aims by inner correctness and quiet strength, aligned with the Way.",
      6: "Top line: Publicly spurning the unworthy won’t make it leave—and looks vain. Better a quiet withdrawal; no blame to your intent.",
    },
  },

  // 45 — Cui / Gathering (Assembling)
  {
    key: "cuei45",
    id: 45,
    name: "Cui – Gathering Together",
    judgment:
      "Gathering. Success. The king approaches his temple. It is well to see the great person. Perseverance brings reward. Great offerings bring good fortune. Favorable to undertake something.",
    comment: `A group forms around a center—leader and/or shared goal. Find and align with that center; loyalty and unity are vital, factions weaken all. Keep aims honorable and trust in leadership; approach authority—success follows. Sacrifice for the whole may be asked; ensure your heart is steadfast.

Strengthen close bonds; assess their quality. Self-observation within the group expands awareness. The self too has a unifying core—when you follow it, you feel confidence and health; when not, conflict and malaise arise.`,
    footnote:
      "Unchanging Gathering: your aims and growth are tied to the collective—join shared rites and works; seek a worthy leader and pledge support.",
    upper: "DUI",
    lower: "KUN",
    lines: {
      1: "Bottom line: Half-joining breeds indecision; go to the center and seek the leader—ask and you’ll receive help.",
      2: "Second line: You feel a mysterious pull to people or ventures not in your plan—follow it; larger forces favor you.",
      3: "Third line: The group closes ranks; another attempt shames you. If determined, ally with an influential member.",
      4: "Fourth line: You join others to serve a higher aim; such sacrifice brings personal success.",
      5: "Fifth line: Central figure draws people—keep proving virtue to earn their trust and achieve your ends.",
      6: "Top line: Unity is refused; motives misread. Turn inward to the cause of discord; inner alignment makes union possible later.",
    },
  },
  // 46 — Sheng / Pushing Upward
  {
    key: "sheng46",
    id: 46,
    name: "Sheng – Pushing Upward",
    judgment:
      "Pushing Upward. Supreme success. See the great person to remove anxiety. Moving south brings good fortune.",
    comment: `A rise in strength and standing comes from steady modest effort aligned with favorable currents. Approach authority confidently; keep acting—resting on laurels wastes the tide. Promotions and social ascent are likely; join projects and see them through. In love, bonds deepen; in self-work, will and discipline anchor the climb.`,
    footnote:
      "Unchanging Pushing Upward: reach the goal through long, diligent effort—no single leap; build the broad base and ascend step by step.",
    upper: "KUN",
    lower: "XUN",
    lines: {
      1: "Bottom: Though low in rank, you’re attuned upward—advance through diligent work. Good fortune.",
      2: "Second: With modest means you still reach the goal; sincerity wins support above.",
      3: "Third: Progress comes too easily—doubts arise; be cautious without stalling.",
      4: "Fourth: Ascent accelerates; ambitions achievable—hold to principles and tradition.",
      5: "Fifth: Destiny is stepwise advance; don’t be drunk on heights—be thorough.",
      6: "Top: Rising without review turns blind and rash; only strict self-control averts misfortune.",
    },
  },

  // 47 — Kun / Oppression (Exhaustion)
  {
    key: "kun47",
    id: 47,
    name: "Kun – Oppression (Exhaustion)",
    judgment:
      "Oppression. Success. Perseverance. The great person brings good fortune, no blame. Words are not believed.",
    comment: `After ascent comes constriction. Keep emotional steadiness, act not talk—deeds persuade where words fail. In work and politics, push like a tree in tight space: unwavering will seeks light. Relationships endure only with full mutual commitment. Turn inward; inner strength and health can grow under pressure if you reject cynicism.`,
    footnote:
      "Unchanging Oppression: you are pressed past limits and not believed; little can change outwardly—only inner strength sustains. Decide if it’s worth the strain.",
    upper: "DUI",
    lower: "KAN",
    lines: {
      1: "Bottom: You’re slipping into a trap of misfortune—break the discouragement now.",
      2: "Second: Stagnation from indulgence—devote yourself to meaningful, altruistic work.",
      3: "Third: You chose a crushed position; trusted what can’t support you—bad luck.",
      4: "Fourth: The post hinders; temptations divert—shame, yet you still reach the goal.",
      5: "Fifth: Bureaucracy blocks flow; help denied—stay calm until the turn.",
      6: "Top: Don’t let recent hardship poison the future; drop cynicism and things improve. Good fortune.",
    },
  },

  // 48 — Jing / The Well
  {
    key: "ching48",
    id: 48,
    name: "Jing – The Well (Source)",
    judgment:
      "The Well. A city may be moved, not the well. Its water neither rises nor falls; but often the rope is short or the jar breaks before the water—misfortune.",
    comment: `The Well is humanity’s abiding source. Leaders must feel the people’s heart or misfortune follows. In society and close ties, look into the human root, not appearances; generalizations mislead. Draw from the deep truth and apply it, or the jar breaks and none are served.`,
    footnote:
      "Unchanging Well: cooperation is needed; study the human nature relevant to the situation and apply insight to organize and execute your plan.",
    upper: "KAN",
    lower: "XUN",
    lines: {
      1: "Bottom: Self-reliance without exchange isolates—you’re forgotten.",
      2: "Second: Talents go unseen and unused; when needed, you cannot function.",
      3: "Third: A missed or ignored chance—unfortunate; timely recognition would benefit all.",
      4: "Fourth: Withdraw and reconfigure aims; active service must wait—later you return.",
      5: "Fifth: Deep wisdom and leadership potential—apply it to daily life to keep growing.",
      6: "Top: Fulness arrives through counseling and nourishing others—lofty good fortune.",
    },
  },

  // 49 — Ge / Revolution (Molting)
  {
    key: "go49",
    id: 49,
    name: "Ge – Revolution (Change)",
    judgment:
      "Revolution. People will not believe it until it is finished. Supreme success. Perseverance on the right path; regret vanishes.",
    comment: `Forces conflict and open the way for change. Confirm necessity, sense the mood, and commit wholly. Change should be prepared, stepwise, timely, and righteous. Act at first signs of decay; once results appear, trust gathers. Relationships may need a radical reset toward a shared future. Outer life will align with the inner transformation—persist.`,
    footnote:
      "Unchanging Revolution: something must change now. Read collective moods to gauge your mandate and the support available.",
    upper: "DUI",
    lower: "LI",
    lines: {
      1: "Bottom: Restrain yourself; timing unclear—wait and verify.",
      2: "Second: The moment is ripe—hold clear vision and full commitment; support arrives.",
      3: "Third: Rushing risks danger; delaying invites misfortune—use openness and self-control, act when effects are understood.",
      4: "Fourth: On the threshold—if rightly placed and responsible, great fortune.",
      5: "Fifth: Spontaneous support surrounds you—trust intuition and lead the change.",
      6: "Top: Aim achieved; settle details. Accept limits, stabilize life—seek sufficiency, not perfection.",
    },
  },

  // 50 — Ding / The Cauldron (Cosmic Order)
  {
    key: "ding50",
    id: 50,
    name: "Ding – The Cauldron (Cosmic Order)",
    judgment: "The Cauldron. Sublime good fortune. Success.",
    comment: `When personal development aligns with cosmic needs, order prevails and great works succeed. Leaders decide wisely; markets reward fit offerings; sacrifices pay off. Bonds can transcend the private and uplift the community. Accept fate’s contours to conserve strength; align strategy with larger energies—the Way carries you, like yielding to an opponent’s force in martial arts.`,
    footnote:
      "Unchanging Cauldron: you and your close circle prosper—your whole milieu is moving in step with the cosmos.",
    upper: "LI",
    lower: "XUN",
    lines: {
      1: "Bottom: A worthy aim may require unusual means—begin anew with different methods; lack of experience is no fault.",
      2: "Second: Solitary focus draws envy, but it doesn’t hinder you. Good fortune.",
      3: "Third: Special talents unused due to wrong mindset—restore confidence and things improve.",
      4: "Fourth: Lacking capacity for the envisioned goal—continuing leads to ruin; reassess.",
      5: "Fifth: Humble receptivity on high brings deeper insight—keep expanding awareness.",
      6: "Top: A climate of clarity and elevation—advanced inner development benefits all.",
    },
  },
  // 51 — Zhen / Shock (Thunder)
  {
    key: "jen51",
    id: 51,
    name: "Zhen – Shock (Thunder)",
    judgment:
      "Shock brings success! Thunder comes with terrifying crash, yet joy and glad words follow. The shock spreads a hundred miles; the libation is not spilled.",
    comment: `Pent-up kinetic force breaks loose like spring thunder. Let awe and sobriety guide your first response—then good fortune. The jolt reconnects you to your true nature; calm poise under shock earns respect and leadership. Keep life in order; unfinished business magnifies turmoil. If thunder moves you to renew habits, ties, and self, it benefits you.`,
    footnote:
      "Unchanging Shock: expect repeated jolts—only accepting the sudden strikes and changing intent at the root ends the cycle.",
    upper: "ZHEN",
    lower: "ZHEN",
    lines: {
      1: "Bottom: A sudden fright; you pass through fear’s stages—relief follows; good outcome.",
      2: "Second: Losses from the shock—don’t fight; withdraw and be unavailable; in time you recover.",
      3: "Third: Outer blow tests inner strength—stay composed and do what’s essential to blunt danger.",
      4: "Fourth: Stunned and frozen—confusion and unpreparedness block progress.",
      5: "Fifth: Shocks keep coming; adapt actively while staying centered within.",
      6: "Top: Society itself shaken; you can’t set it right alone. Withdraw—even if criticized.",
    },
  },

  // 52 — Gen / Keeping Still (Mountain)
  {
    key: "gen52",
    id: 52,
    name: "Gen – Keeping Still (Meditation)",
    judgment:
      "Keeping Still. When the back is so still one no longer feels the body, one enters the courtyard and does not see the people. No blame.",
    comment: `Turn inward and hold the mind to the matter at hand. Stillness here is a state, not an act. When the ego quiets, turmoil subsides; clarity reveals right timing and right action. In work and ties, silence prevents impulsive errors; measured words follow balance. True relaxation restores body and spirit—stop the wandering mind.`,
    footnote:
      "Unchanging Keeping Still: the future of this matter cannot be planned—thinking ahead only agitates you.",
    upper: "GEN",
    lower: "GEN",
    lines: {
      1: "Bottom: At the start you see things as they are; motives are unselfish—keep this and advance.",
      2: "Second: Events you set in motion now sweep you along—wanting to pause breeds discontent.",
      3: "Third: Forcing stillness on restless desires creates inner conflict and danger—seek calm through practice.",
      4: "Fourth: You command the field of awareness; transcend ego impulses to realize true meditation.",
      5: "Fifth: Once balanced, speech becomes careful; rash words and guilt fade.",
      6: "Top: When peace pervades every facet of life, understanding dawns—great good fortune.",
    },
  },

  // 53 — Jian / Gradual Progress (Development)
  {
    key: "chien53",
    id: 53,
    name: "Jian – Gradual Progress (Development)",
    judgment:
      "Development. The maiden’s marriage brings good fortune. Perseverance furthers.",
    comment: `Progress must be gradual, natural, and traditional—no revolutions now. Patient cultivation, adaptability, and steady virtue bring success. Politics and business favor incremental reform and consensus, not coups. In relationships, courtship ripens to commitment; nourish the bond slowly. Align inner vision with outer custom; no shortcuts exist.`,
    footnote:
      "Unchanging Development: slow but sure growth toward your aim via well-trodden paths; requires perseverance and principled steadiness.",
    upper: "XUN",
    lower: "GEN",
    lines: {
      1: "Bottom: A beginner invites criticism; use it to refine skill—the base of future success.",
      2: "Second: Secure footing—share your safety and good fortune.",
      3: "Third: A vain, forceful move endangers you and yours—protect what you have and let things ripen.",
      4: "Fourth: Be flexible—pause, yield, or step aside for now to preserve position for later gains.",
      5: "Fifth: With rising status come slanders and misreadings; isolation stalls you—communication returns; good fortune.",
      6: "Top: At the summit you embody success; others look to you—great good fortune.",
    },
  },

  // 54 — Guimei / The Marrying Maiden
  {
    key: "gueimei54",
    id: 54,
    name: "Guimei – The Marrying Maiden",
    judgment:
      "The Marrying Maiden. Undertakings bring misfortune. Nothing is favorable.",
    comment: `Power dynamics are skewed—you depend on the situation more than it on you. Pushy initiative backfires; act as subordinate: respectful, passive, cautious. In work, fix early errors quietly; do only your charge. In politics, fade to the background and guard inner clarity. In love, you aren’t taken seriously; don’t force talks—endure, plan long-term, and keep to constants.`,
    footnote:
      "Unchanging Marrying Maiden: your chosen path loops back to its start; you won’t transcend the role—return to the origin if you seek change.",
    upper: "ZHEN",
    lower: "DUI",
    lines: {
      1: "Bottom: Low status but protected by a superior—humble deference secures footing and influence.",
      2: "Second: Discouraging scene—carry through the original intent; devotion brings success.",
      3: "Third: To get your wish you’d compromise principles.",
      4: "Fourth: Refrain until a better time; the world passes as you wait—perseverance pays.",
      5: "Fifth: Lay aside rank and serve—good fortune; transcend vanity and display.",
      6: "Top: Are you acting for form’s sake? Emptiness yields nothing.",
    },
  },

  // 55 — Feng / Abundance
  {
    key: "feng55",
    id: 55,
    name: "Feng – Abundance",
    judgment:
      "Abundance. Success! The king achieves fullness. Do not mourn—be like the sun at noon.",
    comment: `Zenith moment—full moon, longest day, peak success. Abundance is brief; don’t cling. Convert today’s gains into tomorrow’s foundation; widen participation to extend the season. Social standing is high; your image will carry you through the ebb. In love, express feelings openly and set clear expectations. Inner abundance is a summit of awareness—move quickly; decline follows.`,
    footnote:
      "Unchanging Abundance: choose carefully amid plenty; pare attachments and desires so growth can continue beyond the peak.",
    upper: "ZHEN",
    lower: "LI",
    lines: {
      1: "Bottom: Join with an aligned partner and energy surges—stay together until the work is done.",
      2: "Second: Barriers not of your making; a bold push breeds envy—only sincere truthfulness improves position.",
      3: "Third: Disorder at its height—be patient.",
      4: "Fourth: Though less than ideal, contact with right principles brings success—enthusiasm guided by wisdom.",
      5: "Fifth: Seek advice from the most capable—humility yields unexpected fortune.",
      6: "Top: Vanity from excess isolates you—you’ve already lost the greatest treasure.",
    },
  },
  // 56 — Lü / The Wanderer (Traveler)
  {
    key: "li56",
    id: 56,
    name: "Lü – The Wanderer (Traveler)",
    judgment:
      "The Wanderer. Success in small matters. Perseverance regarding the journey brings good fortune.",
    comment: `Earth holds many communities—each with history, customs, freedoms, limits. The traveler touches all yet roots in none. Travel is a state of mind as much as movement; courtesy and fitting in with local ways are crucial. In this situation you are passing through—sample, learn, and move on. Keep aims modest, conduct polite, and avoid decadent circles. Without the shelter of rank or custom, be helpful, quiet, and principled. In ties, don’t make long pledges; listen more than you assert. If this is an inner journey of new ideas or roles, hold fast to your core principles—they are your lighthouse in unfamiliar seas.`,
    footnote:
      "Unchanging Wanderer: moss is growing under your feet—recognize the moment to move on once your resources and creative fire are spent; tarry too long and the flame goes out.",
    upper: "LI",
    lower: "GEN",
    lines: {
      1: "Bottom: Do not abase yourself or flirt with triviality—self-humbling invites ridicule.",
      2: "Second: Poised confidence and self-restraint attract allies; the gravity of your principles draws help.",
      3: "Third: Meddling beyond your brief and indulging offense loses what security you have; loyal supporters withdraw.",
      4: "Fourth: Ever en route—uneasy between safeguarding gains and pressing onward.",
      5: "Fifth: You may need to put down roots in a new land; begin with modesty and generosity—acceptance and office follow.",
      6: "Top: Lost in drama and details unrelated to principle, you stray from the path—misfortune.",
    },
  },

  // 57 — Xun / The Gentle (Penetrating Wind)
  {
    key: "sun57",
    id: 57,
    name: "Xun – The Gentle, Penetrating",
    judgment:
      "Gentle penetration. Success in small matters. Favorable to have a goal and to visit the great person.",
    comment: `Like wind shaping cliffs and trees, influence here must be steady, subtle, and persistent. Force triggers backlash; let soft continuity do the work. Immerse in the group’s spirit and align to its ideal; over time your influence takes root. In love and health, patience and long devotion prevail. Keep your aim ever before you; sustained focus separates real possibilities from imagined ones.`,
    footnote:
      "Unchanging Gentle: allow the matter to work upon you; by deliberate yielding to time and conditions, clarity arises and the real scope becomes visible.",
    upper: "XUN",
    lower: "XUN",
    lines: {
      1: "Bottom: Wandering, undecided, undisciplined—no influence. Decide and hold to it.",
      2: "Second: Hidden motives and biases lie at the base—bring them to light and deal with them; the goal is near.",
      3: "Third: Delay and daydreaming waste initiative—loss of face follows.",
      4: "Fourth: Energetic action works; meet the obstacle modestly yet confidently and needs are met.",
      5: "Fifth: Be especially alert and careful; early problems yield, but review results periodically.",
      6: "Top: Chasing every option spent the power to act; knowledge without decision changes nothing—ill effects now unfold.",
    },
  },

  // 58 — Dui / Joy (Opening, Persuasion)
  {
    key: "duei58",
    id: 58,
    name: "Dui – Joy, Encouragement",
    judgment: "Joy. Success! Perseverance in the right brings reward.",
    comment: `Now you achieve aims by encouraging others. True encouragement springs from faith in truth, expressed with kindness that builds trust and cooperation—never frothy euphoria. Lead by inspiration, not fear. In public life, warmth and generosity awaken loyalty; followers gladly shoulder hardship for worthy goals if the leader stays firm and just. In relationships, converse deeply; test ideals openly and seek the thread of truth through all things.`,
    footnote:
      "Unchanging Joy: lasting success depends on relationships—pursue aims in an atmosphere of goodwill; selfish agendas end in defeat.",
    upper: "DUI",
    lower: "DUI",
    lines: {
      1: "Bottom: Joy from certainty of right intent—no need to lean on circumstance.",
      2: "Second: Upright conduct frees you from trivial temptations—and from the regret of casting pearls before swine.",
      3: "Third: Overindulgence brings only brief thrill, then misfortune; real joy rises from within.",
      4: "Fourth: Torn between higher and lower pleasures—recognize the fault and choose the higher; great good fortune.",
      5: "Fifth: Consider ties with the unworthy—decline them; such pacts endanger you.",
      6: "Top: Absorbed by externals, your joy is at the world’s mercy; others steer your fate.",
    },
  },

  // 59 — Huan / Dispersion (Dissolution, Reunion)
  {
    key: "huan59",
    id: 59,
    name: "Huan – Dispersion, Reunion",
    judgment:
      "Dispersion. Success. The king approaches the temple. Favorable to cross the great water. Perseverance furthers.",
    comment: `This is the rare societal moment when factional chill melts into shared purpose. Leave isolation; re-enter the stream and dedicate yourself to a work that gathers people. Artists and makers: avoid elitism—speak to the whole people; weave shared symbols and rhythms that reunite them with reality. In family, renew rites, traditions, and gatherings to restore roots. Spiritually, refresh faith and rejoin your deepest source.`,
    footnote:
      "Unchanging Dispersion: ongoing isolation from your true roots—no clear grasp of the question; seek the source within and see the whole before proceeding.",
    upper: "XUN",
    lower: "KAN",
    lines: {
      1: "Bottom: You see the seed of division at its birth—best fortune, for reunification is then easiest.",
      2: "Second: The issue is within; correct your stance toward people to regain inner peace.",
      3: "Third: The task is vast—set aside self-interest; serving a common aim strengthens you—no regret.",
      4: "Fourth: End discord by committing to far-reaching ideals and the common good—marked success.",
      5: "Fifth: In disunity, speak your vision publicly to gather people back from ruinous ideas.",
      6: "Top: Avoid danger for yourself and those in your care—withdraw completely if needed; none will blame you.",
    },
  },

  // 60 — Jie / Limitation
  {
    key: "jie60",
    id: 60,
    name: "Jie – Limitation",
    judgment: "Limitation. Success! Prolonged harsh constraint leads to error.",
    comment: `Civilization endures by regulating production and consumption within nature’s bounds—limits give life shape. Now practice thrift: limit spending of money, energy, and emotion; avoid extremes and grand reforms. Set clear rules and budgets—even if irksome, they alone fit the climate. In ties, avoid excess—set limits on attachment, not on acceptance. For creators, constraints sharpen power; impose form to focus force, but don’t let limits excuse laziness. Learn your true contours and work within them—too much restriction breeds anger and waste.`,
    footnote:
      "Unchanging Limitation: the matter awaits resolution; accept the given limits and act within them—once aligned with the right path, real progress follows.",
    upper: "KAN",
    lower: "DUI",
    lines: {
      1: "Bottom: Halt when the first barriers appear; accept limits, be still, and store strength.",
      2: "Second: Your moment approaches—begin in time or miss it; over-limiting is itself an error.",
      3: "Third: Waste and excess brought this plight; own it rather than blame—thus avoid misfortune.",
      4: "Fourth: Make limits a natural habit; adapt to conditions and stay within current scope—success.",
      5: "Fifth: Influence others by example—impose limits first on yourself; recognition and good fortune follow.",
      6: "Top: Over-restricting breeds anger and futility; yet a period of strict self-limit now prevents future errors.",
    },
  },
  // 61 — Zhong Fu / Inner Truth (Insight)
  {
    key: "jungfu61",
    id: 61,
    name: "Zhong Fu – Inner Truth (Insight)",
    judgment:
      "Inner Truth. Dolphins—good fortune! Favorable to cross the great water. Perseverance on the right path brings reward.",
    comment: `Auspicious achievements now come through insight. Trust your inner virtue, align with the larger currents, and let them reveal intent—like tai chi: yield to know where and how to apply minimal, decisive force. Empty preconception, receive fully, then return to yourself with direct understanding. Build ties on higher truths, not shallow pleasures; a few well-aimed words suffice where force would fail. Keep conduct scrupulous so illusion does not cloud insight; harmony with the whole is evident, whether you lead or choose a quiet life.`,
    footnote:
      "Unchanging Inner Truth: connection is missing; neither you nor the matter can affect the other until true resonance is established—work on that first.",
    upper: "XUN",
    lower: "DUI",
    lines: {
      1: "Bottom: Center on inner virtue and natural principles; seek no outer prop—good fortune.",
      2: "Second: A bright moment—your words and deeds echo widely; strong response comes.",
      3: "Third: Moods sway with events—exaltation or despair; perhaps you even relish the range.",
      4: "Fourth: Fix your gaze on a noble person/ideal; by aiming higher you may leave others behind—no fault.",
      5: "Fifth: The true leader—high aims, visible strength of character; others follow willingly. No regret.",
      6: "Top: Ambition outruns position; even calls for help lack weight—continuing thus brings misfortune and regret.",
    },
  },

  // 62 — Xiao Guo / Preponderance of the Small (Conscientiousness)
  {
    key: "hsiaoguo62",
    id: 62,
    name: "Xiao Guo – Preponderance of the Small (Conscientiousness)",
    judgment:
      "Preponderance of the Small. Success. Perseverance furthers. Small things may be done, not great.",
    comment: `Be exceptionally careful; timing and attention to detail are everything. This is no season for grand gestures—mind daily tasks, keep spending and speech modest, and favor established forms. In money matters be conservative; dazzling ventures are out of tune. In ties, follow social norms; simple sincerity opens doors. Pride and overreach invite an Icarus fall. Humility and dutiful craft win the day.`,
    footnote:
      "Unchanging Preponderance of the Small: maintain steady duty and simplicity; the time demands poise and restraint.",
    upper: "ZHEN",
    lower: "GEN",
    lines: {
      1: "Bottom: Unusual moves now are unsafe; tradition is your road—others lead to danger.",
      2: "Second: Secure position through worthy connections—yet cling to traditional methods.",
      3: "Third: Success tempts you to skip details—danger; act at once with precautions.",
      4: "Fourth: Do not rush or force; outwardly modest, inwardly steadfast.",
      5: "Fifth: Strength you have, position you lack—seek help respectfully from authority and succeed.",
      6: "Top: Ambitions are too large; pressing a unreal goal brings misfortune.",
    },
  },

  // 63 — Ji Ji / After Completion
  {
    key: "jiji63",
    id: 63,
    name: "Ji Ji – After Completion",
    judgment:
      "After Completion. Success in small matters. Perseverance furthers. Good fortune at first, disorder at the end.",
    comment: `Equilibrium attained—temptation to relax follows. After the peak comes decline: laxity, frayed bonds, creeping corruption. You cannot stop the cycle, but careful safeguards and gentle corrections help you pass through intact. Attend to details, avoid triumphalism, and refuse the illusion that the present ideal can be frozen in place. In work and politics, be vigilant: careers at zenith may dip, long projects be overtaken, yet foresight endures the swing and matures the spirit.`,
    footnote:
      "Unchanging After Completion: you’re in the calm eye of a storm—little influence either way; the less you try to push this, the less it pushes you.",
    upper: "KAN",
    lower: "LI",
    lines: {
      1: "Bottom: As plans advance, pressures grow; events you started now influence you—no harm if you remain correct.",
      2: "Second: Exposed on open ground; do nothing and don’t scramble—this passes.",
      3: "Third: A very ambitious plan is possible—but taxing; if truly worthy, proceed with only the ablest helpers.",
      4: "Fourth: The ground is unsound; watch your step.",
      5: "Fifth: Don’t flaunt success; find joy in simplicity—small efforts now yield more than displays of power.",
      6: "Top: You set great things in motion; do not sit back—neglect here is vain and dangerous.",
    },
  },

  // 64 — Wei Ji / Before Completion
  {
    key: "weiji64",
    id: 64,
    name: "Wei Ji – Before Completion",
    judgment:
      "Before Completion. Success. The little fox, almost across, wets its tail—nothing furthers.",
    comment: `Near the goal, but this stage is treacherous. Order can now be brought to chaos, yet haste ruins all. Like nearing a mountain summit, you see clearly what remains—but the descent beyond is unknown. Guard against impetuous finishing; caution and reserve protect you. Gather people wisely, fit needs within the whole, and accept that beyond the ‘finish’ lies a different landscape requiring fresh awareness.`,
    footnote:
      "Unchanging Before Completion: next steps aren’t clear—fear of the void after achievement may bind you. Endings are beginnings; don’t freeze at the threshold.",
    upper: "LI",
    lower: "KAN",
    lines: {
      1: "Bottom: Urge to impose order is strong, but time is not ripe; acting now brings trouble or shame.",
      2: "Second: You may know what to do, yet timing says wait; cultivate patience and strength until the opening appears.",
      3: "Third: Frustration springs from craving achievement beyond facts; better to restart with new allies than push into disillusion.",
      4: "Fourth: A principle-fight is inevitable; keep discipline—the struggle may last to the end. Later, good fortune.",
      5: "Fifth: Right resolve and principles prevail; an atmosphere for progress appears—great works now possible.",
      6: "Top: After strife comes renewal—celebrate, but avoid excess lest you lose the path and your confidence.",
    },
  },
];
