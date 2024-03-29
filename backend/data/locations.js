const locations = [
  {
    name: 'Port Gamble',
    image: '/images/PortGambleMainFull.jpg',
    point1:
      'Visiting Port Gamble is like a trip to the 19th Century. It was founded in 1853, by A.J. Pope, Captain William Talbot, and Cyrus Walker, and designed to look like their home of East Machias, Maine. The town is immaculately maintained, and a U.S. National Historic Landmark. The National Park Service called Port Gamble "the finest example of a nineteenth century Pacific Coast logging community.” Many of the historic homes are now shops.',
    point2:
      'The general store was the first building constructed, and has been in operation since 1853. The store is a charming tourist attraction, plus a great spot for food, supplies, and gifts. It has a Sea & Shell Museum on the second floor, and a Historical Museum in the basement.',
    point3:
      'The town’s cemetery is a beautiful spot with amazing views. It dates from1856, when U.S. Navy sailor, Gustave Englebrecht was killed in the Battle of Port Gamble and buried there.  He was the first U.S. Navy combat casualty in the Pacific. The cemetery holds 98 graves for residents of all ages. Most passed away in the 19th and early 20th centuries',
    pointBonus:
      'Port Gamble has been the setting for books, movies and television programs.',
    goImage: '/images/PortGamble/02PortGambleGoMuseumSign.jpg',
    go1h3: 'From Edmonds/Kingston Ferry to Port Gamble',
    go1all:
      '-Drive off ferry through Kingston go 5 to 6 miles, to the 5th stop light by the Texaco Station. -At the light turn RIGHT on to Hwy 104 – follow signs to Port Gamble/Hood Canal Bridge. -Go approximately 2 to 3 miles and you will enter Port Gamble. -At the water towers, where the road turns to the left (south), go straight onto Rainier Ave.',
    go1li1:
      'Drive off ferry through Kingston go 5 to 6 miles, to the 5th stop light by the Texaco Station.',
    go1li2:
      'At the light turn RIGHT on to Hwy 104 – follow signs to Port Gamble/Hood Canal Bridge.',
    go1li3: 'Go approximately 2 to 3 miles and you will enter Port Gamble.',
    go1li4:
      'At the water towers, where the road turns to the left (south), go straight onto Rainier Ave.',

    go2h3: 'From Seattle/Bainbridge Island to Port Gamble',
    go2all:
      '-From Bainbridge Island Ferry, follow SR 305. Follow signs to Hwy 3 towards Hood Canal (north). -At Hood Canal Bridge continue going straight 1.5 miles. -At the water towers, where the road turns to the right (south), take a Left onto Rainier Ave.',
    go2li1:
      'From Bainbridge Island Ferry, follow SR 305. Follow signs to Hwy 3 towards Hood Canal (north).',
    go2li2: 'At Hood Canal Bridge continue going straight 1.5 miles.',
    go2li3:
      'At the water towers, where the road turns to the right (south), take a Left onto Rainier Ave.',
    go3h3: 'From Tacoma/South to Port Gamble',
    go3all:
      '- Take SR 16W out of Tacoma and across the Narrows Bridge. -Follow signs to HWY 3 North to Poulsbo and continue on Hwy 3. -At Hood Canal Bridge, continue heading straight 1.5 miles.',
    go3li1: ' Take SR 16W out of Tacoma and across the Narrows Bridge.',
    go3li2: 'Follow signs to HWY 3 North to Poulsbo and continue on Hwy 3.',
    go3li3: 'At Hood Canal Bridge, continue heading straight 1.5 miles.',
    go3li4:
      'At the water towers, where the road turns to the right (south), take a Left onto Rainier Ave.',
    eat1Image: '/images/PortGamble/03PortGambleEatScratch.jpg',
    eat1name: 'Scratch kitchen',
    eat1Address: '32420 N Rainier Ave ​ Port Gamble, WA 98364',
    eat1Phone: '(360) 297-7636',
    eat1Description:
      'Good food, cold beer, nice people, awesome view. Local and organic ingredients, offering compostable to go products too!',
    eat2Image: '/images/PortGamble/05PortGambleEatButcherBaker.jpg',
    eat2name: 'Butcher & Baker',
    eat2Address: '4719 NE State Highway 104, Port Gamble WA 98364',
    eat2Phone: '(360) 297-9500',
    eat2Description:
      'A locally sourced farmhouse restaurant, butcher shop and bakery that offers small batch provisions and dining.',
    eat3Image: '/images/PortGamble/04PortGambleEatGeneralStore.jpg',
    eat3name: 'Port Gamble General Store',
    eat3Address: '32400 N Rainier Ave ​Port Gamble, WA 98364',
    eat3Phone: '(360) 297-7636',
    eat3Description:
      'A full cafe menu including sandwiches, soups, fresh baked goods, ice cream, snacks, an espresso bar, and retail space with gifts.',
    drink1Image: '/images/PortGamble/06PortGambleDrinkHouse11.jpg',
    drink1name: 'House 11 Taproom and Bottle Shop',
    drink1Address: '32420 N Rainier Ave. Port Gamble, WA 98364',
    drink1Phone: '(360) 297-7636',
    drink1Description:
      'Community focused beer and wine taproom providing a atmosphere, and tasty food for enjoying local and organic beers and wines.',
    drink2Image: '/images/PortGamble/07PortGambleDrinkGalloping.jpg',
    drink2name: 'Galloping Gamble Espresso',
    drink2Address: '4719 NE State Highway 104, Port Gamble WA 98364',
    drink2Phone: '(360)-688-4441',
    drink2Description:
      'They serve espresso, brewed coffee and tea, and spritzer drinks. Convenient drive-through and walk-up coffee and espresso, right on Highway 104. ',
    drink3Image: '/images/PortGamble/08PortGambleDrinkScratch.jpg',
    drink3name: 'Scratch Kitchen',
    drink3Address: '32420 N Rainier Ave, ​Port Gamble, WA 98364',
    drink3Phone: '(360) 297-7636',
    drink3Description:
      'Full bar, cold beer, nice people, awesome view. Local and organic ingredients, offering compostable to-go products.',
    play1Image: '/images/PortGamble/09PortGamblePlayHeritagePark.jpg',
    play1name: 'Port Gamble Forest Heritage Park',
    play1Address: '28901 Highway 104,​ Kingston, WA 98346',
    play1Phone: '',
    play1Description:
      'The largest park in Kitsap County, this Heritage Park contains 60 miles of walking trails, equestrian trails, biking trails, access to water for water trails and kayaking, parking lot. It is a pack it in and pack it out type park',
    play2Image: '/images/PortGamble/10PortGamblePlayOlympicOutdoor.jpg',
    play2name: 'Olympic Outdoor Center',
    play2Address: '32379 N Rainier Ave. ​Port Gamble, WA 98364',
    play2Phone: '360-297-4659',
    play2Description:
      'Olympic Outdoor Center offers paddle sports events, guided tours, instruction, kayak and mountain bike rentals, and gear sales, in-store and on-line. Their staff is friendly and knowledgeable.',
    play3Image: '/images/PortGamble/11PortGamblePlayQuiltedStraight.jpg',
    play3name: 'Quilted Straight',
    play3Address: '32280 Puget Ave NE, ​Port Gamble, WA 98364',
    play3Phone: '(360) 297-7636',
    play3Description:
      'Located in the Old Stables Building, this shop offers the quilting classes, and an array of cotton, silk, and wool embroidery floss, pearl cotton, embellishment threads, ribbons, books, and patterns.',

    stay1Image: '/images/PortGamble/12PortGambleStlayGuestHouses.jpg',
    stay1name: 'Port Gamble Guest Houses',
    stay1Address: 'Port Gamble, Washington',
    stay1url: 'www.portgambleguesthouse.com/',
    stay1Phone: '(360) 447-8473',
    stay1Description:
      'Historic homes in town can be rented for a special occasion or weekend getaway. Guest House 1 is a 3 bedroom 3 bath that sleeps 10 and Guest House 2 is a 3 bedroom 2 bath which sleeps 8.',
    stay2Image: '/images/PortGamble/13PortGambleStayPointHotel.jpg',
    stay2name: 'The Point Hotel',
    stay2Address: '7989 NE Salish Lane, ​Kingston, WA 98346',
    stay2url: 'www.thepointcasinoandhotel.com',
    stay2Phone: '(360)-688-4441',
    stay2Description:
      'This hotel is not far from Port Gamble, with a casino, gym, meeting space, a gallery of indigenous artwork, multiple eateries and bars, plus  a nightclub/music venue. A ferry shuttle, and parking for RVs and cars are available.',
    stay3Image: '/images/PortGamble/14PortGambleStayThorndykeLodge.jpg',
    stay3name: 'Thorndyke Lodge',
    stay3Address: 'Poulsbo, Washington',
    stay3url: 'www.vrbo.com/355706',
    stay3Phone: '',
    stay3Description:
      'This VRBO House (Sleeps 8-12) and offers a nature preserve-like setting by an unspoiled estuary in the Hood Canal, surrounded by old-growth forest.',
    footerImage: '/images/PortGamble/15PortGambleEndBicycleFullSize.jpg',
  },
  {
    name: 'Point No Point',
    image: '/images/PointNoPointMainFull.jpg',
    point1:
      'Point No Point is located on the northeastern tip of the Kitsap Peninsula in Hansville Washington, west of Whidbey Island. It was named by U.S. Navy Lt. Charles Wilkes, who commanded the United States Exploring Expedition in 1841. Approaching the spit of land, he thought it was a substantial point, but realizing it was much smaller than he expected, he named it Point No Point.',
    point2:
      "Point No Point is home to the oldest lighthouse in the Puget Sound. It was first lit in1879, and is listed on the National Register of Historic Places. The Lighthouse Keepers Quarters are available for lodging. Proceeds realized from the rental of the historic keeper ' s quarters are directed to the preservation of the Point No Point Light Station",
    point3:
      'In 1855 the Point No Point Treaty was signed at this location between Governor of Washington Territory and 82 different tribal leaders. It established an agreement of rights between the United States government and the Native American tribes of the greater Puget Sound region in the Washington Territory). The treaty was signed by the Territorial Governor Isaac Stevens, Suquamish and Dwamish (Duwamish tribe) Chief Seattle, Snoqualmoo (Snoqualmie tribe) and Sno-ho-mish Chief Patkanim (as Pat-ka-nam), Lummi Chief Chow-its-hoot, and Skagit Chief Goliah. It established reservation land, fishing rights, $60,000, a free agricultural and industrial school, and free access to a physician, a blacksmith, a carpenter and a farmer.',
    bonusPoint:
      ' Point No Point beach is loaded with driftwood, and makeshift driftwood shacks.',
    goImage: '/images/PointNoPointMainFull.jpg',
    go1h3: 'From Edmonds/Kingston Ferry to Point No Point',
    go1all:
      '-Drive off ferry through Kingston and go 2.6 miles on State Hwy 104. -Turn on Hansville Road (north) and go 7.4 miles. -Turn right onto NE Point No Point Rd and continue a mile to the Lighthouse. ',
    go1li1:
      'Drive off ferry through Kingston and go 2.6 miles on State Hwy 104.',
    go1li2: 'Turn on Hansville Road (north) and go 7.4 miles.  ',
    go1li3:
      'Turn right onto NE Point No Point Rd and continue a mile to the Lighthouse.',
    go2h3: 'From Seattle/Bainbridge Island to Point No Point',
    go2all:
      '-Drive off Bainbridge Island Ferry, follow SR 305 (north) for 7.0 miles. -Turn right onto Suquamish Way NE and go 1.6 miles. -Suquamish Way NE turns left and becomes Augusta Ave NE  and go 0.8 mile. -Continue on Miller Bay Rd NE  for 5.3 miles, then continue onto Hansville Rd NE  for 7.4 miles. - Turn right onto NE Point No Point Rd and continue a mile to the Lighthouse.',
    go2li1:
      'Drive off Bainbridge Island Ferry, follow SR 305 (north) for 7.0 miles.',
    go2li2: 'Turn right onto Suquamish Way NE and go 1.6 miles.',
    go2li3:
      'Suquamish Way NE turns left and becomes Augusta Ave NE  and go 0.8 mile.',
    go2li4:
      'Continue on Miller Bay Rd NE  for 5.3 miles, then continue onto Hansville Rd NE  for 7.4 miles.',
    go2li5:
      ' Turn right onto NE Point No Point Rd and continue a mile to the Lighthouse.',
    go3h3: 'From Tacoma/South to Point No Point',
    go3all:
      '-Cross Narrows Bridge on SR 16 West, go 26 miles, continue north as it becomes Hwy 3 for 17 miles. -Take Hwy 305 and turn left onto Hwy 307 N/Bond Rd NE and continue for 5.2 miles. -Turn right onto NE Point No Point Rd and continue a mile to the Lighthouse.',
    go3li1:
      'Cross Narrows Bridge on SR 16 West, go 26 miles, continue north as it becomes Hwy 3 for 17 miles. -Continue onto Hwy 104 east for 1.5 miles, and then turn left onto Hansville Road NE. for 7.4 miles.',
    go3li2:
      'Take Hwy 305 and turn left onto Hwy 307 N/Bond Rd NE and continue for 5.2 miles. ',
    go3li3:
      'Continue onto Hwy 104 east for 1.5 miles, and then turn left onto Hansville Road NE. for 7.4 miles.',
    go3li4:
      'Turn right onto NE Point No Point Rd and continue a mile to the Lighthouse.',
    eat1Image: '/images/PointNoPointMainFull.jpg',
    eat1name: 'HansGrill Grocery & Cafe',
    eat1Address: '7525 NE Twin Spits Rd, Hansville, WA 98340',
    eat1Phone: '(360) 638-2303',
    eat1Description:
      'Local grocery and cafe providing visitors with provisions for fishing, boating and picnics. Wonderful cafe with full-service bar featuring local brews and wines.',
    eat2Image: '/images/PointNoPointMainFull.jpg',
    eat2name: 'Point Julia Cafe',
    eat2Address: '7989 NE Salish Lane​, Kingston, WA 98346',
    eat2Phone: '(360) 297-0070 ',
    eat2Description:
      'Located in The Point Hotel. Breakfast items, grab-and-go choices, plus sandwiches and salads are available in the Point Julia Cafe. The cafe is open to all ages and is non-smoking Monday-Thursday: 7am-2am​, Friday & Saturday: 7am-2am',
    eat3Image: '/images/PointNoPointMainFull.jpg',
    eat3name: 'Little Boston Bistro',
    eat3Address: '7989 NE Salish Lane​, Kingston, WA 98346',
    eat3Phone: '(360) 297-0070',
    eat3Description:
      'The Little Boston Bistro at The Pointe Hotel offers intimate casual fine dining. A variety of steaks and seafood are offered on the menu. Limited hours.',
    drink1Image: '/images/PointNoPointMainFull.jpg',
    drink1name: 'HansGrill Grocery & Cafe',
    drink1Address: '7525 NE Twin Spits Rd, ​Hansville, WA 98340',
    drink1Phone: '(360) 638-2303',
    drink1Description:
      'Stop by for an espresso, also offering local beers and wines. Outdoor seating and takeout are available.',
    drink2Image: '/images/PointNoPointMainFull.jpg',
    drink2name: 'Hood Canal Brewery',
    drink2Address: '26499 Bond Rd NE​, Kingston, WA 98346',
    drink2Phone: '(360) 297-8316 ',
    drink2Description:
      'Visit the brewery taproom to try one of thirteen beers on tap. They feature signature house-made brews as well as a two Finnriver Ciderson tap.',
    drink3Image: '/images/PointNoPointMainFull.jpg',
    drink3name: 'The Center Bar',
    drink3Address: '38955 Hansville Rd., Hansville, WA 98340',
    drink3Phone: '(360) 638-0182',
    drink3Description:
      'The Center Bar is located in the middle of The Point Hotel and Casino, offering a full bar and a place to catch the game. Monday – Friday: 10am – 2am​, Saturday – Sunday: 9am – 2am',
    play1Image: '/images/PointNoPointMainFull.jpg',
    play1name: 'Norwegian Point',
    play1Address: '',
    play1Phone: '',
    play1Description:
      'Norwegian Point is one of three Kitsap County Parks around Hansville and Point No Point providing access to the Puget Sound and wonderful views, on the site of an old fishing resort. Below are some other parks around Hansville. ​Point No Point County Park​, Hansville Greenway​,Foulweather Bluff Preserve Trail,​ Buck Lake County Park',
    play2Image: '/images/PointNoPointMainFull.jpg',
    play2name: 'Bird Sanctuary',
    play2Address: 'Point No Point County Park',
    play2Phone: '',
    play2Description:
      'Point No Point Park is an excellent area for bird watching, featuring 60 acres of saltwater shore, wetlands and upland forest, with easy parking and trails. You might see bald eagles, humming birds, Bonaparte’s gulls, buffleheads, alcids, loons, cormorants, murres, and murrelets. ',
    play3Image: '/images/PointNoPointMainFull.jpg',
    play3name: 'Driftwood Houses',
    play3Address: 'Point No Point County Park',
    play3Phone: '',
    play3Description:
      'The beach at Point No Point is home to driftwood structures to explore, and there is plenty of sand. It is a great spot to fly a kite, fish and relax. It also offers views of Seattle and Mount Rainier.',

    stay1Image: '/images/PointNoPointMainFull.jpg',
    stay1name: 'Point No Point Lighthouse Keepers Quarters',
    stay1Address: '',
    stay1Phone: 'For Reservations or Questions, Call: (415) 362-7255',
    stay1url:
      'https://uslhs.org/about/point-no-point-vacation-rental/historic-keepers-quarters',
    stay1Description:
      'Experience century-old history at this unique property as a keeper of the light. You will not have lighthouse duties. The accommodations include: a comfortable living room, formal dining area, breakfast nook, full kitchen, 2 bedrooms and a full bathroom.',
    stay2Image: '/images/PointNoPointMainFull.jpg',
    stay2name: 'Airbnb in Hansville',
    stay2Address: '',
    stay2url: 'https://www.airbnb.com/hansville-wa/stays',
    stay2Phone: '',
    stay2Description:
      'Top-rated vacation rentals​ from people in Hansville, WA starting from $20 per night. ',
    stay3Image: '/images/PointNoPointMainFull.jpg',
    stay3name: 'The Point Hotel',
    stay3Address: '7989 NE Salish Lane, ​Kingston, WA 98346',
    stay3url: 'www.thepointcasinoandhotel.com',
    stay3Phone: '(360)-688-4441',
    stay3Description:
      'This hotel is just south of Hansville, and 5 miles from Kingston ferry, with a casino, gym, meeting space, plus a gallery of indigenous artwork, a courtyard, multiple eateries and bars, and a nightclub/music venue. A ferry shuttle, and parking for RVs and cars are available.',
    footerImage: '/images/PointNoPointMainFull.jpg',
  },
  {
    name: 'Poulsbo',
    image: '/images/PoulsboMainFull.jpg',
    point1:
      'Visiting Poulsbo is like a short trip to Norway. Norwegian immigrant Ole Stubb and family arrived on the bay in 1875. The town was founded in the1880s by another Norwegian immigrant, Jorgen Eliason. In 1886, I.B. Moe, yet another early settler, proposed establishing a post office. He suggested the town be named "Paulsbo", after his hometown in Norway. The petition was granted, and Moe became the first postmaster. Authorities in Washington, D.C. misspelled the town \' s name, possibly due to his handwriting, and it officially became "Poulsbo”. Most residents spoke Norwegian as their primary language until World War II. In 1975, King Olav V of Norway visited Poulsbo as part of the celebration of 150 years of Norwegian immigration to the United States. His son, Harald, visited 20 years later.',
    point2:
      'Poulsbo celebrates Viking Days every year, a popular three-day festival. It features parades, bands, Scandinavian dancing, street food vendors, craft booths, and lots of people dressed in Viking costumes.',
    point3:
      "Another popular local event is Chief Seattle Days. This area was first settled by the Suquamish Native American people. Their Chief Seattle (1786-1866), for whom the city pf Seattle is named, was a leader of both the Suquamish and Duwamish tribes in the area. Every year a three-day inter-tribal festival honoring him is held on the Suquamish Reservation nearby. It features dances and drumming, plus Northwest traditions like salmon and clam bakes, and canoe races. The festival closes with the blessing of Chief Seattle's grave.",
    bonusPoint: '',
    goImage: '/images/Poulsbo/02PoulsboGoMarinaSign.jpg',
    go1h3: 'From Edmonds/Kingston Ferry to Poulsbo',
    go1all:
      '-Drive off ferry through Kingston go 5 to 6 miles, to the 5th stop light by the Texaco Station. -Continue straight on Bond Rd NE about 9 miles to Front St NE in Poulsbo. -Follow Front St NE into downtown Poulsbo.',
    go1li1:
      '-Drive off ferry through Kingston go 5 to 6 miles, to the 5th stop light by the Texaco Station.',
    go1li2:
      'Continue straight on Bond Rd NE about 9 miles to Front St NE in Poulsbo.',
    go1li3: 'Follow Front St NE into downtown Poulsbo.',

    go2h3: 'From Seattle/Bainbridge Island to Poulsbo',
    go2all:
      'Drive off Bainbridge Island Ferry, follow SR 305 (north) for 11.5 miles. -Turn left onto NE Iverson St toward downtown Poulsbo. -Turn left onto Jensen Way NE. -Turn left on Front St NE and continue into downtown Poulsbo.',
    go2li1:
      'Drive off Bainbridge Island Ferry, follow SR 305 (north) for 11.5 miles.',
    go2li2: 'Turn left onto NE Iverson St toward downtown Poulsbo.',
    go2li3: 'Turn left onto Jensen Way NE.',
    go2li4: 'Turn left on Front St NE and continue into downtown Poulsbo. ',
    go3h3: 'From Tacoma/South to Poulsbo',
    go3all:
      '-Take SR 16W out of Tacoma and across the Narrows Bridge. -Continue past Gig Harbor and Port Orchard. -Take the WA-305 exit towards Poulsbo. -Drive time is ~90 minutes.',
    go3li1: 'Take SR 16W out of Tacoma and across the Narrows Bridge.',
    go3li2: 'Continue past Gig Harbor and Port Orchard.',
    go3li3: 'Take the WA-305 exit towards Poulsbo.',
    go3li4: 'Drive time is ~90 minutes.',
    eat1Image: '/images/Poulsbo/03PoulsboEatLoft-.jpg',
    eat1name: 'The Loft',
    eat1Address: '18779 Front Street​, Poulsbo, WA 98370',
    eat1Phone: '(360) 626-0224',
    eat1Description:
      'New American menu ​in a casual, relaxed atmosphere, with a great view of the marina. ​The dining room and bar open out to harbor-front seating.',
    eat2Image: '/images/Poulsbo/04PoulsboEatSluys.jpg',
    eat2name: 'Sluys Bakery',
    eat2Address: '18924 Front St NE, ​Poulsbo, WA 98370',
    eat2Phone: '(360) 779-2798',
    eat2Description:
      'Home of Poulsbo Bread, Sluys is a classic family-owned bakery specializing in a broad range of handcrafted baked goods, including cookies, donuts, cakes, cupcakes, bread, dinner rolls, Danish pastries, and specialty Scandinavian items, all handcrafted and made in-store. ',
    eat3Image: '/images/Poulsbo/05PoulsboEatMollyWard.jpg',
    eat3name: 'Molly Ward Gardens',
    eat3Address: '27462 Big Valley Rd. NE​, Poulsbo, WA 98370',
    eat3Phone: '(360)779-4471',
    eat3Description:
      'A charming rural restaurant, located in between Poulsbo and Port Gamble. Eclectic taste is reflected in the menu and the decor. Nearly 5 acres of gardens are availalbe for special events, dining on the patio, or just a stroll. Reservations recommended.',
    drink1Image: '/images/Poulsbo/06PoulsboDrinkHotShots.jpg',
    drink1name: 'Hot Shots Java',
    drink1Address: '18881 Front St. Suite B​, Poulsbo, WA 98370',
    drink1Phone: '(360) 779-2171',
    drink1Description:
      'Hot Shots Java is a family owned and operated coffeehouse, voted Best Coffee and Baristas in North Kitsap for more than 8 years. All of of their coffee is organic, fair trade and custom roasted.',
    drink2Image: '/images/Poulsbo/07PoulsboDrinkBrassKraken.jpg',
    drink2name: 'Brass Kraken Pub',
    drink2Address: '18779 Front St NE #7407​, Poulsbo, WA 98370',
    drink2Phone: '(360) 626-1042',
    drink2Description:
      'Casual bayside bar serving pub grub in a contemporary space with a nautical vibe & marina views. It has a relaxed atmosphere with a full food menu and a full bar. Sit inside or take your drink out onto the pier and enjoy the views of the Marina and Liberty Bay',
    drink3Image: '/images/Poulsbo/08PoulsboDrinkPoulsbohemian.jpg',
    drink3name: 'Poulsbohemian Coffee',
    drink3Address: '19003 Front St NE, ​Poulsbo, WA 98370',
    drink3Phone: '(360)779-4471',
    drink3Description:
      'Poulsbohemian is a coffee house on Front Street. The patio has a fantastic view looking out at Liberty Bay, and it is a favorite with the locals.',
    play1Image: '/images/Poulsbo/09PoulsboPlayFishPark.jpg',
    play1name: 'Fish Park',
    play1Address: '',
    play1Phone: '',
    play1Description:
      'Fish Park is a 40 acre waterfront park with walking paths, bird watching & ecology-themed public art. There are many trails in and around Poulsbo. Below are some more local parks.​ American Legion Park​, Poulsbo Wilderness Trail Centennial Park Arboretum, ​Waterfront Park, Liberty Bay Waterfront ',
    play2Image: '/images/Poulsbo/10PoulsboPlayMaritimeMuseum.jpg',
    play2name: 'Poulsbo Maritime Museum',
    play2Address: '19010 Front Street NE,​ Poulsbo, WA 98370',
    play2Phone: '(360) 440-7354',
    play2Description:
      'The Poulsbo Maritime Museum showcases the rich maritime history of Poulsbo and North Kitsap. Through imaginative exhibits and interactive displays, the museum invites guests to explore the amazingly diverse history.',
    play3Image: '/images/Poulsbo/11PoulsboPlayMaritimeMuseum.jpg',
    play3name: 'U.S. Naval Undersea Museum',
    play3Address: '1 Garnett Way​, Keyport, WA 98345',
    play3Phone: '(360) 396-4148',
    play3Description:
      'The United States Naval Undersea Museum is a naval museum located in nearby Keyport, Washington. It is one of the 10 Navy museums that are operated by the Naval History & Heritage Command. It sits next to a branch of the Naval Undersea Warfare Center. ',

    stay1Image: '/images/Poulsbo/12PoulsboStayNordicHill.jpg',
    stay1name: 'Nordic Hill Manor',
    stay1Address: '13913 South Keyport Road NE​, Poulsbo, WA 98370 US',
    stay1Phone: '(360) 779-4927',
    stay1url: '',
    stay1Description:
      'This manor sits on top of a hill with sweeping views of Liberty Bay and the Cascades Mountains. It is a vacation rental with 10,000+ square feet, 7 bedrooms and can accommodate sleeping quarters for 15 individuals or up to 25 as couples and kids.',
    stay2Image: '/images/Poulsbo/13PoulsboStayPoulsboInn.jpg',
    stay2name: 'Poulsbo Inn & Suites',
    stay2Address: '18680 State Route 305 NE, Poulsbo, WA 98370-7301',
    stay2url: '',
    stay2Phone: '18680 State Route 305 NE, Poulsbo, WA 98370-7301',
    stay2Description:
      'Reasonably priced hotel, less than a mile from the waterfront and downtown Poulsbo, eleven miles from the Bainbridge Island Ferry Terminal. ',
    stay3Image: '/images/Poulsbo/14PoulsboStayClearwaterResort.jpg',
    stay3name: 'Suquamish Clearwater Casino Resort ',
    stay3Address: '​15347 Suquamish Way NE, Suquamish, WA 98392',
    stay3url: '',
    stay3Phone: '(360) 598-8700',
    stay3Description:
      'Clearwater is a waterfront casino resort, with a 183 room hotel, relaxing spa, high tech meeting spaces, five restaurants, four bars, nightlife entertainment, 18 hole golf course and casino.',

    footerImage: '/images/Poulsbo/15PoulsboEndSwordsFullSize.jpg',
  },
  {
    name: 'Kingston',
    image: '/images/KingstonMainFull.jpg',
    point1:
      'Kingston’s name started out as a joke. Originally founded in1853 by Benjamin Bannister, it was known as "Appletree Cove”. In 1874, a man named Michael King moved to the area and started a logging operation. He built many small buildings and shacks along the shore for his men and animals, but in1882, he moved on. The shacks and bunkhouses were left behind and lived in by drifters, squatters and old loggers. As a joke, folks starting referring to it as "King \' s Town”. The name evolved into Kingston and the joke stuck. ',
    point2:
      'Just going to Kingston is part of the fun. There are two daily ferry systems servicing Kingston. Washington State Ferries carry cars and passengers between Kingston and Edmonds, and Kitsap Fast Ferries offer passenger-only service between Kingston and downtown Seattle. And the town is very walkable, so traveling here without a car is easy.',
    point3:
      'Kingston is home to the My Girl Drive-In and Museum, an authentic replica of a 1950’s drive-in restaurant. It houses 10,000 square feet of collectibles including an extensive collection of Elvis and rock and roll memorabilia. Located on 6 acres in a wooded setting with adequate parking space for large outdoor events and barbecues, and it is available for private or corporate functions, wedding receptions, retirement or birthday parties, high school reunions, family gatherings or fund-raising events.',
    bonusPoint:
      'Kingston is known as the "Little City by the Sea” and the northern gateway to the Olympic Peninsula..',
    goImage: '/images/KingstonMainFull.jpg',
    go1h3: 'From Edmonds/Kingston Ferry to Kingston',
    go1all:
      'Walk or drive onto the Edmonds Kingston Ferry in Edmonds. -Walk or drive off ferry in Kingston and you’re there.',
    go1li1: '-Walk or drive onto the Edmonds Kingston Ferry in Edmonds.',
    go1li2: 'Walk or drive off ferry in Kingston and you’re there.',
    go2h3: 'From Seattle on the Passenger Ferry to Kingston',
    go2all:
      '-Walk Kingston Passenger Ferry at Seattle Ferry dock. -Walk off the passenger ferry in Kingston and you’re there.',
    go2li1: 'Walk Kingston Passenger Ferry at Seattle Ferry dock.',
    go2li2: 'Walk off the passenger ferry in Kingston and you’re there.',
    go3h3: 'From Seattle/Bainbridge Island to Kingston',
    go3all:
      '-Drive off Bainbridge Island Ferry, follow SR 305 (north) for 7.0 miles. -Turn right onto Suquamish Way NE and go 1.6 miles. -Suquamish Way NE turns left and becomes Augusta Ave NE  and go 0.8 mile. -Continue onto Miller Bay Rd NE  for 4.3 miles. -Turn right onto NE West Kingston Rd for 2.1 miles. -Turn left onto Bannister, right on NE Maine, then right onto NE State Hwy 104.',
    go3li1:
      'Drive off Bainbridge Island Ferry, follow SR 305 (north) for 7.0 miles.',
    go3li2: 'Turn right onto Suquamish Way NE and go 1.6 miles.',
    go3li3:
      'Suquamish Way NE turns left and becomes Augusta Ave NE  and go 0.8 mile.',
    go3li4: 'Continue onto Miller Bay Rd NE  for 4.3 miles.',
    go3li5: 'Turn right onto NE West Kingston Rd for 2.1 miles.',
    go3li6:
      'Turn left onto Bannister, right on NE Maine, then right onto NE State Hwy 104.',
    eat1Image: '/images/KingstonMainFull.jpg',
    eat1name: "J' aime Les Crêpes",
    eat1Address: '11264 NE St Hwy 104,​ Kingston, WA 98346',
    eat1Phone: '(360)  297-5886 ',
    eat1Description:
      'French-style creperie, serving coffee, tea, ice cream, frozen yogurt, and crepes, with over 30 Savory and Sweet choices.  They use traditional tools and techniques to re-create this French classic.',
    eat2Image: '/images/KingstonMainFull.jpg',
    eat2name: 'Mossback',
    eat2Address: '26185 Ohio Ave NE, ​Kingston, WA 98346',
    eat2Phone: 'https://www.mossbackcafe.com/home​',
    eat2Description:
      'Independently-owned restaurant in a century-old farmhouse offering inspired dishes & cocktails using unique flavors of the Pacific Northwest.  Open Friday and Saturday with a pre fixe menu. Reservations recommended.',
    eat3Image: '/images/KingstonMainFull.jpg',
    eat3name: 'Kingston Ale House',
    eat3Address: '11225 NE State Hwy 104, Kingston, WA 98346',
    eat3Phone: '(360) 881-0412',
    eat3Description:
      'Family friendly restaurant with an emphasis on seafood. Plus a pet-friendly deck that overlooks the water. Also has a  full bar and 20 rotating craft brews on-tap, and a ',
    drink1Image: '/images/KingstonMainFull.jpg',
    drink1name: 'd’Vine Wine Bar',
    drink1Address: '11225 NE State Hwy 104, Kingston, WA 98346',
    drink1Phone: '(360) 881-0412',
    drink1Description:
      'This is a charming wine bar one block from the ferry terminal, specializing in wines from the Pacific Northwest, plus small production imports, and craft beers. Their patio overlooks Appletree Cove. ',
    drink2Image: '/images/KingstonMainFull.jpg',
    drink2name: 'Downpour Brewing',
    drink2Address: '10991 NE State Hwy 104, Kingston, WA 98346',
    drink2Phone: '(360) 881-0452',
    drink2Description:
      'Located within walking distance of the ferry dock, the tasting room at Downpour Brewing offers bar seating, TVs, picnic tables, and a kid’s play area, and outdoor seating.​',
    drink3Image: '/images/KingstonMainFull.jpg',
    drink3name: 'Over the Moon Roasters',
    drink3Address: '11229 NE State Hwy 104 #3, Kingston, WA 98346',
    drink3Phone: '(360) 638-6156',
    drink3Description:
      'Specialty coffee shop, family owned and run, with breakfast and food items made from freshly prepared ingredients.',
    play1Image: '/images/KingstonMainFull.jpg',
    play1name: 'Firehouse Theater',
    play1Address: '11225 NE State Hwy 104, Kingston, WA 98346',
    play1Phone: '(360) 881-0412',
    play1Description:
      'This hometown theater shows first run and independent films,, with two screens, stadium seating, and space for special events and performances. It is located in the historic Kingston firehouse, 4 blocks from the ferry. ',
    play2Image: '/images/KingstonMainFull.jpg',
    play2name: 'Heronswood Garden',
    play2Address: '7530 NE 288th Street, ​Kingston, WA 98346',
    play2Phone: '(360) 297-9620',
    play2Description:
      'Heronswood is a botanical garden with a unique collection of plants from the Americas, Asia, Eastern Europe, South Africa, New Australia & Zealand. It is owned and maintained by the  S’Klallam Tribe, and open Wednesday through Sunday, 10am to 3pm.',
    play3Image: '/images/KingstonMainFull.jpg',
    play3name: 'Mike Wallace Park',
    play3Address: '',
    play3Phone: '',
    play3Description:
      'Mike Wallace Park is a nice place to picnic and view activity in Kingston. Sitting by the ferry terminal and running past the marina, it has large grassy field and a gazebo. Some of Kingston’s other parks and trails are listed below. Other Parks:​ Saltair Beach Park, ​Saltair Beach Park, Kingston Eglon Trailhead​, North Kitsap Heritage Park',

    stay1Image: '/images/KingstonMainFull.jpg',
    stay1name: 'Phoenix Bed & Breakfast',
    stay1Address: '9120 NE Kiwi Lane​, Kingston, WA 98346 ',
    stay1Phone: '(360)-297-8175',
    stay1url: '',
    stay1Description:
      'This Bed & Breakfast was rebuilt by the TV show "Extreme Makeover: Home Edition”. It has a private Bed & Breakfast wing. Located in a quiet country setting on 5 beautiful acres and surrounded by tall trees.',
    stay2Image: '/images/KingstonMainFull.jpg',
    stay2name: 'Vrbo in Kingston',
    stay2Address: '',
    stay2url:
      'https://www.vrbo.com/vacation-rentals/usa/washington/puget-sound/puget-sound-north/kingston',
    stay2Phone: '',
    stay2Description:
      'Vrbo has many vacation houses and cabins available near Kingston. Prices start at $175 per night, and houses and cabins are popular options.',
    stay3Image: '/images/KingstonMainFull.jpg',
    stay3name: 'The Point Hotel',
    stay3Address: '7989 NE Salish Lane, ​Kingston, WA 98346',
    stay3url: 'www.thepointcasinoandhotel.com',
    stay3Phone: '(360)-688-4441',
    stay3Description:
      'This hotel is 5 miles from Kingston ferry, with a casino, gym, meeting space, a gallery of indigenous artwork, a courtyard, multiple eateries and bars, and a nightclub/music venue. A ferry shuttle, and parking for RVs and cars are available.',

    footerImage: '/images/KingstonMainFull.jpg',
  },
];

export default locations;
