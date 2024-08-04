const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 9001;

const recipes = [
  {
    // mainFood
      id: 1,
      title: "بيتزا",
      ingredients: [
        "1 1/2 كوب دقيق",
        "1 كوب ماء دافئ",
        "2 ملعقة كبيرة زيت زيتون",
        "1 ملعقة كبيرة خميرة فورية",
        "1 ملعقة صغيرة سكر",
        "1/2 ملعقة صغيرة ملح",
        "1/2 كوب صلصة طماطم",
        "1 كوب جبن موزاريلا مبشور",
        "توبينغز (خضروات، لحوم، زيتون، حسب الرغبة)",
      ],
      instructions:
        "1. في وعاء كبير، اخلط الماء الدافئ مع السكر والخميرة، واتركه لمدة 10 دقائق حتى يتفاعل. \n2. أضف الزيت، الملح، والدقيق تدريجياً، واعجن حتى تحصل على عجينة ناعمة. \n3. ضع العجينة في وعاء مدهون بالزيت، غطها واتركها في مكان دافئ لمدة ساعة حتى يتضاعف حجمها. \n4. قم بفرد العجينة على سطح مرشوش بالدقيق، وضعها في صينية خبز. \n5. ادهن الصلصة على العجينة، ثم ضع الجبن والتوبينغز حسب الرغبة. \n6. اخبز في فرن محمى مسبقاً على 220 درجة مئوية لمدة 15-20 دقيقة حتى تصبح العجينة ذهبية والجبن ذائب.",
      
      category: "mainFood",
    },
    {
    id: 2,
    title: "كبسة",
    ingredients: [
      "2 كوب أرز بسمتي",
      "1 دجاجة مقطعة إلى أجزاء",
      "3 ملعقة كبيرة زيت نباتي",
      "1 بصلة كبيرة مفرومة",
      "4 فصوص ثوم مفروم",
      "2 حبة طماطم مفرومة",
      "1 ملعقة كبيرة معجون طماطم",
      "1 ملعقة صغيرة كركم",
      "1 ملعقة صغيرة كمون",
      "1 ملعقة صغيرة بهارات الكبسة",
      "1 ملعقة صغيرة قرفة",
      "1 ملعقة صغيرة فلفل أسود",
      "1 ملعقة صغيرة ملح",
      "2 ورقة غار",
      "3 حبات هيل",
      "4 حبات قرنفل",
      "1 عود قرفة",
      "4 كوب ماء",
      "1/2 كوب زبيب",
      "1/2 كوب لوز محمص",
      "1/2 كوب جزر مبشور (اختياري)",
    ],
    instructions:
      "1. في قدر كبير، سخن الزيت على نار متوسطة. أضف البصل المفروم وقلّب حتى يصبح شفافاً. أضف الثوم وقلّب لعدة ثوانٍ. أضف قطع الدجاج وقلّب حتى تتحمر من جميع الجهات. أضف الطماطم المفرومة ومعجون الطماطم واستمر في التقليب حتى تتبخر السوائل. \n2. أضف الكركم، الكمون، بهارات الكبسة، القرفة، الفلفل الأسود، والملح. اخلط جيداً حتى تتوزع التوابل على الدجاج. \n3. أضف الماء إلى القدر، ثم أضف ورق الغار، الهيل، القرنفل، وعود القرفة. اترك الخليط يغلي، ثم خفف الحرارة وغطّ القدر، واتركه ينضج حتى ينضج الدجاج تماماً (حوالي 30-40 دقيقة). \n4. اغسل الأرز جيداً وانقعه في الماء لمدة 30 دقيقة، ثم صفيه. أضف الأرز إلى قدر الدجاج، وتأكد من أن الماء يغمر الأرز. قم بتغطيته واتركه على نار هادئة حتى ينضج الأرز تماماً (حوالي 20-25 دقيقة). \n5. في مقلاة صغيرة، قم بتحميص الزبيب واللوز في قليل من الزيت حتى يصبح لونها ذهبياً. أضف الزبيب واللوز إلى الكبسة في النهاية وقلّب بلطف.",
   
    category: "mainFood",
  },
  {
    id: 3,
    title: "سمك مشوي",
    ingredients: [
      "1 كيلو سمك كامل (مثل البلطي أو الباسا)",
      "2 ملعقة كبيرة زيت زيتون",
      "1 ملعقة صغيرة فلفل أسود",
      "1 ملعقة صغيرة ملح",
      "1 ملعقة صغيرة بابريكا",
      "2 فصوص ثوم مفروم",
      "عصير ليمونة واحدة",
      "1 ملعقة صغيرة زعتر",
    ],
    instructions:
      "1. سخن الفرن إلى 200 درجة مئوية. \n2. اخلط زيت الزيتون، الفلفل الأسود، الملح، البابريكا، الثوم، عصير الليمون، والزعتر في وعاء صغير. \n3. افرك السمك بالخليط وضعه في صينية خبز. \n4. اشوي السمك في الفرن لمدة 20-25 دقيقة حتى ينضج.",
   
    category: "mainFood",
  },

  {
    id: 4,
    title: "شاورما",
    ingredients: [
      "1 كيلو صدور دجاج مقطعة شرائح",
      "1 كوب لبن زبادي",
      "2 ملعقة كبيرة معجون طماطم",
      "1 ملعقة كبيرة زيت زيتون",
      "1 ملعقة صغيرة ملح",
      "1 ملعقة صغيرة فلفل أسود",
      "1 ملعقة صغيرة كركم",
      "1 ملعقة صغيرة كمون",
      "1 ملعقة صغيرة بهارات شاورما",
      "4 فصوص ثوم مفروم",
      "1 حبة ليمون (عصير)",
      "4 أرغفة خبز عربي",
      "خضروات مفرومة (طماطم، خيار، بصل، خس)",
    ],
    instructions:
      "1. في وعاء كبير، اخلط اللبن الزبادي، معجون الطماطم، زيت الزيتون، الملح، الفلفل الأسود، الكركم، الكمون، بهارات الشاورما، الثوم، وعصير الليمون. \n2. أضف شرائح الدجاج إلى التتبيلة، واتركها في الثلاجة لمدة 2 ساعة على الأقل (من الأفضل طوال الليل). \n3. سخن مقلاة على نار متوسطة، ثم أضف الدجاج المتبل وقلّب حتى يتحمر وينضج تماماً. \n4. قطع الدجاج إلى شرائح رفيعة وقدمه داخل الخبز العربي مع الخضروات المفرومة.",
    
    category: "mainFood",
  },

 
  {
    id: 5,
    title: "برجر",
    ingredients: [
      "500 جرام لحم بقر مفروم",
      "1 بصلة مفرومة ناعماً",
      "2 فصوص ثوم مفروم",
      "1 ملعقة صغيرة ملح",
      "1 ملعقة صغيرة فلفل أسود",
      "1 ملعقة صغيرة بابريكا",
      "1 ملعقة صغيرة بهارات بورجر",
      "4 أرغفة خبز بورجر",
      "خضروات للتقديم (خس، طماطم، بصل، مخلل)",
      "صلصة (مايونيز، كاتشب، خردل)",
    ],
    instructions:
      "1. في وعاء كبير، اخلط اللحم المفروم مع البصل، الثوم، الملح، الفلفل، البابريكا، وبهارات البورجر. \n2. قسم المزيج إلى كرات صغيرة، ثم شكلها إلى أقراص بورجر. \n3. سخن مقلاة على نار متوسطة، ثم اشوي أقراص البورجر حتى تنضج تماماً. \n4. قدم أقراص البورجر داخل الخبز مع الخضروات والصلصات حسب الرغبة.",
   
    category: "mainFood",
  },
  {
    id: 6,
    title: "سوشي",
    ingredients: [
      "2 كوب أرز سوشي",
      "2 1/2 كوب ماء",
      "1/2 كوب خل الأرز",
      "1/4 كوب سكر",
      "1 ملعقة صغيرة ملح",
      "نوري (أوراق الأعشاب البحرية)",
      "حشوات (سمك نيء، خضروات، أفوكادو، حسب الرغبة)",
    ],
    instructions:
      "1. اغسل الأرز جيداً حتى يصبح الماء صافي. \n2. في قدر، اخلط الأرز مع الماء، واتركه يغلي. خفف الحرارة، وغط القدر، واترك الأرز ينضج لمدة 15-20 دقيقة. \n3. في وعاء صغير، اخلط خل الأرز، السكر، والملح حتى يذوب السكر. \n4. بعد نضج الأرز، أضف خليط الخل إلى الأرز واخلط بلطف. \n5. ضع ورقة نوري على سطح عمل، ثم ضع طبقة من الأرز عليها، وأضف الحشوات. \n6. لف النوري بإحكام باستخدام حصيرة السوشي، ثم قطعه إلى شرائح.",
    
    category: "mainFood",
  },
  {
    id: 7,
    title: "تاكو",
    ingredients: [
      "8 قطع تورتيلا ذرة",
      "500 جرام لحم مفروم",
      "1 بصلة مفرومة",
      "2 فصوص ثوم مفروم",
      "1 ملعقة صغيرة كمون",
      "1 ملعقة صغيرة بابريكا",
      "1 ملعقة صغيرة ملح",
      "1/2 كوب صلصة تاكو",
      "خضروات (طماطم، خس، بصل، جبن مبشور)",
    ],
    instructions:
      "1. في مقلاة على نار متوسطة، سخن الزيت وأضف البصل والثوم، ثم قلّب حتى يصبح البصل شفافاً. \n2. أضف اللحم المفروم واطبخه حتى يتحمر. \n3. أضف الكمون، البابريكا، الملح، وصلصة التاكو. \n4. اطبخ المزيج حتى تتجانس النكهات. \n5. سخن التورتيلا في مقلاة ساخنة. \n6. ضع خليط اللحم في التورتيلا وأضف الخضروات والجبن حسب الرغبة.",
   
    category: "mainFood",
  },

  {
    id: 8,
    title: "روبيان",
    ingredients: [
      "500 جرام روبيان مقشر",
      "2 ملعقة كبيرة زيت زيتون",
      "4 فصوص ثوم مفروم",
      "1 ملعقة صغيرة فلفل أسود",
      "1 ملعقة صغيرة ملح",
      "عصير ليمونة واحدة",
      "1 ملعقة صغيرة بابريكا",
    ],
    instructions:
      "1. في مقلاة، سخن زيت الزيتون على نار متوسطة. \n2. أضف الثوم وقلّب لعدة ثوانٍ حتى يصبح لونه ذهبياً. \n3. أضف الروبيان، الفلفل الأسود، الملح، وعصير الليمون. \n4. اطبخ الروبيان حتى ينضج ويصبح وردياً (حوالي 3-4 دقائق لكل جانب). \n5. قدم الروبيان مع الليمون الإضافي.",
    
    category: "mainFood",
  },
  //Sweets
  
    {
      "id": 9,
      "title": "كيك الشوكولاتة",
      "ingredients": [
        "1 3/4 كوب دقيق",
        "1 1/2 كوب سكر",
        "3/4 كوب كاكاو",
        "1 1/2 ملعقة صغيرة بيكنج بودر",
        "1 1/2 ملعقة صغيرة بيكربونات الصودا",
        "1/2 ملعقة صغيرة ملح",
        "2 بيض",
        "1 كوب حليب",
        "1/2 كوب زبدة",
        "2 ملعقة صغيرة فانيليا"
      ],
      "instructions": "1. سخن الفرن إلى 180 درجة مئوية. \n2. اخلط الدقيق، السكر، الكاكاو، البيكنج بودر، البيكربونات، والملح في وعاء كبير. \n3. أضف البيض، الحليب، الزبدة، والفانيليا واخلط حتى تتجانس المكونات. \n4. صب الخليط في صينية خبز واتركه في الفرن لمدة 30-35 دقيقة. \n5. دع الكيك يبرد قبل التقديم.",
      "category": "dessert"
    },
    {
      "id": 10,
      "title": "براونيز الشوكولاتة",
      "ingredients": [
        "1/2 كوب زبدة",
        "1 كوب سكر",
        "1/2 كوب كاكاو",
        "2 بيض",
        "1/2 كوب دقيق",
        "1/4 ملعقة صغيرة ملح",
        "1/2 ملعقة صغيرة فانيليا",
        "1/2 كوب جوز (اختياري)"
      ],
      "instructions": "1. سخن الفرن إلى 175 درجة مئوية. \n2. اذب الزبدة ثم اخلطها مع السكر والكاكاو. \n3. أضف البيض والفانيليا وامزج جيداً. \n4. أضف الدقيق والملح والجوز إذا كنت تستخدمه. \n5. صب الخليط في صينية خبز واطبخه لمدة 25-30 دقيقة. \n6. دع البراونيز يبرد قبل التقطيع.",
      "category": "dessert"
    },
    {
      "id": 11,
      "title": "المهلبية",
      "ingredients": [
        "4 أكواب حليب",
        "1/2 كوب سكر",
        "1/4 كوب نشاء",
        "1 ملعقة صغيرة فانيليا"
      ],
      "instructions": "1. اخلط الحليب مع السكر والنشاء في قدر على النار. \n2. حرك المزيج حتى يغلي ويصبح كثيفاً. \n3. أضف الفانيليا وامزج جيداً. \n4. صب المهلبية في أكواب واتركها تبرد وتتماسك قبل التقديم.",
      "category": "dessert"
    },
    {
      "id": 12,
      "title": "الكوكيز بالشوكولاتة",
      "ingredients": [
        "1 1/4 كوب دقيق",
        "1/2 كوب سكر بني",
        "1/2 كوب زبدة",
        "1 بيض",
        "1/2 ملعقة صغيرة فانيليا",
        "1/2 ملعقة صغيرة صودا الخبز",
        "1/4 ملعقة صغيرة ملح",
        "1/2 كوب قطع شوكولاتة"
      ],
      "instructions": "1. سخن الفرن إلى 180 درجة مئوية. \n2. اخلط الزبدة مع السكر البني حتى تصبح خفيفة وكريمية. \n3. أضف البيض والفانيليا وامزج جيداً. \n4. اخلط الدقيق مع صودا الخبز والملح ثم أضفها إلى الخليط الرطب. \n5. أضف قطع الشوكولاتة وامزج جيداً. \n6. شكل الكوكيز وضعها على صينية خبز. \n7. اخبز لمدة 10-12 دقيقة. \n8. دعها تبرد قبل التقديم.",
      "category": "dessert"
    },
    {
      "id": 13,
      "title": "الآيس كريم بالفواكه",
      "ingredients": [
        "2 كوب فواكه مفضلة (مقطعة)",
        "1/2 كوب سكر",
        "1 ملعقة كبيرة عصير ليمون",
        "1 كوب كريمة"
      ],
      "instructions": "1. اخلط الفواكه مع السكر وعصير الليمون في الخلاط حتى تصبح ناعمة. \n2. أضف الكريمة إلى الخليط واخلط جيداً. \n3. صب الخليط في آلة الآيس كريم واتبع تعليمات الجهاز لتجميده.",
      "category": "dessert"
    },
    {
      "id": 14,
      "title": "القطايف",
      "ingredients": [
        "2 كوب دقيق",
        "1 ملعقة صغيرة خميرة",
        "2 ملعقة كبيرة سكر",
        "1/2 ملعقة صغيرة ملح",
        "1 1/2 كوب ماء",
        "حشوة (مثل المكسرات أو الجبنة)"
      ],
      "instructions": "1. اخلط الدقيق والخميرة والسكر والملح مع الماء حتى يتكون خليط سائل. \n2. اترك الخليط يرتاح حتى يتضاعف حجمه. \n3. سخن مقلاة على نار متوسطة وصب قليلاً من الخليط لتشكيل القطايف. \n4. اطبخها حتى تظهر الفقاعات على السطح ثم اقلبها لطهي الجانب الآخر. \n5. حشي القطايف بالحشوة المفضلة واطويها.",
      "category": "dessert"
    },
    // side food
      {
        "id": 15,
        "title": "سلطة البطاطس",
        "ingredients": [
          "4 حبات بطاطس مقطعة إلى مكعبات",
          "1/2 كوب مايونيز",
          "1/4 كوب زبادي",
          "1 ملعقة صغيرة خردل",
          "1 ملعقة صغيرة خل",
          "ملح وفلفل حسب الذوق",
          "1/4 كوب بصل أخضر مفروم",
          "1/4 كوب بقدونس مفروم"
        ],
        "instructions": "1. اغلي البطاطس في ماء مملح حتى تنضج، ثم صفيها واتركيها تبرد. \n2. في وعاء، اخلط المايونيز، الزبادي، الخردل، والخل. \n3. أضف البطاطس المبردة إلى الصوص وامزج جيداً. \n4. أضف البصل الأخضر والبقدونس، وتبّل بالملح والفلفل حسب الذوق. \n5. قدّم السلطة باردة.",
        "category": "sideFood"
      },
      {
        "id": 16,
        "title": "الحمص بالطحينية",
        "ingredients": [
          "1 كوب حمص مطبوخ",
          "1/4 كوب طحينية",
          "2 ملعقة كبيرة عصير ليمون",
          "2 فصوص ثوم مفروم",
          "1/4 كوب ماء",
          "1/4 كوب زيت زيتون",
          "ملح وفلفل حسب الذوق",
          "بابريكا للتزيين (اختياري)"
        ],
        "instructions": "1. في خلاط، اخلط الحمص، الطحينية، عصير الليمون، الثوم، والماء حتى يصبح المزيج ناعماً. \n2. أضف زيت الزيتون وامزج مجدداً. \n3. تبل بالملح والفلفل حسب الذوق. \n4. قدم الحمص مع قليل من البابريكا على الوجه إذا رغبت.",
        "category": "sideFood"
      },
      {
        "id": 17,
        "title": "الخضار المشوية",
        "ingredients": [
          "1 حبة كوسا مقطعة إلى شرائح",
          "1 حبة باذنجان مقطعة إلى مكعبات",
          "1 حبة فلفل أحمر مقطع",
          "1 حبة فلفل أخضر مقطع",
          "1/4 كوب زيت زيتون",
          "1 ملعقة صغيرة زعتر",
          "1 ملعقة صغيرة روزماري",
          "ملح وفلفل حسب الذوق"
        ],
        "instructions": "1. سخن الفرن إلى 200 درجة مئوية. \n2. في وعاء كبير، اخلط الخضار مع زيت الزيتون والتوابل. \n3. وزع الخضار على صينية خبز واخبزها في الفرن لمدة 20-25 دقيقة حتى تصبح ذهبية ومقرمشة.",
        "category": "sideFood"
      },
      {
        "id": 18,
        "title": "الكولسلو",
        "ingredients": [
          "1 رأس كرنب مفروم",
          "2 جزر مبشور",
          "1/2 كوب مايونيز",
          "2 ملعقة كبيرة خل أبيض",
          "1 ملعقة صغيرة سكر",
          "ملح وفلفل حسب الذوق"
        ],
        "instructions": "1. في وعاء كبير، اخلط الكرنب والجزر. \n2. في وعاء صغير، اخلط المايونيز، الخل، السكر، الملح، والفلفل. \n3. صب الصوص فوق الخضار وامزج جيداً. \n4. اترك الكولسلو في الثلاجة لمدة ساعة على الأقل قبل التقديم.",
        "category": "sideFood"
      },
      {
        "id": 19,
        "title": "البطاطس المقلية",
        "ingredients": [
          "4 حبات بطاطس مقطعة إلى أصابع",
          "زيت للقلي",
          "ملح حسب الذوق",
          "فلفل أسود حسب الذوق"
        ],
        "instructions": "1. سخن الزيت في مقلاة عميقة على نار متوسطة. \n2. اغسل البطاطس وجففها جيداً. \n3. اقلي البطاطس في الزيت حتى تصبح ذهبية ومقرمشة. \n4. صفي البطاطس على مناديل ورقية لتصريف الزيت. \n5. تبل بالملح والفلفل حسب الذوق.",
        "category": "sideFood"
      },
      {
        "id": 20,
        "title": "الأرز البسمتي",
        "ingredients": [
          "1 كوب أرز بسمتي",
          "2 كوب ماء",
          "1 ملعقة كبيرة زيت",
          "1/2 ملعقة صغيرة ملح"
        ],
        "instructions": "1. اغسل الأرز جيداً تحت الماء البارد. \n2. في قدر، سخن الزيت ثم أضف الأرز وقلّب قليلاً. \n3. أضف الماء والملح واتركه يغلي. \n4. خفف النار، غطِ القدر واترك الأرز ينضج لمدة 15-20 دقيقة حتى يمتص الماء ويصبح طرياً.",
        "category": "sideFood"
      },
      //drinks
      
        {
          "id": 21,
          "title": "عصير الليمون النقي",
          "ingredients": [
            "4 حبات ليمون (عصيرهم)",
            "1/2 كوب سكر",
            "4 أكواب ماء",
            "ثلج حسب الرغبة",
            "شرائح ليمون للتزيين (اختياري)"
          ],
          "instructions": "1. في وعاء، اخلط عصير الليمون مع السكر حتى يذوب السكر تماماً. \n2. أضف الماء واخلط جيداً. \n3. قدم العصير على الثلج و زينه بشرائح الليمون إذا رغبت.",
          "category": "drinks"
        },
        {
          "id": 22,
          "title": "سموذي الفواكه",
          "ingredients": [
            "1 كوب فراولة مجمدة",
            "1 كوب موز مقطع",
            "1/2 كوب زبادي",
            "1/2 كوب عصير برتقال",
            "1 ملعقة كبيرة عسل"
          ],
          "instructions": "1. في خلاط، اخلط الفراولة، الموز، الزبادي، عصير البرتقال، والعسل حتى يصبح المزيج ناعماً. \n2. قدم السموذي مباشرة بعد التحضير.",
          "category": "drinks"
        },
        {
          "id": 23,
          "title": "موهيتو النعناع",
          "ingredients": [
            "1/2 كوب أوراق نعناع طازجة",
            "1/2 كوب سكر",
            "1/4 كوب عصير ليمون",
            "1 كوب ماء مكربن",
            "ثلج حسب الرغبة"
          ],
          "instructions": "1. في كأس، اخلط أوراق النعناع مع السكر حتى يطلق النعناع نكهته. \n2. أضف عصير الليمون وامزج جيداً. \n3. أضف الماء المكربن والثلج وامزج برفق. \n4. قدم الموهيتو فوراً.",
          "category": "drinks"
        },
        {
          "id": 24,
          "title": "عصير التفاح والقرفة",
          "ingredients": [
            "4 أكواب عصير تفاح",
            "1 عود قرفة",
            "1 ملعقة كبيرة عسل (اختياري)",
            "شرائح تفاح للتزيين (اختياري)"
          ],
          "instructions": "1. في قدر، سخن عصير التفاح مع عود القرفة حتى يبدأ في الغليان. \n2. أضف العسل إذا رغبت في تحليته. \n3. دع العصير يغلي على نار هادئة لمدة 5-10 دقائق. \n4. صفي العصير من عود القرفة وقدمه ساخناً أو بارداً مع شرائح التفاح.",
          "category": "drinks"
        },
      
        {
          "id": 25,
          "title": "عصير المانجو والأناناس",
          "ingredients": [
            "1 كوب مانجو مكعبات",
            "1 كوب أناناس مكعبات",
            "1/2 كوب عصير ليمون",
            "1/2 كوب ماء",
            "ثلج حسب الرغبة"
          ],
          "instructions": "1. في خلاط، اخلط المانجو، الأناناس، عصير الليمون، والماء حتى يصبح المزيج ناعماً. \n2. قدم العصير على الثلج.",
          "category": "drinks"
        }
      
      
    
  

];

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to server Recipes Food !!");
});

app.get('/api/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Recipe not found');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
