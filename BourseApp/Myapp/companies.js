const stockData = {
    IBM: {
      Symbol: "IBM",
      EPS: "2.24",
      PERatio: "62.03",
      Name: "International Business Machines",
      Description: "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.",
      Country: "USA",
    },
    AAPL: {
      Symbol: "AAPL",
      EPS: "5.89",
      PERatio: "-31.4",
      Name: "Apple Inc",
      Description: "Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Apple is the world's largest technology company by revenue (totalling $274.5 billion in 2020) and, since January 2021, the world's most valuable company. As of 2021, Apple is the world's fourth-largest PC vendor by unit sales, and fourth-largest smartphone manufacturer. It is one of the Big Five American information technology companies, along with Amazon, Google, Microsoft, and Facebook.",
      Country: "USA",
    },
    AMZN: {
      Symbol: "AMZN",
      EPS: "0.41",
      PERatio: "317.07",
      Name: "Amazon.com Inc",
      Description: "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Microsoft, and Facebook. The company has been referred to as one of the most influential economic and cultural forces in the world, as well as the world's most valuable brand.",
      Country: "USA",
    },
    GOOGL: {
      Symbol: "GOOGL",
      EPS: "4.4",
      PERatio: "-27.28",
      Name: "Alphabet Inc Class A",
      Description: "Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California. It was created through a restructuring of Google on October 2, 2015, and became the parent company of Google and several former Google subsidiaries. The two co-founders of Google remained as controlling shareholders, board members, and employees at Alphabet. Alphabet is the world's fourth-largest technology company by revenue and one of the world's most valuable companies.",
      Country: "USA",
    },
    TSLA: {
      Symbol: "TSLA",
      EPS: "3.08",
      PERatio: "84.42",
      Name: "Tesla Inc",
      Description: "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, as well as other related products and services. In 2020, Tesla had the highest sales in the plug-in and battery electric passenger car segments, capturing 16% of the plug-in market (which includes plug-in hybrids) and 23% of the battery-electric (purely electric) market. Through its subsidiary Tesla Energy, the company develops and is a major installer of solar photovoltaic energy generation systems in the United States. Tesla Energy is also one of the largest global suppliers of battery energy storage systems, with 3 GWh of battery storage supplied in 2020.",
      Country: "USA",
    },
    JPM: {
      Symbol: "JPM",
      EPS: "15.56",
      PERatio: "9.96",
      Name: "JPMorgan Chase & Co",
      Description: "JPMorgan Chase & Co. is an American multinational investment bank and financial services holding company headquartered in New York City. JPMorgan Chase is incorporated in Delaware. As a Bulge Bracket bank, it is a major provider of various investment banking and financial services. It is one of America's Big Four banks, along with Bank of America, Citigroup, and Wells Fargo. JPMorgan Chase is considered to be a universal bank and a custodian bank. The J.P. Morgan brand is used by the investment banking, asset management, private banking, private wealth management, and treasury services divisions.",
      Country: "USA",
    },
    T: {
      Symbol: "T",
      EPS: "-1.18",
      PERatio: "None",
      Name: "AT&T Inc",
      Description: "AT&T Inc. is an American multinational conglomerate holding company, Delaware-registered but headquartered at Whitacre Tower in Downtown Dallas, Texas. It is the world's largest telecommunications company and the second largest provider of mobile telephone services.",
      Country: "USA",
    },
    V: {
      Symbol: "V",
      EPS: "-1.18",
      PERatio: "-31.99",
      Name: "Visa Inc. Class A",
      Description: "Visa Inc. is an American multinational financial services corporation headquartered in Foster City, California, United States. It facilitates electronic funds transfers throughout the world, most commonly through Visa-branded credit cards, debit cards, and prepaid cards. Visa is one of the world's most valuable companies.",
      Country: "MO",
    },
    VZ: {
      Symbol: "VZ",
      EPS: "5.14",
      PERatio: "-6.59",
      Name: "Verizon Communications Inc",
      Description: "Verizon Communications Inc. is an American multinational telecommunications conglomerate and a corporate component of the Dow Jones Industrial Average. The company is headquartered at 1095 Avenue of the Americas in Midtown Manhattan, New York City, but is incorporated in Delaware.",
      Country: "USA",
    },
    WMT: {
      Symbol: "WMT",
      EPS: "4.16",
      PERatio: "38.07",
      Name: "Walmart Inc",
      Description: "Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores from the United States, headquartered in Bentonville, Arkansas. It also owns and operates Sam's Club retail warehouses.",
      Country: "USA",
    },
    PG: {
      Symbol: "PG",
      EPS: "5.75",
      PERatio: "26.6",
      Name: "Procter & Gamble Company",
      Description: "The Procter & Gamble Company (P&G) is an American multinational consumer goods corporation headquartered in Cincinnati, Ohio, founded in 1837 by William Procter and James Gamble. It specializes in a wide range of personal health, consumer health, personal care, and hygiene products; these products are organized into several segments including Beauty; Grooming; Health Care; Fabric & Home Care; and Baby, Feminine, & Family Care. Before the sale of Pringles to Kellogg's, its product portfolio also included food, snacks, and beverages.",
      Country: "USA",
    },
    NFLX: {
      Symbol: "NFLX",
      EPS: "8.57",
      PERatio: "49.88",
      Name: "Netflix Inc",
      Description: "Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California. Netflix was founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California. The company's primary business is a subscription-based streaming service offering online streaming from a library of films and television series, including those produced in-house.",
      Country: "USA",
    },
    CMCSA: {
      Symbol: "CMCSA",
      EPS: "1.34",
      PERatio: "32.01",
      Name: "Comcast Corp",
      Description: "Comcast Corporation is an American telecommunications conglomerate headquartered in Philadelphia, Pennsylvania. It is the second-largest broadcasting and cable television company in the world by revenue (behind AT&T), the largest pay-TV company, the largest cable TV company and largest home Internet service provider in the United States, and the nation's third-largest home telephone service provider. Comcast provides services to U.S. residential and commercial customers in 40 states and in the District of Columbia. As the parent company of the international media company NBCUniversal since 2011, Comcast is a producer of feature films and television programs intended for theatrical exhibition and over-the-air and cable television broadcast, respectively.",
      Country: "UK",
    },
    KO: {
      Symbol: "KO",
      EPS: "2.27",
      PERatio: "25.89",
      Name: "The Coca-Cola Company",
      Description: "The Coca-Cola Company is an American multinational beverage corporation incorporated under Delaware's General Corporation Law and headquartered in Atlanta, Georgia. The Coca-Cola Company has interests in the manufacturing, retailing, and marketing of nonalcoholic beverage concentrates and syrups.",
      Country: "USA",
    },
    TMO: {
      Symbol: "TMO",
      EPS: "15.35",
      PERatio: "36.62",
      Name: "Thermo Fisher Scientific Inc",
      Description: "Thermo Fisher Scientific is an American provisioner of scientific instrumentation, reagents and consumables, and software and services to healthcare, life science, and other laboratories in academia, government, and industry (including in the biotechnology and pharmaceutical sectors). Based in Waltham, Massachusetts, Thermo Fisher was created in 2006 by the merger of Thermo Electron and Fisher Scientific, to form a company with US$ 9 billion in combined revenues.",
      Country: "USA",
    },
    MCD: {
      Symbol: "MCD",
      EPS: "9.32",
      PERatio: "3.36",
      Name: "McDonalds Corporation",
      Description: "McDonald's Corporation is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States. They rechristened their business as a hamburger stand, and later turned the company into a franchise, with the Golden Arches logo being introduced in 1953 at a location in Phoenix, Arizona.",
      Country: "USA",
    },
    BA: {
      Symbol: "BA",
      EPS: "-7.09",
      PERatio: "None",
      Name: "The Boeing Company",
      Description: "The Boeing Company is an American multinational corporation that designs, manufactures, and sells airplanes, rotorcraft, rockets, satellites, telecommunications equipment, and missiles worldwide. The company also provides leasing and product support services.",
      Country: "USA",
    },
    GS: {
      Symbol: "GS",
      EPS: "23.51",
      PERatio: "15.27",
      Name: "Goldman Sachs Group Inc",
      Description: "The Goldman Sachs Group, Inc., is an American multinational investment bank and financial services company headquartered in New York City. It offers services in investment management, securities, asset management, prime brokerage, and securities underwriting. It also provides investment banking to institutional investors.",
      Country: "USA",
    },
    MSFT: {
      Symbol: "MSFT",
      EPS: "8.05",
      PERatio: "38.36",
      Name: "Microsoft Corporation",
      Description: "Microsoft Corporation is an American multinational technology company headquartered in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      Country: "USA",
    },
    FB: {
      Symbol: "FB",
      EPS: "14.71",
      PERatio: "27.66",
      Name: "Facebook, Inc. Class A",
      Description: "Facebook, Inc. is an American multinational technology conglomerate headquartered in Menlo Park, California. It was founded by Mark Zuckerberg along with his fellow roommates and students at Harvard College.",
      Country: "USA",
    },
    TSM: {
      Symbol: "TSM",
      EPS: "2.60",
      PERatio: "27.49",
      Name: "Taiwan Semiconductor Manufacturing Company Limited",
      Description: "Taiwan Semiconductor Manufacturing Company Limited is a Taiwanese multinational semiconductor contract manufacturing and design company. It is the world's most advanced and largest dedicated independent semiconductor foundry.",
      Country: "Taiwan",
    },
    NVDA: {
      Symbol: "NVDA",
      EPS: "11.73",
      PERatio: "81.43",
      Name: "NVIDIA Corporation",
      Description: "NVIDIA Corporation is an American multinational technology company incorporated in Delaware and based in Santa Clara, California. It designs graphics processing units for the gaming and professional markets, as well as system on a chip units for the mobile computing and automotive market.",
      Country: "USA",
    },
    JNJ: {
      Symbol: "JNJ",
      EPS: "6.29",
      PERatio: "25.94",
      Name: "Johnson & Johnson",
      Description: "Johnson & Johnson is an American multinational corporation founded in 1886 that develops medical devices, pharmaceutical, and consumer packaged goods.",
      Country: "USA",
    },
    MA: {
      Symbol: "MA",
      EPS: "7.48",
      PERatio: "52.64",
      Name: "Mastercard Incorporated Class A",
      Description: "Mastercard Incorporated is an American multinational financial services corporation headquartered in the Mastercard International Global Headquarters in Purchase, New York, United States.",
      Country: "USA",
    },
    DIS: {
      Symbol: "DIS",
      EPS: "-1.35",
      PERatio: "None",
      Name: "The Walt Disney Company",
      Description: "The Walt Disney Company, commonly known as Disney, is an American diversified multinational mass media and entertainment conglomerate headquartered in Burbank, California.",
      Country: "USA",
    },
    PYPL: {
      Symbol: "PYPL",
      EPS: "4.41",
      PERatio: "70.93",
      Name: "PayPal Holdings, Inc.",
      Description: "PayPal Holdings, Inc. is an American company operating an online payments system in majority of countries that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.",
      Country: "USA",
    },
    HD: {
      Symbol: "HD",
      EPS: "12.94",
      PERatio: "26.13",
      Name: "The Home Depot, Inc.",
      Description: "The Home Depot, Inc. is the largest home improvement retailer in the United States, supplying tools, construction products, and services.",
      Country: "USA",
    },
    UNH: {
      Symbol: "UNH",
      EPS: "16.81",
      PERatio: "22.94",
      Name: "UnitedHealth Group Incorporated",
      Description: "UnitedHealth Group Incorporated is an American for-profit managed health care company based in Minnetonka, Minnesota. It is ranked 7th on the Fortune 500 rankings of the largest United States corporations by total revenue.",
      Country: "USA",
    },
    MSFT: {
      Symbol: "MSFT",
      EPS: "9.04",
      PERatio: "37.34",
      Name: "Microsoft Corporation",
      Description: "Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      Country: "USA",
    },
  
    NVDA: {
      Symbol: "NVDA",
      EPS: "8.06",
      PERatio: "76.54",
      Name: "NVIDIA Corporation",
      Description: "NVIDIA Corporation is an American technology company that designs graphics processing units (GPUs) for gaming and professional markets, as well as system on a chip units (SoCs) for the mobile computing and automotive market.",
      Country: "USA",
    },
  
    FB: {
      Symbol: "FB",
      EPS: "11.19",
      PERatio: "25.21",
      Name: "Facebook, Inc.",
      Description: "Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California. It was founded by Mark Zuckerberg, along with his fellow roommates and students at Harvard University, who were Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.",
      Country: "USA",
    },
  
    CRM: {
      Symbol: "CRM",
      EPS: "3.38",
      PERatio: "154.45",
      Name: "Salesforce.com, Inc.",
      Description: "Salesforce.com, Inc. is an American cloud-based software company headquartered in San Francisco, California. It provides customer relationship management (CRM) service and also sells a complementary suite of enterprise applications focused on customer service, marketing automation, analytics, and application development.",
      Country: "USA",
    },
  
    PYPL: {
      Symbol: "PYPL",
      EPS: "3.54",
      PERatio: "76.27",
      Name: "PayPal Holdings, Inc.",
      Description: "PayPal Holdings, Inc. is an American company operating an online payments system in the majority of countries that support online money transfers, and serves as an electronic alternative to traditional paper methods like checks and money orders.",
      Country: "USA",
    },
  
    NKE: {
      Symbol: "NKE",
      EPS: "3.89",
      PERatio: "73.41",
      Name: "Nike, Inc.",
      Description: "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.",
      Country: "USA",
    },
  
    HD: {
      Symbol: "HD",
      EPS: "12.87",
      PERatio: "24.86",
      Name: "The Home Depot, Inc.",
      Description: "The Home Depot, Inc. is the largest home improvement retailer in the United States, supplying tools, construction products, and services.",
      Country: "USA",
    },
  
    DIS: {
      Symbol: "DIS",
      EPS: "1.99",
      PERatio: "168.84",
      Name: "The Walt Disney Company",
      Description: "The Walt Disney Company, commonly known as Disney, is an American multinational diversified entertainment and media conglomerate headquartered at the Walt Disney Studios complex in Burbank, California.",
      Country: "USA",
    },
  
    PFE: {
      Symbol: "PFE",
      EPS: "2.88",
      PERatio: "16.29",
      Name: "Pfizer Inc.",
      Description: "Pfizer Inc. is an American multinational pharmaceutical corporation. It is one of the world's largest pharmaceutical companies and ranked 64th on the 2021 Fortune 500 list of the largest United States corporations by total revenue.",
      Country: "USA",
    },
  
    ORCL: {
      Symbol: "ORCL",
      EPS: "3.09",
      PERatio: "17.25",
      Name: "Oracle Corporation",
      Description: "Oracle Corporation is an American multinational computer technology corporation that specializes in developing and marketing database software and technology, cloud engineered systems, and enterprise software products.",
      Country: "USA",
    },
    ADBE: {
        Symbol: "ADBE",
        EPS: "12.85",
        PERatio: "60.23",
        Name: "Adobe Inc.",
        Description: "Adobe Inc. is an American multinational computer software company known for its creative software products, such as Photoshop, Illustrator, InDesign, and more. It also offers marketing and analytics software solutions.",
        Country: "USA",
      },
      CRM: {
        Symbol: "CRM",
        EPS: "4.22",
        PERatio: "78.11",
        Name: "Salesforce.com, Inc.",
        Description: "Salesforce.com, Inc. is an American cloud-based software company that provides customer relationship management (CRM) service and other enterprise solutions. It is a major player in the CRM software industry.",
        Country: "USA",
      },
      TSM: {
        Symbol: "TSM",
        EPS: "3.88",
        PERatio: "35.16",
        Name: "Taiwan Semiconductor Manufacturing Company Limited",
        Description: "Taiwan Semiconductor Manufacturing Company Limited is a Taiwanese multinational semiconductor manufacturing company. It is one of the world's largest and most advanced semiconductor chip manufacturers.",
        Country: "Taiwan",
      },
      ORCL: {
        Symbol: "ORCL",
        EPS: "3.27",
        PERatio: "16.78",
        Name: "Oracle Corporation",
        Description: "Oracle Corporation is an American multinational computer technology corporation that provides database software, cloud engineered systems, and enterprise software products. Oracle is one of the world's largest software companies.",
        Country: "USA",
      },
      NVS: {
        Symbol: "NVS",
        EPS: "4.42",
        PERatio: "16.37",
        Name: "Novartis AG",
        Description: "Novartis AG is a Swiss multinational pharmaceutical company that researches, develops, manufactures, and markets a wide range of healthcare products, including pharmaceuticals, generic drugs, vaccines, and more.",
        Country: "Switzerland",
      },
      UNH: {
        Symbol: "UNH",
        EPS: "17.40",
        PERatio: "22.75",
        Name: "UnitedHealth Group Incorporated",
        Description: "UnitedHealth Group Incorporated is an American for-profit managed healthcare company that offers health insurance services and operates a large network of physicians and healthcare facilities.",
        Country: "USA",
      },
      BABA: {
        Symbol: "BABA",
        EPS: "8.73",
        PERatio: "17.92",
        Name: "Alibaba Group Holding Limited",
        Description: "Alibaba Group Holding Limited is a Chinese multinational conglomerate specializing in e-commerce, retail, internet, and technology. It is one of the world's largest e-commerce companies.",
        Country: "China",
      },
      NKE: {
        Symbol: "NKE",
        EPS: "3.79",
        PERatio: "50.78",
        Name: "Nike, Inc.",
        Description: "Nike, Inc. is an American multinational corporation that designs, develops, and manufactures athletic and lifestyle footwear, apparel, equipment, and accessories.",
        Country: "USA",
      },
      ASML: {
        Symbol: "ASML",
        EPS: "10.59",
        PERatio: "42.50",
        Name: "ASML Holding N.V.",
        Description: "ASML Holding N.V. is a Dutch company and one of the largest suppliers of photolithography equipment used in the semiconductor manufacturing process.",
        Country: "Netherlands",
      },
      TM: {
        Symbol: "TM",
        EPS: "11.33",
        PERatio: "11.62",
        Name: "Toyota Motor Corporation",
        Description: "Toyota Motor Corporation is a Japanese multinational automotive manufacturer that produces a wide range of vehicles, including cars, trucks, and motorcycles.",
        Country: "Japan",
      },
      PEP: {
        Symbol: "PEP",
        EPS: "5.12",
        PERatio: "25.84",
        Name: "PepsiCo, Inc.",
        Description: "PepsiCo, Inc. is an American multinational food and beverage company known for its iconic brands like Pepsi, Lay's, Gatorade, Tropicana, and Quaker.",
        Country: "USA",
      },
      BAC: {
        Symbol: "BAC",
        EPS: "5.15",
        PERatio: "13.55",
        Name: "Bank of America Corporation",
        Description: "Bank of America Corporation is an American multinational investment bank and financial services company. It is one of the largest banks in the United States.",
        Country: "USA",
      },
      INTC: {
        Symbol: "INTC",
        EPS: "4.94",
        PERatio: "12.20",
        Name: "Intel Corporation",
        Description: "Intel Corporation is an American multinational corporation and technology company known for its processors and other semiconductor products.",
        Country: "USA",
      },
      VOD: {
        Symbol: "VOD",
        EPS: "1.58",
        PERatio: "13.84",
        Name: "Vodafone Group Plc",
        Description: "Vodafone Group Plc is a British multinational telecommunications company that provides mobile and broadband services in various countries.",
        Country: "UK",
      },
      NTT: {
        Symbol: "NTT",
        EPS: "4.91",
        PERatio: "9.95",
        Name: "Nippon Telegraph and Telephone Corporation",
        Description: "Nippon Telegraph and Telephone Corporation is a Japanese telecommunications company that provides fixed-line, mobile, and internet services.",
        Country: "Japan",
      },
      SAP: {
        Symbol: "SAP",
        EPS: "6.26",
        PERatio: "21.63",
        Name: "SAP SE",
        Description: "SAP SE is a German multinational software corporation that provides enterprise software solutions for businesses of all sizes and industries.",
        Country: "Germany",
      },
      TOT: {
        Symbol: "TOT",
        EPS: "2.75",
        PERatio: "10.60",
        Name: "TotalEnergies SE",
        Description: "TotalEnergies SE (formerly Total S.A.) is a French multinational integrated oil and gas company and one of the largest oil companies in the world.",
        Country: "France",
      },
      TMUS: {
        Symbol: "TMUS",
        EPS: "2.44",
        PERatio: "43.62",
        Name: "T-Mobile US, Inc.",
        Description: "T-Mobile US, Inc. is an American wireless network operator that provides mobile communications services and products.",
        Country: "USA",
      },
      CSCO: {
        Symbol: "CSCO",
        EPS: "3.43",
        PERatio: "18.34",
        Name: "Cisco Systems, Inc.",
        Description: "Cisco Systems, Inc. is an American multinational technology conglomerate that develops, manufactures, and sells networking hardware, software, and telecommunications equipment.",
        Country: "USA",
      },
  };

  export default stockData;
