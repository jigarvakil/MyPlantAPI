const express = require('express');
const router = express.Router();

//ROUTE 1: crate a user using : POST "api/plant/all". No login Req.
router.get(
  '/all',

  async (req, res) => {
    try {
      const allPlants = [
        {
          id: '1A',
          botanicalName: "Lagerstroemia x 'Acoma'",
          commonName: 'Acoma crape myrtle',
          description:
            'The Acoma crape myrtle is a hybrid variety of the Lagerstroemia, most frequently known by its common name the crape (or crepe) myrtle. This particular variety only attains a height up to ten feet or so and is frequently reported as staying small in size and being more shrub-like instead of appearing like a tree.These plants are a great option for planting in urban or suburban environments. Its small size makes it an ideal option for gardens or lawns, or it can be used as part of a commercial landscaping plan. In addition, this cultivar demonstrates greater resistance to powdery mildew—a frequent problem with some crape myrtle trees. ',
          family: null,
          plantType: 'Tree',
          matureSize: '2 to 10 feet tall and 2 to 10 feet wide',
          sunExposure: 'Full sun',
          soilType: 'Well-draining',
          soilPH: 'Slightly acidic to neutral',
          bloomTime: 'Spring summer',
          flowerColor: 'White',
          hardinessZones: '7 to 9',
          nativeArea: 'Asia Australia',
          howtoGrow:
            "The Acoma crape myrtle is a rewarding shrub or small tree to cultivate since it produces weeping branches with lush foliage and delicate blooms. While this variety requires abundant sun, it succeeds in a variety of soil conditions and has just basic needs for water or fertilizer.Described as having a medium rate of growth, you’ll have plenty of time to watch these trees mature. Just don’t think you'll have much more to do than watch; the Acoma crepe myrtle requires only occasional pruning of its lower branches.",
          pruning:
            'Keep your Acoma crape myrtle in good form with light pruning; this is best done in the spring before the lush foliage fills the branches.',
          commonPests:
            'While crepe myrtle trees are often subject to powdery mildew, one of the advantages of this hybrid variety is increased resistance to this fungus. However, Acoma trees are still subject to infestation by aphids. While this can produce a black mold, it isn’t overly threatening or damaging to the tree',
        },
        {
          id: '2A',
          botanicalName: 'Aeonium',
          commonName: 'Aeonium spp',
          description:
            'Aeonium is a genus including about 35 succulent plant species with unusually glossy, waxy leaves arranged in rosettes. The species range from the low-growing A. tabuliforme and A. smithii that grow just a few inches across, to larger species that grow several feet across, such as A. arboreum, A. valverdense, and A. holochrysum. ',
          family: 'Crassulaceae',
          plantType: 'Perennial succulent',
          matureSize: '2–60 in. (depending on species and variety)',
          sunExposure: 'Full sun to part shade',
          soilType: 'Sandy loam',
          soilPH: '5.6–6.0 (slightly acidic)',
          bloomTime: 'Late winter or spring',
          flowerColor:
            'Pink (flowering is rare, occurring only in mature plants)',
          hardinessZones: '9–11 (USDA); often grown as potted plants',
          nativeArea: 'Canary Islands, Africa',
          howtoGrow:
            'In warmer climates, aeoniums can be grown as in the ground as perennials, but it is also common to grow them as potted plants on decks or patios. In colder regions, they should be grown in containers and taken inside before frost. When grown in the garden, aeoniums command the most attention when grouped in masses. Tall varieties can look like bonsai when they get shrubby; you can trim them if they get too leggy. The cuttings will readily root and make new plants, helping you fill out your planting area.',
          pruning: null,
          commonPests:
            "Aeoniums attract the typical aphids, mealybugs, mites, and scale.2 However there's another insect you should be on the lookout for—ants. Aphids and mealybugs secrete sugary substances that attract the ants to succulents. It's not easy getting rid of ants from succulents with tight buds or rosette leaves. Your best chance is to put ant bait next to the plants to draw them out.",
        },
        {
          id: '3A',
          botanicalName: 'Aerangis spp',
          commonName: 'Aerangis orchids',
          description:
            "The Aerangis genus comprises many tropical orchids which can be distinguished by their lovely white, star-shaped flowers. The genus contains about 50 plants, and though they mostly originate in tropical regions of Africa, a few are also native to the islands of the Indian ocean. Aerangis orchids, though uncommon in cultivation, are not overly difficult to grow, even by novices. However, they don't react well to sudden environmental changes, and like all orchids, plants are often lost to sudden changes in temperature or humidity.",
          family: null,
          plantType: 'Epiphytic orchids',
          matureSize: '6–24 inches (varies by species)',
          sunExposure: 'Part sun, bright filtered light',
          soilType: 'Orchid potting mix',
          soilPH: '5.5 to 6.0 (acidic)',
          bloomTime: 'Spring to fall (varies by species)',
          flowerColor: 'White, yellow',
          hardinessZones: '10–11 (USDA)',
          nativeArea: 'Tropical Africa, Madagascar  ',
          howtoGrow:
            'As is true of most tropical orchids, successfully growing Aerangis plants depends on maintaining a proper balance of the various elements on which they depend. They need a well-aerated environment, lots of sunlight, and lots of moisture in the air. Remember to feed them regularly, and if their blooms are insufficient you can always increase the fertilizer levels.',
          pruning: null,
          commonPests:
            'Mites, mealybugs, and scale insects are common pests, best treated by dabbing them with a swab soaked in isopropyl alcohol.Fungal or bacterial leaf spots often occur when the plant is too wet or too cold. Affected spots on leaves should be carefully cut away with a razor blade, with the cut edges of the leaves treated with a fungicide powder. These plants have sparse foliage, so this is usually not a difficult task. Viral infections can cause serious distortion of leaves, and affected plants will need to be destroyed',
        },
        {
          id: '4A',
          botanicalName:
            "Adonis amurensis. One of the chief cultivars is 'Fukujukai.'",
          commonName: 'Amur adonis',
          description:
            'Amur adonis is one of the first plants to bloom in spring. That is no small consideration for Northern gardeners starved for some landscape color after the long winter. This perennial is grown mainly for its waxy, yellow flower, but the fern-like foliage is also attractive. The flowers are 1 to 2 inches across and come out before the foliage appears. The wonderful flower color is sometimes said to be "buttercup yellow," an apt description since the plants belong to the Ranunculus (Buttercup) family.',
          family: null,
          plantType: 'Herbaceous perennial',
          matureSize: '1 foot tall (with a somewhat greater spread)',
          sunExposure: 'Full sun to partial shade ',
          soilType: '	Well-drained',
          soilPH: 'Slightly acidic to slightly alkaline',
          bloomTime: '	March or April in zone 5',
          flowerColor: 'Yellow',
          hardinessZones: '	3 to 7',
          nativeArea: 'Northeastern Asia',
          howtoGrow:
            'Amur adonis is easy to grow, but being a spring ephemeral, it does go dormant when summer comes. So your main challenge in growing it is a design challenge: You have to figure out how to plug the "holes" left in your garden after the Amur adonis plants make their annual exit. One solution is to buy annual flowers and plant them around the holes left behind. If you do not want to have to remember to take this step every year, simply grow other perennials around your Amur adonis plants that fill out and bloom later in the year. Make sure that such plants are compatible with Amur adonis in terms of sun and soil conditions.',
          pruning: null,
          commonPests: null,
        },
        {
          id: '5A',
          botanicalName: 'Avocado',
          commonName: 'Persea americana',
          description:
            "Growing avocados outdoors as productive fruit trees can be tricky, but growing them as houseplants is fun and easy, resulting in a seedling that will eventually turn into an attractive little specimen with glossy, oval leaves 4 to 8 inches long. True, it's unlikely your tree will ever bear fruit (unless you give it about 10 years), and even if it does, the fruit from the offspring most likely won't resemble the original.",
          family: 'Lauraceae',
          plantType: 'Broadleaf evergreen fruit tree',
          matureSize:
            '30 to 60 ft. in the landscape; potted plants can be pruned to remain small',
          sunExposure: 'Full sun ',
          soilType: '	General-purpose potting soil',
          soilPH: '6.0 to 6.5, tolerates acidic or alkaline soil',
          bloomTime: 'Seasonal bloomer',
          flowerColor: '	Greenish-yellow',
          hardinessZones: '10-12 (USDA), any zone as a houseplant',
          nativeArea: '	Mexico',
          howtoGrow:
            'When avocado is grown as a houseplant, it is often grown from seed (the fruit pits) that can be sprouted in water or directly in potting soil.Established plants will do best in sunny windows. Fertilize them regularly in spring and summer with a balanced granular fertilizer.Avocados grown indoors are mostly novelty plants. If you want it to bear fruit and turn into the tree it really is, you will have to move your avocado outside, but this may only work if you live in a warmer climate.',
          pruning:
            'The first serious trimming should occur when the plant is only 12 inches tall. At that time, cut it back to 6 inches and allow for new leaves and stems to form.',
          commonPests:
            'Look for symptoms like leaf yellowing, which can indicate too much water or sluggish drainage. They may develop root rot in overly wet potting soil.When grown outdoors, avocado trees are threatened by laurel wilt, caused by the Raffaelea lauricola fungus. It is transmitted by several different species of ambrosia beetle. Infected trees usually succumb within 4 to 8 weeks.',
        },
        {
          id: '1B',
          botanicalName: 'Parodia magnifica',
          commonName:
            'Ball cactus, balloon cactus, silver ball cactus, blue ball cactus',
          description:
            'Ball cacti are moderate growers, adding about 4 inches to their height each year. Older plants will frequently produce flowers in beautiful shades of yellow, red, orange, or pink, and all varietals feature ridges of spikes that start out white and grow to a yellow-brown with age.',
          family: null,
          plantType: 'Cactus',
          matureSize: '3–12 in. tall, 3–18 in. wide',
          sunExposure: 'Full sun, partial shade',
          soilType: 'Sandy, well-drained',
          soilPH: 'Acidic',
          bloomTime: 'Summer',
          flowerColor: 'Yellow, pink, red, orange',
          hardinessZones: '9–12 (USDA) ',
          nativeArea: 'South America',
          howtoGrow:
            "If you can grow cacti and succulents successfully, you can likely grow the popular ball cactus without too much trouble. It's important to remember that the ball cactus doesn't like direct sunlight and is accustomed to more water than many other cacti species. Additionally, it's imperative that the cactus is not exposed to prolonged dampness or sitting water. Never let your cactus sit in a dish of water, and take care to ensure its soil is very well-draining.",
          pruning: null,
          commonPests: null,
        },
        {
          id: '2B',
          botanicalName: 'Phyllostachys aurea',
          commonName:
            'Bamboo, golden bamboo, fishpole bamboo, monk’s belly bamboo, fairyland bamboo',
          description:
            'The common name bamboo is applied to over a thousand plant species. In the wild, several of these species can grow to towering heights of 50 feet or more. However, it is possible to grow certain types of bamboo in containers—even indoors. Golden bamboo (Phyllostachys aurea) is one of those species. This bamboo features bright green upright canes that turn to a golden color with age and sunlight exposure. Its narrow, lance-shaped leaves grow in clusters on short stems off of the canes. The plant grows quickly and can easily spread throughout a garden if you let it. Thus, planting it in a pot is ideal to keep it contained. It won’t grow as large, but that means it will be much more manageable. It’s best planted in the spring or early fall, though indoors you generally can plant it any',
          family: null,
          plantType: 'Perennial, shrub',
          matureSize:
            '15–30 ft. tall, 8–15 ft. wide (outdoors), 5–8 ft. tall, 2–4 ft. wide (indoors)',
          sunExposure: 'Full, partial',
          soilType: 'Loamy, moist, well-drained',
          soilPH: 'Acidic',
          bloomTime: 'Nonflowering',
          flowerColor: 'Nonflowering',
          hardinessZones: '	6–10 (USDA)',
          nativeArea: 'China',
          howtoGrow:
            'Bamboo is usually a low-maintenance, hardy plant. It rarely has issues with pests or diseases, and it typically doesn’t require pruning. You can remove old canes at their base if they begin to look unsightly. And you also can remove new shoots as they pop up from the soil if you want to limit your plant’s growth. ',
          pruning: null,
          commonPests: null,
        },
        {
          id: '3B',
          botanicalName: 'Musa spp.',
          commonName: '	Banana tree, plantain tree',
          description:
            "No matter the size of your yard or home, there is a banana tree to fit. Plus, they can make good houseplants with enough light, though they typically don't bear fruit indoors. Banana trees generally have a fast growth rate and should be planted in the spring.",
          family: null,
          plantType: 'Herbaceous, perennial',
          matureSize: '	2–30 ft. tall, 1–15 ft. wide (varies widely by species)',
          sunExposure: 'Full',
          soilType: 'Loamy, well-drained',
          soilPH: 'Acidic',
          bloomTime: 'Spring',
          flowerColor: 'White, purple, orange',
          hardinessZones: '9–11 (USDA)',
          nativeArea: 'Asia, Africa, Australia',
          howtoGrow:
            "While most species grow best in warm climates, there also are somewhat cold-hardy banana trees. If you're planting the banana tree outdoors, choosing the right planting site is key to making care easy. Grow this plant in a location where it will be sheltered from strong winds, as it is very susceptible to damaged leaves. Prepare your planting site by mixing some compost into the soil. And make sure you have enough space for the height and spread of your particular species.",
          pruning:
            'Before the banana tree fruits, prune it so there is only one main stem. After it has been growing for six to eight months, leave one sucker (small shoot at the base of the stem). This plant will replace the main stem in the next growing season. After the fruit is removed, cut the main stem down to 2.5 feet. Remove the rest of the stem in a few weeks, leaving the replacement sucker intact.',
          commonPests: null,
        },

        {
          id: '4B',
          botanicalName: 'Beta vulgaris',
          commonName: 'Beet, beetroot',
          description:
            "The beet plant (Beta vulgaris) is a fast-growing vegetable that can be grown just about anywhere. Although beets are known as a root crop, all parts of the beet plant are edible. Tender beet greens can be harvested when thinning a row of beets, and mature leaves make good greens when it's time to pull up the whole plant. The most commonly known root beets are red, but golden and striped varieties are also available.",
          family: 'Amaranthaceae',
          plantType: '	Annual, vegetable',
          matureSize: '	12–18 in. tall, 18–24 in. wide',
          sunExposure: 'Full sun, part sun',
          soilType: 'Loamy, moist, well-drained',
          soilPH: 'Acidic, neutral (6.0–7.0)',
          bloomTime: 'Seasonal',
          flowerColor: null,
          hardinessZones: '2–11 (USDA)',
          nativeArea: 'Europe',
          howtoGrow: null,
          pruning:
            "Pruning isn't necessary for beet plants beyond thinning seedlings and trimming off leaves as needed to eat. Also, trim off any broken leaves that are dragging on the ground, as they can introduce pests and diseases to the plant.",
          commonPests: null,
        },
        {
          id: '5B',
          botanicalName: 'Rubus Fruticosus',
          commonName: '	Blackberry',
          description:
            'Homegrown fruit always beats market fruit for freshness and taste, but not everyone has the space to grow a fruit tree or a melon vine. For that reason, berries are the gateway fruit for many gardeners, and none are easier to grow in the home garden than the blackberry. As native North American fruiting shrubs that can typically be harvested from June to August, blackberries are primed to grow in your yard with little extra maintenance. All you need to grow summer blackberries for your pies, jams, and smoothies is a spot with full sun and a good supply of soil amendments such as compost or leaf mold.',
          family: null,
          plantType: 'Perennial',
          matureSize: '3–5 feet',
          sunExposure: 'Full sun',
          soilType: 'Rich, well-drained loam',
          soilPH: 'Slightly acidic to neutral (5.5 to 7.0)',
          bloomTime: null,
          flowerColor: null,
          hardinessZones: '5–8',
          nativeArea: '	North America, especially the Pacific Northwest',
          howtoGrow:
            '(In Pots)When growing blackberries in containers, choose a compact cultivar like Baby Cakes that does not need pruning. Choose large containers that hold at least five gallons of soil to prevent drying out.',
          pruning: null,
          commonPests:
            'Blackberries are prone to anthracnose, stem blight, and crown gall. Prevent disease by purchasing disease-free plant stock from reputable nurseries, and planting your blackberries away from areas with wild brambles, which may carry these diseases.Insect pests include stink bugs and raspberry crown borers. Keeping your plants healthy and vigorous will make them less attractive to insect attack.',
        },
        {
          id: '1C',
          botanicalName: 'Brassica oleracea ',
          commonName: 'Cabbage, Head cabbage',
          description:
            "Leafy cabbage (Brassica oleracea) is a vegetable grown for its densely packed heads. Some can be quite beautiful. They are classified by head shape, round and flat-head being the most commonly seen. There are cabbages with smooth leaves and pronounced veins and some with crinkled, or savoyed, leaves. You'll find cabbages in shades of white, green, and purple, and the flavor varies by variety. There are even ornamental cabbage varieties bred for their looks, not their flavor.",
          family: null,
          plantType: 'Biennial (typically grown as annual)',
          matureSize: '12 to 18 inches tall and wide',
          sunExposure: 'Full sun',
          soilType: 'Rich, well-drained ',
          soilPH: 'Neutral (above 6.8)',
          bloomTime: 'Typically does not flower',
          flowerColor: 'Typically does not flower',
          hardinessZones: '2 to 11',
          nativeArea: 'Europe',
          howtoGrow:
            "Cabbage plants can grow in cool weather, so you can get an early start on the season. They can also be re-seeded throughout the summer, provided the temperature isn't to high, to provide a continual harvest of heads as you need them, rather than having them all mature at the same time.",
          pruning: null,
          commonPests:
            "Unfortunately, there are many problems that plague cabbage. Cabbage worms and cabbage loopers are the main pest threats. They will munch holes throughout the leaves. Their coloring allows them to blend in with the cabbage, but they can be handpicked easily if you can see them. Slugs will also attack your cabbages as will cutworms.Once your cabbages are infected, there's not much you can do. You have to prevent these diseases by choosing disease-resistant varieties and by not growing cabbages in the same spot year after year. The fungus spores can remain in the soil over winter and reinfect new plantings.",
        },
        {
          id: '2C',
          botanicalName: 'Daucus carota',
          commonName: 'Carrot',
          description:
            'Carrots are biennial vegetables, though they are typically harvested in their first year of growth, before they overwinter, and set flowers the following year. Carrot foliage is finely dissected, with fern-like compound leaves. Carrot flowers have five petals and sepals, and are born in compound umbels. Most roots are about 1 inch in diameter and anywhere from one inch to more than 12 inches long. Carrots are best known for long, orange roots, but they actually come in several colors and shapes.',
          family: '	Apiaceae',
          plantType: 'Vegetable',
          matureSize: '6-in. root, 1-ft foliage height; 9-in. spread ',
          sunExposure: '	Full sun to part shade',
          soilType: 'Loose, well-draining soil ',
          soilPH: 'Slightly acidic (6.0–6.8)',
          bloomTime: 'Spring (second growing season)',
          flowerColor: null,
          hardinessZones: '3–10 (biennial grown as an annual)',
          nativeArea: 'Europe, Southwestern Asia',
          howtoGrow:
            'Carrots grow well in cool weather. You can begin planting carrot seedlings or sowing carrot seeds as soon as the soil can be worked in the spring, even two to three weeks before the last frost. You can succession plant carrots every couple of weeks throughout the spring. In warmer climates, you may have better luck growing carrots in the fall, through the winter.',
          pruning:
            "To prevent deformed roots, keep the area free of weeds as the carrots are growing. If you need to thin again later, you can use the tiny carrots in salads. When you've finished thinning, your carrots should be far enough apart that they won't rub shoulders when mature.",
          commonPests:
            "The biggest pest is the carrot rust fly. It lays its eggs in the soil near the carrot top. When the eggs hatch, the larvae work their way down into the soil and then into the carrot's roots, where they feed and create tunnels through the carrot. Carrot weevils can do similar damage. You can foil some pests by rotating where you plant each year, but the easiest method is to grow your carrots under row covers (garden fabric).",
        },
        {
          id: '3C',
          botanicalName: "Capsicum annuum 'Cayenne'",
          commonName: 'Cayenne pepper',
          description:
            'If you want to add a bit of spice to your garden, the cayenne pepper plant might be the perfect choice. These plants are a Capsicum annuum species cultivar. The species includes many other common pepper varieties, including bell peppers, Serrano peppers, and jalapeños, although the cayenne packs more of a punch when it comes to heat.The peppers themselves measure around 4-6 inches long, have a long, tapering shape with a curved tip, and are most commonly red. The plants also produce flowers that are white to slightly purple and are shaped like a bell.',
          family: null,
          plantType: 'Perennial/annual',
          matureSize: 'Pepper: 4-6 inches; plant: up to 4 ft. tall',
          sunExposure: 'Full sun',
          soilType: '	Moist, well-drained',
          soilPH: 'Neutral pH',
          bloomTime: 'Spring/summer',
          flowerColor: '	White/purple',
          hardinessZones: '	9-11 (USDA)',
          nativeArea: 'Tropical South and Central America',
          howtoGrow:
            "Positioning and spacing are vitally important for a successful harvest of Cayenne peppers. Space the plants around 24 inches apart (just allowing for light contact), and if the seeds are started indoors, they shouldn't be planted out until a couple of weeks after the last frost and the soil is suitably warmed. Make sure you select a location that hasn't been used by other members of the Solanaceae family, such as tomatoes or potatoes, in several years.",
          pruning: null,
          commonPests:
            'A few pests are attracted to peppers—they also tend to be problematic for other members of the nightshade family (like tomatoes). However, with attentive care, it would be rare for them to impact your harvest significantly. Keep an eye out for aphids, mites, pepper hornworms, pill bugs and leafminers.',
        },
      ];
      res.json(allPlants);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error ' });
    }
  }
);

module.exports = router;
