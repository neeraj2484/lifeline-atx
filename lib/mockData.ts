import { db } from "./db";

const mockFloodAlert = {
  "type": "FeatureCollection",
    "features": [
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.870bf197fee24eda7506e5fa972b19a1ecc11da7.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.870bf197fee24eda7506e5fa972b19a1ecc11da7.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.870bf197fee24eda7506e5fa972b19a1ecc11da7.002.1",
                "areaDesc": "Southeast Bighorn Basin; Owl Creek and Bridger Mountains; Wind River Basin",
                "geocode": {
                    "SAME": [
                        "056043",
                        "056013",
                        "056017",
                        "056025"
                    ],
                    "UGC": [
                        "WYZ006",
                        "WYZ007",
                        "WYZ017"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/WYZ006",
                    "https://api.weather.gov/zones/forecast/WYZ007",
                    "https://api.weather.gov/zones/forecast/WYZ017"
                ],
                "references": [],
                "sent": "2025-08-21T12:05:00-06:00",
                "effective": "2025-08-21T12:05:00-06:00",
                "onset": "2025-08-21T12:05:00-06:00",
                "expires": "2025-08-22T13:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Riverton WY",
                "headline": "Air Quality Alert issued August 21 at 12:05PM MDT by NWS Riverton WY",
                "description": "The following message is transmitted on behalf of the Wyoming\nDepartment of Environmental Quality, Air Quality Division, and the\nWyoming Department of Health.\n\n* WHAT...Air Quality Alert for Wildfire Smoke.\n\n* WHERE...Portions of the Bighorn Basin, Owl Creek and Bridger\nMountains, and the Wind River Basin.\n\n* WHEN...Through 1 PM Thursday, August 21.\n\n* IMPACTS...Smoke from various wildfires across the region, including\nthe Red Canyon Fire, will continue to spread across the region\ntoday.\n\nHEALTH INFORMATION...The Wyoming Department of Health recommends\nthat the elderly, young children, and individuals with respiratory\nproblems avoid excessive physical exertion and minimize outdoor\nactivities during this time. Wildfire smoke is made up of a variety\nof pollutants, including particulate matter and ozone, which can\ncause respiratory health effects. Although these people are most\nsusceptible to health impacts, the Department of Health also advises\nthat everyone should avoid prolonged exposure to poor air quality\nconditions.\n\nCURRENT CONDITIONS...The Wyoming Department of Environmental\nQuality, Air Quality Division offers near real-time air quality data\nfor Wyoming's monitoring stations and health effects information to\nhelp the public interpret current conditions. Current air quality\nconditions across the state of Wyoming can be found at\nhttp://www.wyvisnet.com/.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQARIW"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KRIW 211805"
                    ],
                    "NWSheadline": [
                        "AIR QUALITY ALERT IN EFFECT UNTIL 1 PM MDT THIS AFTERNOON"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.870bf197fee24eda7506e5fa972b19a1ecc11da7.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.870bf197fee24eda7506e5fa972b19a1ecc11da7.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.870bf197fee24eda7506e5fa972b19a1ecc11da7.001.1",
                "areaDesc": "Southwest Bighorn Basin",
                "geocode": {
                    "SAME": [
                        "056017"
                    ],
                    "UGC": [
                        "WYZ005"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/WYZ005"
                ],
                "references": [],
                "sent": "2025-08-21T12:05:00-06:00",
                "effective": "2025-08-21T12:05:00-06:00",
                "onset": "2025-08-21T12:05:00-06:00",
                "expires": "2025-08-22T13:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Riverton WY",
                "headline": "Air Quality Alert issued August 21 at 12:05PM MDT by NWS Riverton WY",
                "description": "The following message is transmitted on behalf of the Wyoming\nDepartment of Environmental Quality, Air Quality Division, and the\nWyoming Department of Health.\n\n* WHAT...Air Quality Alert for Wildfire Smoke.\n\n* WHERE...Hot Springs County, mainly near the Red Canyon Wildfire in\neastern Hot Springs County.\n\n* WHEN...1 PM Thursday August 21 through 1 PM Friday August 22.\n\n* IMPACTS...Smoke from the Red Canyon Fire, will continue to spread\nacross the area today into Friday morning.\n\nHEALTH INFORMATION...The Wyoming Department of Health recommends\nthat the elderly, young children, and individuals with respiratory\nproblems avoid excessive physical exertion and minimize outdoor\nactivities during this time. Wildfire smoke is made up of a variety\nof pollutants, including particulate matter and ozone, which can\ncause respiratory health effects. Although these people are most\nsusceptible to health impacts, the Department of Health also advises\nthat everyone should avoid prolonged exposure to poor air quality\nconditions.\n\nCURRENT CONDITIONS...The Wyoming Department of Environmental\nQuality, Air Quality Division offers near real-time air quality data\nfor Wyoming's monitoring stations and health effects information to\nhelp the public interpret current conditions. Current air quality\nconditions across the state of Wyoming can be found at\nhttp://www.wyvisnet.com/.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQARIW"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KRIW 211805"
                    ],
                    "NWSheadline": [
                        "AIR QUALITY ALERT IN EFFECT UNTIL 1 PM MDT FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.19902139aad3d23f9a163f51a602983d809f03a4.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -82.11,
                            33.44
                        ],
                        [
                            -81.94,
                            33.55
                        ],
                        [
                            -81.35,
                            33.15
                        ],
                        [
                            -81.39999999999999,
                            33.12
                        ],
                        [
                            -81.53999999999999,
                            33.159999899999995
                        ],
                        [
                            -81.61999999999999,
                            33.099999999999994
                        ],
                        [
                            -81.56999989999998,
                            33.05
                        ],
                        [
                            -81.55999999999999,
                            33.059999999999995
                        ],
                        [
                            -81.55999999999999,
                            33.03999999999999
                        ],
                        [
                            -81.53999999999999,
                            33.04999999999999
                        ],
                        [
                            -81.53999999999999,
                            33.03999999999999
                        ],
                        [
                            -81.74999999999999,
                            32.919999999999995
                        ],
                        [
                            -82.11,
                            33.44
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.19902139aad3d23f9a163f51a602983d809f03a4.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.19902139aad3d23f9a163f51a602983d809f03a4.001.1",
                "areaDesc": "Richmond; Burke; Aiken; Barnwell",
                "geocode": {
                    "SAME": [
                        "013245",
                        "013033",
                        "045003",
                        "045011"
                    ],
                    "UGC": [
                        "GAZ065",
                        "GAZ077",
                        "SCZ030",
                        "SCZ035"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/GAZ065",
                    "https://api.weather.gov/zones/forecast/GAZ077",
                    "https://api.weather.gov/zones/forecast/SCZ030",
                    "https://api.weather.gov/zones/forecast/SCZ035"
                ],
                "references": [],
                "sent": "2025-08-21T14:05:00-04:00",
                "effective": "2025-08-21T14:05:00-04:00",
                "onset": "2025-08-21T14:05:00-04:00",
                "expires": "2025-08-21T15:00:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Columbia SC",
                "headline": "Special Weather Statement issued August 21 at 2:05PM EDT by NWS Columbia SC",
                "description": "At 204 PM EDT, Doppler radar was tracking multiple strong\nthunderstorms near Augusta Regional Airport, or 8 miles south of\nAugusta, moving southeast at 15 mph.\n\nHAZARD...Wind gusts up to 50 mph.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects.\n\nLocations impacted include...\nNorth Augusta, Savannah River Site, Augusta, Plant Vogtle,\nClearwater, Belvedere, Jackson, Sardis, Glendale, South Augusta,\nMidtown, Summerville, Daniel Field, McBean, Augusta Regional Airport,\nBurnettown, Girard, West End Augusta, New Savannah Bluff Lock & Dam\nPark, and Glenn Hills.\n\nThis includes the following highways...\nInterstate 520 in Georgia between mile markers 3 and 15.\nInterstate 520 in South Carolina between mile markers 16 and 21.",
                "instruction": "If outdoors, consider seeking shelter inside a building.\n\nTorrential rainfall is also occurring with this storm and may lead to\nlocalized flooding. Do not drive your vehicle through flooded\nroadways.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSCAE"
                    ],
                    "WMOidentifier": [
                        "WWUS82 KCAE 211805"
                    ],
                    "NWSheadline": [
                        "A strong thunderstorm will impact portions of northeastern Burke, eastern Richmond, southwestern Barnwell and southwestern Aiken Counties through 300 PM EDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T18:04:00-00:00...storm...326DEG...15KT...33.36,-81.92"
                    ],
                    "maxWindGust": [
                        "50 MPH"
                    ],
                    "maxHailSize": [
                        "0.00"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5bc1ed0c56ac2dacd98bb93324406892dc7dc4a6.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -82.97,
                            30.87
                        ],
                        [
                            -83,
                            30.86
                        ],
                        [
                            -83.01,
                            30.849999999999998
                        ],
                        [
                            -83.17,
                            30.849999999999998
                        ],
                        [
                            -83.2,
                            31.06
                        ],
                        [
                            -83.17,
                            31.06
                        ],
                        [
                            -83.16,
                            31.15
                        ],
                        [
                            -82.97,
                            31.139999999999997
                        ],
                        [
                            -82.97,
                            30.87
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.5bc1ed0c56ac2dacd98bb93324406892dc7dc4a6.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.5bc1ed0c56ac2dacd98bb93324406892dc7dc4a6.001.1",
                "areaDesc": "Lowndes; Lanier",
                "geocode": {
                    "SAME": [
                        "013185",
                        "013173"
                    ],
                    "UGC": [
                        "GAZ160",
                        "GAZ161"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/GAZ160",
                    "https://api.weather.gov/zones/forecast/GAZ161"
                ],
                "references": [],
                "sent": "2025-08-21T14:02:00-04:00",
                "effective": "2025-08-21T14:02:00-04:00",
                "onset": "2025-08-21T14:02:00-04:00",
                "expires": "2025-08-21T14:45:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Tallahassee FL",
                "headline": "Special Weather Statement issued August 21 at 2:02PM EDT by NWS Tallahassee FL",
                "description": "At 202 PM EDT, Doppler radar was tracking a strong thunderstorm near\nMayday, or 8 miles south of Lakeland, moving northeast at 10 mph.\n\nHAZARD...Wind gusts up to 40 mph.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects.\n\nLocations impacted include...\nLakeland, Moody Air Force Base, Meigs, Naylor, Courthouse, Greenwood,\nHansell, Stockton, and Teeterville.",
                "instruction": "If outdoors, consider seeking shelter inside a building.\n\nThis storm may intensify, so be certain to monitor local radio\nstations and available television stations for additional information\nand possible warnings from the National Weather Service.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSTAE"
                    ],
                    "WMOidentifier": [
                        "WWUS82 KTAE 211802"
                    ],
                    "NWSheadline": [
                        "A STRONG THUNDERSTORM WILL IMPACT LANIER AND NORTHEASTERN LOWNDES COUNTIES THROUGH 245 PM EDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T18:02:00-00:00...storm...240DEG...11KT...30.92,-83.04"
                    ],
                    "maxWindGust": [
                        "40 MPH"
                    ],
                    "maxHailSize": [
                        "0.00"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dce65251d0cf6b63ffc1ae40d10422eb7eb6df96.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -90.66,
                            30.39
                        ],
                        [
                            -90.55,
                            30.44
                        ],
                        [
                            -90.55,
                            30.450000000000003
                        ],
                        [
                            -90.47,
                            30.500000000000004
                        ],
                        [
                            -90.24,
                            30.450000000000003
                        ],
                        [
                            -90.24,
                            30.42
                        ],
                        [
                            -90.4599999,
                            30.3
                        ],
                        [
                            -90.47,
                            30.32
                        ],
                        [
                            -90.53999999999999,
                            30.29
                        ],
                        [
                            -90.55999999999999,
                            30.24
                        ],
                        [
                            -90.6,
                            30.22
                        ],
                        [
                            -90.66,
                            30.23
                        ],
                        [
                            -90.69,
                            30.17
                        ],
                        [
                            -90.78999999999999,
                            30.26
                        ],
                        [
                            -90.78999999999999,
                            30.28
                        ],
                        [
                            -90.80999999999999,
                            30.28
                        ],
                        [
                            -90.82999999999998,
                            30.290000000000003
                        ],
                        [
                            -90.66,
                            30.39
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dce65251d0cf6b63ffc1ae40d10422eb7eb6df96.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.dce65251d0cf6b63ffc1ae40d10422eb7eb6df96.001.1",
                "areaDesc": "Central Tangipahoa; Lower Tangipahoa; Southern Livingston",
                "geocode": {
                    "SAME": [
                        "022105",
                        "022063"
                    ],
                    "UGC": [
                        "LAZ081",
                        "LAZ082",
                        "LAZ084"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/LAZ081",
                    "https://api.weather.gov/zones/forecast/LAZ082",
                    "https://api.weather.gov/zones/forecast/LAZ084"
                ],
                "references": [],
                "sent": "2025-08-21T13:00:00-05:00",
                "effective": "2025-08-21T13:00:00-05:00",
                "onset": "2025-08-21T13:00:00-05:00",
                "expires": "2025-08-21T13:30:00-05:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS New Orleans LA",
                "headline": "Special Weather Statement issued August 21 at 1:00PM CDT by NWS New Orleans LA",
                "description": "At 100 PM CDT, Doppler radar was tracking strong thunderstorms along\na line extending from Whitehall to Ponchatoula. These storms were\nnearly stationary.\n\nHAZARD...Winds in excess of 40 mph and pea size hail.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects. Minor damage to outdoor objects is\npossible.\n\nLocations impacted include...\nHammond, Ponchatoula, French Settlement, Springfield, Whitehall, and\nKillian.\n\nThis includes the following Interstates...\nInterstate 12 between mile markers 38 and 45.\nInterstate 55 in Louisiana between mile markers 18 and 30.",
                "instruction": "If outdoors, consider seeking shelter inside a building.\n\nThese storms may intensify, so be certain to monitor local radio\nstations and available television stations for additional information\nand possible warnings from the National Weather Service.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSLIX"
                    ],
                    "WMOidentifier": [
                        "WWUS84 KLIX 211800"
                    ],
                    "NWSheadline": [
                        "STRONG THUNDERSTORMS WILL IMPACT PORTIONS OF SOUTHEASTERN LIVINGSTON AND SOUTHERN TANGIPAHOA PARISHES THROUGH 130 PM CDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T18:00:00-00:00...storm...246DEG...2KT...30.3,-90.69 30.42,-90.46"
                    ],
                    "maxWindGust": [
                        "40 MPH"
                    ],
                    "maxHailSize": [
                        "0.25"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.26d816b23a22bc89949dbb64e3be96317aa135d4.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.26d816b23a22bc89949dbb64e3be96317aa135d4.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.26d816b23a22bc89949dbb64e3be96317aa135d4.001.1",
                "areaDesc": "Coastal Hancock; Coastal Washington",
                "geocode": {
                    "SAME": [
                        "023009",
                        "023029"
                    ],
                    "UGC": [
                        "MEZ029",
                        "MEZ030"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MEZ029",
                    "https://api.weather.gov/zones/forecast/MEZ030"
                ],
                "references": [],
                "sent": "2025-08-21T13:59:00-04:00",
                "effective": "2025-08-21T13:59:00-04:00",
                "onset": "2025-08-22T22:00:00-04:00",
                "expires": "2025-08-21T22:00:00-04:00",
                "ends": "2025-08-23T00:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Caribou ME",
                "headline": "Coastal Flood Statement issued August 21 at 1:59PM EDT until August 23 at 12:00AM EDT by NWS Caribou ME",
                "description": "* WHAT....Waves building to 7 to 10 feet, with a wave period of 13\nto 17 seconds. Minor splashover is possible at high tide Friday\nnight.\n\n* WHERE...Coastal Hancock and Coastal Washington Counties.\n\n* WHEN...For the High Surf Advisory, from 6 PM this evening to 2\nPM EDT Saturday. For the Coastal Flood Statement, Friday evening\nat high tide. SHORELINE FLOOD IMPACTS...Building waves will\ncause minor splash-over on exposed coastal roads and shorelines.\nPedestrians and motorists should use caution along shorelines.Large\nwaves can present a danger to people on rocks above the water.\nStay away from rock outcrops along the shoreline exposed to\nocean waves...as waves can easily sweep people into the cold\nocean water.\n* IMPACTS...Rip currents and sneaker waves will lead to dangerous\nbeach conditions. Some minor beach erosion is possible. Minor\nsplashover possible during high tide Friday Evening.\n\nLarge waves can present a danger to people on rocks above the\nwater. Stay away from rock outcrops along the shoreline exposed\nto ocean waves...as waves can easily sweep people into the cold\nocean water.",
                "instruction": "A High Surf Advisory Means That High Surf Will Affect Beaches In\nThe Advisory area...producing rip currents and localized beach\nerosion.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWCAR"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KCAR 211759"
                    ],
                    "NWSheadline": [
                        "HIGH SURF ADVISORY REMAINS IN EFFECT FROM 6 PM THIS EVENING TO 2 PM EDT SATURDAY... ...COASTAL FLOOD STATEMENT IN EFFECT FRIDAY EVENING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KCAR.CF.S.0001.250823T0200Z-250823T0400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T00:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d791b08b44e754b2beca6887407592d46d541127.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -86.39,
                            30.39
                        ],
                        [
                            -86.33,
                            30.38
                        ],
                        [
                            -86.31,
                            30.419999999999998
                        ],
                        [
                            -86.24000000000001,
                            30.389999999999997
                        ],
                        [
                            -86.12,
                            30.379999999999995
                        ],
                        [
                            -86.11,
                            30.389999999999997
                        ],
                        [
                            -86.14,
                            30.419999999999998
                        ],
                        [
                            -86.12,
                            30.43
                        ],
                        [
                            -86.16000000000001,
                            30.44
                        ],
                        [
                            -86.13000000000001,
                            30.470000000000002
                        ],
                        [
                            -86.19000000000001,
                            30.46
                        ],
                        [
                            -86.20000000000002,
                            30.5
                        ],
                        [
                            -86.22000000000001,
                            30.48
                        ],
                        [
                            -86.39000000000001,
                            30.46
                        ],
                        [
                            -86.39000000000001,
                            30.490000000000002
                        ],
                        [
                            -86.15000000000002,
                            30.71
                        ],
                        [
                            -85.58000000000003,
                            30.7
                        ],
                        [
                            -85.84000000000003,
                            30.2
                        ],
                        [
                            -86.04000000000003,
                            30.21
                        ],
                        [
                            -86.39000000000003,
                            30.310000000000002
                        ],
                        [
                            -86.39,
                            30.39
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d791b08b44e754b2beca6887407592d46d541127.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.d791b08b44e754b2beca6887407592d46d541127.001.1",
                "areaDesc": "Central Walton; Washington; Inland Bay; South Walton; Coastal Bay",
                "geocode": {
                    "SAME": [
                        "012131",
                        "012133",
                        "012005"
                    ],
                    "UGC": [
                        "FLZ008",
                        "FLZ010",
                        "FLZ012",
                        "FLZ108",
                        "FLZ112"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/FLZ008",
                    "https://api.weather.gov/zones/forecast/FLZ010",
                    "https://api.weather.gov/zones/forecast/FLZ012",
                    "https://api.weather.gov/zones/forecast/FLZ108",
                    "https://api.weather.gov/zones/forecast/FLZ112"
                ],
                "references": [],
                "sent": "2025-08-21T13:58:00-04:00",
                "effective": "2025-08-21T13:58:00-04:00",
                "onset": "2025-08-21T13:58:00-04:00",
                "expires": "2025-08-21T14:45:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Tallahassee FL",
                "headline": "Special Weather Statement issued August 21 at 1:58PM EDT by NWS Tallahassee FL",
                "description": "At 158 PM EDT/1258 PM CDT/, Doppler radar was tracking strong\nthunderstorms along a line extending from 12 miles southeast of De\nFuniak Springs to 7 miles south of Destin. Movement was east at 20\nmph.\n\nHAZARD...Wind gusts up to 40 mph.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects.\n\nLocations impacted include...\nPanama City Beach, Vernon, Santa Rosa Beach, De Funiak Springs, Eglin\nAir Force Base, Live Oak, Freeport, Ponce De Leon, Ebro, Hinsons\nCrossroads, Portland, Seminole Hills, Villa Tasso, Gulf Resort Beach,\nBlue Mountain Beach, Seaside, Rock Hill, Holmes Valley, Millers\nFerry, and Sunnyside.",
                "instruction": "If outdoors, consider seeking shelter inside a building.\n\nThese storms may intensify, so be certain to monitor local radio\nstations and available television stations for additional information\nand possible warnings from the National Weather Service.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSTAE"
                    ],
                    "WMOidentifier": [
                        "WWUS82 KTAE 211758"
                    ],
                    "NWSheadline": [
                        "STRONG THUNDERSTORMS WILL IMPACT NORTHWESTERN BAY...SOUTHERN WALTON AND CENTRAL WASHINGTON COUNTIES THROUGH 245 PM EDT/145 PM CDT/"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:58:00-00:00...storm...270DEG...17KT...30.6,-85.97 30.29,-86.54"
                    ],
                    "maxWindGust": [
                        "40 MPH"
                    ],
                    "maxHailSize": [
                        "0.00"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.016b1baf924dd17269c8d8b918e6add52c839dc9.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -97.12,
                            34.18
                        ],
                        [
                            -97.05000000000001,
                            34.36
                        ],
                        [
                            -96.83000000000001,
                            34.339999999999996
                        ],
                        [
                            -96.81000000000002,
                            34.169999999999995
                        ],
                        [
                            -97.12,
                            34.18
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.016b1baf924dd17269c8d8b918e6add52c839dc9.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.016b1baf924dd17269c8d8b918e6add52c839dc9.001.1",
                "areaDesc": "Murray; Carter; Johnston",
                "geocode": {
                    "SAME": [
                        "040099",
                        "040019",
                        "040069"
                    ],
                    "UGC": [
                        "OKZ041",
                        "OKZ046",
                        "OKZ047"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/OKZ041",
                    "https://api.weather.gov/zones/forecast/OKZ046",
                    "https://api.weather.gov/zones/forecast/OKZ047"
                ],
                "references": [],
                "sent": "2025-08-21T12:58:00-05:00",
                "effective": "2025-08-21T12:58:00-05:00",
                "onset": "2025-08-21T12:58:00-05:00",
                "expires": "2025-08-21T13:30:00-05:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Norman OK",
                "headline": "Special Weather Statement issued August 21 at 12:58PM CDT by NWS Norman OK",
                "description": "At 1258 PM CDT, Doppler radar was tracking a strong thunderstorm 4\nmiles east of Gene Autry, moving south at 10 mph.\n\nHAZARD...Wind gusts of 40 mph.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects.\n\nLocations impacted include...\nArdmore, Dickson, Mannsville, and Gene Autry.",
                "instruction": "If outdoors, consider seeking shelter inside a building.\n\nThis storm may intensify, so be certain to monitor NOAA Weather\nRadio, local radio stations or available television stations for\nadditional information and possible warnings from the National\nWeather Service.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSOUN"
                    ],
                    "WMOidentifier": [
                        "WWUS84 KOUN 211758"
                    ],
                    "NWSheadline": [
                        "A strong thunderstorm will impact portions of southwestern Johnston, east central Carter and south central Murray Counties through 130 PM CDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:58:00-00:00...storm...005DEG...9KT...34.28,-96.95"
                    ],
                    "maxWindGust": [
                        "40 MPH"
                    ],
                    "maxHailSize": [
                        "0.00"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.427a996f49a558c7aae13bb447001766e23785a1.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -85.77,
                            34.26
                        ],
                        [
                            -85.81,
                            34.26
                        ],
                        [
                            -85.81,
                            34.239999999999995
                        ],
                        [
                            -85.84,
                            34.239999999999995
                        ],
                        [
                            -85.85000000000001,
                            34.199999999999996
                        ],
                        [
                            -85.97000000000001,
                            34.199999999999996
                        ],
                        [
                            -85.94000000000001,
                            34.49999999999999
                        ],
                        [
                            -85.70999990000001,
                            34.489999999999995
                        ],
                        [
                            -85.70000000000002,
                            34.31999999999999
                        ],
                        [
                            -85.77,
                            34.26
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.427a996f49a558c7aae13bb447001766e23785a1.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.427a996f49a558c7aae13bb447001766e23785a1.001.1",
                "areaDesc": "DeKalb",
                "geocode": {
                    "SAME": [
                        "001049"
                    ],
                    "UGC": [
                        "ALZ010"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/ALZ010"
                ],
                "references": [],
                "sent": "2025-08-21T12:57:00-05:00",
                "effective": "2025-08-21T12:57:00-05:00",
                "onset": "2025-08-21T12:57:00-05:00",
                "expires": "2025-08-21T13:30:00-05:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Huntsville AL",
                "headline": "Special Weather Statement issued August 21 at 12:57PM CDT by NWS Huntsville AL",
                "description": "At 1256 PM CDT, Doppler radar was tracking a strong thunderstorm near\nSand Rock, or 11 miles southwest of Little River Canyon National\nPreserve, moving south at 20 mph.\n\nHAZARD...Wind gusts up to 40 mph.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects.\n\nLocations impacted include...\nFort Payne, Rainsville, Fyffe, Pine Ridge, Lebanon, Guest, Collbran,\nDog Town, and Peeks Corner.",
                "instruction": "If outdoors, consider seeking shelter inside a building.\n\nTorrential rainfall is also occurring with this storm and may lead to\nlocalized flooding. Do not drive your vehicle through flooded\nroadways.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSHUN"
                    ],
                    "WMOidentifier": [
                        "WWUS84 KHUN 211757"
                    ],
                    "NWSheadline": [
                        "A STRONG THUNDERSTORM WILL IMPACT SOUTH CENTRAL DEKALB COUNTY THROUGH 130 PM CDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:56:00-00:00...storm...002DEG...19KT...34.3,-85.82"
                    ],
                    "maxWindGust": [
                        "40 MPH"
                    ],
                    "maxHailSize": [
                        "0.00"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9afceeed2d94bbb32a74eb0fe307cbbaf7f62aa8.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -81.86,
                            35.36
                        ],
                        [
                            -81.84,
                            35.31
                        ],
                        [
                            -81.91,
                            35.29
                        ],
                        [
                            -81.92999999999999,
                            35.339999999999996
                        ],
                        [
                            -81.86,
                            35.36
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9afceeed2d94bbb32a74eb0fe307cbbaf7f62aa8.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.9afceeed2d94bbb32a74eb0fe307cbbaf7f62aa8.001.1",
                "areaDesc": "Greater Rutherford",
                "geocode": {
                    "SAME": [
                        "037161"
                    ],
                    "UGC": [
                        "NCZ508"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/NCZ508"
                ],
                "references": [],
                "sent": "2025-08-21T13:57:00-04:00",
                "effective": "2025-08-21T13:57:00-04:00",
                "onset": "2025-08-21T13:57:00-04:00",
                "expires": "2025-08-21T14:30:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Greenville-Spartanburg SC",
                "headline": "Special Weather Statement issued August 21 at 1:57PM EDT by NWS Greenville-Spartanburg SC",
                "description": "At 155 PM EDT, Doppler radar was tracking a thunderstorm with very\nheavy rainfall over Forest City. This storm was nearly stationary.\n\nLocations to be impacted include...\nForest City.\n\nVery heavy rainfall rates up to 3 inches per hour will be possible\nin these areas.",
                "instruction": "Very heavy rainfall may flood areas with poor drainage, such as\nditches and underpasses. Avoid these areas and do not cross flooded\nroads. Water levels of small streams may also rise rapidly. Seek\nhigher ground if threatened by flood waters.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSGSP"
                    ],
                    "WMOidentifier": [
                        "WWUS82 KGSP 211757"
                    ],
                    "NWSheadline": [
                        "A THUNDERSTORM WITH HEAVY RAINFALL WILL IMPACT CENTRAL RUTHERFORD COUNTY UNTIL 230 PM EDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:55:00-00:00...storm...070DEG...2KT...35.32,-81.9"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.af4d494e1bb432a0a596233f63ae0bc957660cc3.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -82.02,
                            29.38
                        ],
                        [
                            -81.64999999999999,
                            29.439999999999998
                        ],
                        [
                            -81.63999999999999,
                            29.33
                        ],
                        [
                            -81.67999999999999,
                            29.319999999999997
                        ],
                        [
                            -81.66999999999999,
                            29.299999999999997
                        ],
                        [
                            -81.65999999999998,
                            29.299999999999997
                        ],
                        [
                            -81.63999999999999,
                            29.279999999999998
                        ],
                        [
                            -81.63999999999999,
                            29.24
                        ],
                        [
                            -82.00999999999999,
                            29.24
                        ],
                        [
                            -82.02,
                            29.38
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.af4d494e1bb432a0a596233f63ae0bc957660cc3.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.af4d494e1bb432a0a596233f63ae0bc957660cc3.001.1",
                "areaDesc": "Eastern Putnam; Eastern Marion; Central Marion",
                "geocode": {
                    "SAME": [
                        "012107",
                        "012083"
                    ],
                    "UGC": [
                        "FLZ137",
                        "FLZ140",
                        "FLZ240"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/FLZ137",
                    "https://api.weather.gov/zones/forecast/FLZ140",
                    "https://api.weather.gov/zones/forecast/FLZ240"
                ],
                "references": [],
                "sent": "2025-08-21T13:57:00-04:00",
                "effective": "2025-08-21T13:57:00-04:00",
                "onset": "2025-08-21T13:57:00-04:00",
                "expires": "2025-08-21T14:30:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Jacksonville FL",
                "headline": "Special Weather Statement issued August 21 at 1:57PM EDT by NWS Jacksonville FL",
                "description": "At 156 PM EDT, Doppler radar was tracking a strong thunderstorm near\nFort McCoy, moving east at 20 mph.\n\nHAZARD...Wind gusts around 40 mph.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects.\n\nLocations impacted include...\nFort McCoy, Salt Springs, and Burbank.",
                "instruction": "If outdoors, consider seeking shelter inside a building.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSJAX"
                    ],
                    "WMOidentifier": [
                        "WWUS82 KJAX 211757"
                    ],
                    "NWSheadline": [
                        "A STRONG THUNDERSTORM WILL IMPACT NORTHEASTERN MARION AND SOUTHERN PUTNAM COUNTIES THROUGH 230 PM EDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:56:00-00:00...storm...267DEG...19KT...29.29,-81.93"
                    ],
                    "maxWindGust": [
                        "40 MPH"
                    ],
                    "maxHailSize": [
                        "0.00"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6c9883029fbdc4367e0ab7c6a33d35e3ee7991d0.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -82.11,
                            33.52
                        ],
                        [
                            -82.05,
                            33.53
                        ],
                        [
                            -81.94,
                            33.46
                        ],
                        [
                            -81.94,
                            33.4099999
                        ],
                        [
                            -81.95,
                            33.4099999
                        ],
                        [
                            -81.94,
                            33.400000000000006
                        ],
                        [
                            -81.94,
                            33.370000000000005
                        ],
                        [
                            -81.94,
                            33.36000000000001
                        ],
                        [
                            -81.94,
                            33.35000000000001
                        ],
                        [
                            -82.12,
                            33.470000000000006
                        ],
                        [
                            -82.17,
                            33.52
                        ],
                        [
                            -82.11,
                            33.52
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6c9883029fbdc4367e0ab7c6a33d35e3ee7991d0.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.6c9883029fbdc4367e0ab7c6a33d35e3ee7991d0.001.1",
                "areaDesc": "Columbia, GA; Richmond, GA",
                "geocode": {
                    "SAME": [
                        "013073",
                        "013245"
                    ],
                    "UGC": [
                        "GAC073",
                        "GAC245"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/GAC073",
                    "https://api.weather.gov/zones/county/GAC245"
                ],
                "references": [],
                "sent": "2025-08-21T13:55:00-04:00",
                "effective": "2025-08-21T13:55:00-04:00",
                "onset": "2025-08-21T13:55:00-04:00",
                "expires": "2025-08-21T16:00:00-04:00",
                "ends": "2025-08-21T16:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Columbia SC",
                "headline": "Flood Advisory issued August 21 at 1:55PM EDT until August 21 at 4:00PM EDT by NWS Columbia SC",
                "description": "* WHAT...Flooding caused by excessive rainfall is expected.\n\n* WHERE...A portion of east central Georgia, including the following\ncounties, Columbia and Richmond.\n\n* WHEN...Until 400 PM EDT.\n\n* IMPACTS...Minor flooding in low-lying and poor drainage areas.\nPonding of water in urban or other areas is occurring or is\nimminent.\n\n* ADDITIONAL DETAILS...\n- At 155 PM EDT, Doppler radar indicated heavy rain due to\nthunderstorms. Minor flooding is ongoing or expected to begin\nshortly in the advisory area. Between 1 and 2 inches of rain\nhave fallen.\n- Additional rainfall amounts of 1 to 2 inches are expected\nover the area. This additional rain will result in minor\nflooding.\n- Some locations that will experience flooding include...\nNorth Augusta, Evans, Augusta, Martinez, Daniel Field,\nGlendale, Summerville, Midtown, Augusta National Golf Club,\nAugusta Mall, Village Plaza Shopping Center, Augusta Regional\nAirport, Minnick Park, Pendleton King Park, Forest Hills,\nHillcrest Memorial Park, Westover Memorial Park, Kendan Park,\nWestwick and Harrisburg.\n- This includes the following highways...\nInterstate 20 in Georgia between mile markers 194 and 199.\nInterstate 520 in Georgia between mile markers 1 and 5...and\nbetween mile markers 7 and 13.\n- http://www.weather.gov/safety/flood",
                "instruction": "Most flooding deaths occur in vehicles. Never drive through a\nflooded roadway or around barricades. Turn around, don't drown.\n\nBe aware of your surroundings and do not drive on flooded roads.",
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "FLSCAE"
                    ],
                    "WMOidentifier": [
                        "WGUS82 KCAE 211755"
                    ],
                    "NWSheadline": [
                        "FLOOD ADVISORY IN EFFECT UNTIL 4 PM EDT THIS AFTERNOON"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KCAE.FA.Y.0100.250821T1755Z-250821T2000Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T16:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "FAY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.65216fe14dba5bd401b45921e6d7287d4cf20136.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -79.76,
                            26.27
                        ],
                        [
                            -80.11,
                            26.34
                        ],
                        [
                            -80.08,
                            26.78
                        ],
                        [
                            -80.16,
                            26.950000000000003
                        ],
                        [
                            -80.14,
                            26.960000000000004
                        ],
                        [
                            -80.14,
                            26.970000000000006
                        ],
                        [
                            -79.73,
                            26.970000000000006
                        ],
                        [
                            -79.76,
                            26.27
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.65216fe14dba5bd401b45921e6d7287d4cf20136.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.65216fe14dba5bd401b45921e6d7287d4cf20136.001.1",
                "areaDesc": "Coastal waters from Jupiter Inlet to Deerfield Beach FL out 20 NM",
                "geocode": {
                    "SAME": [
                        "075650"
                    ],
                    "UGC": [
                        "AMZ650"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/AMZ650"
                ],
                "references": [],
                "sent": "2025-08-21T13:54:00-04:00",
                "effective": "2025-08-21T13:54:00-04:00",
                "onset": "2025-08-21T13:54:00-04:00",
                "expires": "2025-08-21T15:00:00-04:00",
                "ends": "2025-08-21T15:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Likely",
                "urgency": "Immediate",
                "event": "Special Marine Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Miami FL",
                "headline": "Special Marine Warning issued August 21 at 1:54PM EDT until August 21 at 3:00PM EDT by NWS Miami FL",
                "description": "SMWMFL\n\nThe National Weather Service in Miami has issued a\n\n* Special Marine Warning for...\nCoastal waters from Jupiter Inlet to Deerfield Beach FL out 20\nNM...\n\n* Until 300 PM EDT.\n\n* At 154 PM EDT, strong thunderstorms were located along a line\nextending from 6 nm east of Hillsboro Beach to 15 nm southeast of\nCanal Point, moving northeast at 20 knots.\n\nHAZARD...Wind gusts to 40 knots.\n\nSOURCE...Radar.\n\nIMPACT...Small craft could be damaged in briefly higher winds and\nsuddenly higher waves.\n\n* Locations impacted include...\nOcean Ridge, Riviera Beach, Palm Beach, Jupiter Inlet, Hypoluxo,\nJupiter Inlet Colony, Juno Beach, Gulf Stream, Palm Beach Shores,\nDelray Beach, Jupiter, Boca Raton, Highland Beach, South Palm\nBeach, Manalapan, Briny Breezes, Tequesta, and North Palm Beach.",
                "instruction": "Move to safe harbor until hazardous weather passes.\n\nMove to safe harbor immediately as gusty winds and high waves are\nexpected.\n\nReport severe weather to the Coast Guard or the National Weather\nService. You can also share your report with NWS Miami on Facebook\nand Twitter.",
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "SMWMFL"
                    ],
                    "WMOidentifier": [
                        "WHUS52 KMFL 211754"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:54:00-00:00...storm...222DEG...18KT...26.31,-79.96 26.69,-80.41"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ],
                    "VTEC": [
                        "/O.NEW.KMFL.MA.W.0296.250821T1754Z-250821T1900Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T15:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SMW"
                    ],
                    "NationalWeatherService": [
                        "MAW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.464edda723c5ebdc58be469af3aea06f601c469e.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -80.87,
                            27.14
                        ],
                        [
                            -80.91000000000001,
                            27.12
                        ],
                        [
                            -80.93,
                            27.080000000000002
                        ],
                        [
                            -80.95999990000001,
                            27.07
                        ],
                        [
                            -80.95000000000002,
                            27.06
                        ],
                        [
                            -80.93000000000002,
                            27.07
                        ],
                        [
                            -80.93000000000002,
                            27.04
                        ],
                        [
                            -80.95999990000003,
                            27.04
                        ],
                        [
                            -80.97000000000003,
                            27.06
                        ],
                        [
                            -80.99000000000002,
                            27.029999999999998
                        ],
                        [
                            -81.09000000000002,
                            26.97
                        ],
                        [
                            -81.08000000000001,
                            26.959999999999997
                        ],
                        [
                            -81.09000000000002,
                            26.949999999999996
                        ],
                        [
                            -81.06999990000001,
                            26.949999999999996
                        ],
                        [
                            -81.08000000000001,
                            26.929999999999996
                        ],
                        [
                            -81.12000000000002,
                            26.929999999999996
                        ],
                        [
                            -81.12000000000002,
                            26.899999999999995
                        ],
                        [
                            -81.19000000000001,
                            26.899999999999995
                        ],
                        [
                            -81.27000000000001,
                            27.039999999999996
                        ],
                        [
                            -81.09,
                            27.189999999999994
                        ],
                        [
                            -80.87,
                            27.14
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.464edda723c5ebdc58be469af3aea06f601c469e.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.464edda723c5ebdc58be469af3aea06f601c469e.001.1",
                "areaDesc": "Glades",
                "geocode": {
                    "SAME": [
                        "012043"
                    ],
                    "UGC": [
                        "FLZ063"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/FLZ063"
                ],
                "references": [],
                "sent": "2025-08-21T13:44:00-04:00",
                "effective": "2025-08-21T13:44:00-04:00",
                "onset": "2025-08-21T13:44:00-04:00",
                "expires": "2025-08-21T14:15:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Miami FL",
                "headline": "Special Weather Statement issued August 21 at 1:44PM EDT by NWS Miami FL",
                "description": "At 144 PM EDT, National Weather Service meteorologists were tracking\na strong thunderstorm over Lakeport, moving east at 20 mph.\n\nHAZARD...Wind gusts of 45 to 50 mph.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects.\n\nLocations impacted include...\nLakeport, Buckhead Ridge, Brighton Seminole Reservation, and Indian\nPrairie Canal Mouth.",
                "instruction": "These winds can down small tree limbs and branches, and blow around\nunsecured small objects. Seek shelter in a safe building until the\nstorm passes.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSMFL"
                    ],
                    "WMOidentifier": [
                        "WWUS82 KMFL 211744"
                    ],
                    "NWSheadline": [
                        "A strong thunderstorm will impact portions of northeastern Glades County through 215 PM EDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:44:00-00:00...storm...248DEG...15KT...26.99,-81.16"
                    ],
                    "maxWindGust": [
                        "50 MPH"
                    ],
                    "maxHailSize": [
                        "0.00"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b83f356ef9885c59527164680e541a7b3727b3e7.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -80.17,
                            26.5
                        ],
                        [
                            -80.2,
                            26.85
                        ],
                        [
                            -80.59,
                            26.75
                        ],
                        [
                            -80.61,
                            26.64
                        ],
                        [
                            -80.61,
                            26.48
                        ],
                        [
                            -80.17,
                            26.5
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b83f356ef9885c59527164680e541a7b3727b3e7.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.b83f356ef9885c59527164680e541a7b3727b3e7.001.1",
                "areaDesc": "Inland Palm Beach County; Metro Palm Beach County",
                "geocode": {
                    "SAME": [
                        "012099"
                    ],
                    "UGC": [
                        "FLZ067",
                        "FLZ068"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/FLZ067",
                    "https://api.weather.gov/zones/forecast/FLZ068"
                ],
                "references": [],
                "sent": "2025-08-21T13:40:00-04:00",
                "effective": "2025-08-21T13:40:00-04:00",
                "onset": "2025-08-21T13:40:00-04:00",
                "expires": "2025-08-21T14:15:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Miami FL",
                "headline": "Special Weather Statement issued August 21 at 1:40PM EDT by NWS Miami FL",
                "description": "At 140 PM EDT, National Weather Service meteorologists were tracking\nstrong thunderstorms along a line extending from 7 miles northwest of\nLoxahatchee NWR to near Lion Country Safari Park. Movement was east\nat 25 mph.\n\nHAZARD...Wind gusts of 45 to 50 mph and half inch hail.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects. Minor damage to outdoor objects is\npossible.\n\nLocations impacted include...\nWest Palm Beach, Wellington, Palm Beach Gardens, Royal Palm Beach,\nLoxahatchee NWR, Loxahatchee Groves, Lion Country Safari Park, and\nThe Acreage.",
                "instruction": "These winds can down small tree limbs and branches, and blow around\nunsecured small objects. Seek shelter in a safe building until the\nstorm passes.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSMFL"
                    ],
                    "WMOidentifier": [
                        "WWUS82 KMFL 211740"
                    ],
                    "NWSheadline": [
                        "Strong thunderstorms will impact portions of central Palm Beach County through 215 PM EDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:40:00-00:00...storm...260DEG...23KT...26.57,-80.44 26.68,-80.43"
                    ],
                    "maxWindGust": [
                        "50 MPH"
                    ],
                    "maxHailSize": [
                        "0.50"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f30f97dd5dcfade609f66cd95ee787cd48a63435.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -82.02,
                            29.07
                        ],
                        [
                            -82.03,
                            29.25
                        ],
                        [
                            -81.65,
                            29.29
                        ],
                        [
                            -81.64,
                            29.279999999999998
                        ],
                        [
                            -81.64,
                            29.049999999999997
                        ],
                        [
                            -81.66,
                            29.049999999999997
                        ],
                        [
                            -81.66,
                            29.019999999999996
                        ],
                        [
                            -82.02,
                            29.07
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f30f97dd5dcfade609f66cd95ee787cd48a63435.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.f30f97dd5dcfade609f66cd95ee787cd48a63435.001.1",
                "areaDesc": "Eastern Marion; Central Marion",
                "geocode": {
                    "SAME": [
                        "012083"
                    ],
                    "UGC": [
                        "FLZ140",
                        "FLZ240"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/FLZ140",
                    "https://api.weather.gov/zones/forecast/FLZ240"
                ],
                "references": [],
                "sent": "2025-08-21T13:40:00-04:00",
                "effective": "2025-08-21T13:40:00-04:00",
                "onset": "2025-08-21T13:40:00-04:00",
                "expires": "2025-08-21T14:15:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Jacksonville FL",
                "headline": "Special Weather Statement issued August 21 at 1:40PM EDT by NWS Jacksonville FL",
                "description": "At 140 PM EDT, Doppler radar was tracking a strong thunderstorm over\nLynne, moving east at 15 mph.\n\nHAZARD...Wind gusts around 40 mph.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects.\n\nLocations impacted include...\nJuniper Springs, Lynne, Moss Bluff, and Silver Springs Shores.",
                "instruction": "If outdoors, consider seeking shelter inside a building.\n\nTorrential rainfall is also occurring with this storm and may lead to\nlocalized flooding. Do not drive your vehicle through flooded\nroadways.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSJAX"
                    ],
                    "WMOidentifier": [
                        "WWUS82 KJAX 211740"
                    ],
                    "NWSheadline": [
                        "A STRONG THUNDERSTORM WILL IMPACT SOUTHEASTERN MARION COUNTY THROUGH 215 PM EDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:40:00-00:00...storm...267DEG...14KT...29.17,-81.94"
                    ],
                    "maxWindGust": [
                        "40 MPH"
                    ],
                    "maxHailSize": [
                        "0.00"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.766683f84efb99d7c830764f47996e655bdaa3bc.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -85.54,
                            30.19
                        ],
                        [
                            -85.34,
                            30.37
                        ],
                        [
                            -84.35000000000001,
                            30.14
                        ],
                        [
                            -84.51,
                            30.07
                        ],
                        [
                            -84.55000000000001,
                            30
                        ],
                        [
                            -85.03000000000002,
                            29.81
                        ],
                        [
                            -85.54,
                            30.19
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.766683f84efb99d7c830764f47996e655bdaa3bc.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.766683f84efb99d7c830764f47996e655bdaa3bc.001.1",
                "areaDesc": "Inland Bay; Calhoun; Inland Gulf; Inland Franklin; Inland Wakulla; Northern Liberty; Southern Liberty",
                "geocode": {
                    "SAME": [
                        "012005",
                        "012013",
                        "012045",
                        "012037",
                        "012129",
                        "012077"
                    ],
                    "UGC": [
                        "FLZ012",
                        "FLZ013",
                        "FLZ014",
                        "FLZ015",
                        "FLZ027",
                        "FLZ326",
                        "FLZ426"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/FLZ012",
                    "https://api.weather.gov/zones/forecast/FLZ013",
                    "https://api.weather.gov/zones/forecast/FLZ014",
                    "https://api.weather.gov/zones/forecast/FLZ015",
                    "https://api.weather.gov/zones/forecast/FLZ027",
                    "https://api.weather.gov/zones/forecast/FLZ326",
                    "https://api.weather.gov/zones/forecast/FLZ426"
                ],
                "references": [],
                "sent": "2025-08-21T13:39:00-04:00",
                "effective": "2025-08-21T13:39:00-04:00",
                "onset": "2025-08-21T13:39:00-04:00",
                "expires": "2025-08-21T14:15:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Tallahassee FL",
                "headline": "Special Weather Statement issued August 21 at 1:39PM EDT by NWS Tallahassee FL",
                "description": "At 139 PM EDT/1239 PM CDT/, Doppler radar was tracking a cluster of\nstrong thunderstorms along a line extending from 14 miles north of\nCarrabelle to 7 miles northeast of Callaway. Movement was east at 10\nmph.\n\nHAZARD...Wind gusts up to 40 mph.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects.\n\nLocations impacted include...\nStonemill Creek, Orange, Wewahitchka, East Camp, Honeyville, Jewel\nFire Tower, Vilas, Chipola Cutoff, Jensen Place, Central City,\nBeverly, Red Hill, Scotts Ferry, Poplar Camp, Smith Creek, Kern,\nKinard, Willis Landing, Nixon Garden, and Chipola Park.",
                "instruction": "If outdoors, consider seeking shelter inside a building.\n\nThese storms may intensify, so be certain to monitor local radio\nstations and available television stations for additional information\nand possible warnings from the National Weather Service.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSTAE"
                    ],
                    "WMOidentifier": [
                        "WWUS82 KTAE 211739"
                    ],
                    "NWSheadline": [
                        "STRONG THUNDERSTORMS WILL IMPACT NORTHERN GULF...EAST CENTRAL BAY AND SOUTHWESTERN CALHOUN COUNTIES IN THE PANHANDLE OF FLORIDA... SOUTHWESTERN WAKULLA...SOUTHERN LIBERTY AND NORTHWESTERN FRANKLIN COUNTIES IN BIG BEND FLORIDA THROUGH 215 PM EDT/115 PM CDT/"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:39:00-00:00...storm...255DEG...7KT...30.07,-84.71 30.2,-85.46"
                    ],
                    "maxWindGust": [
                        "40 MPH"
                    ],
                    "maxHailSize": [
                        "0.00"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.694acaffed4649d245209fc78520fceee0c2c81c.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.694acaffed4649d245209fc78520fceee0c2c81c.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.694acaffed4649d245209fc78520fceee0c2c81c.001.1",
                "areaDesc": "Jefferson; Johnson; Emanuel; Laurens; Treutlen; Dodge; Telfair; Wheeler; Montgomery; Toombs",
                "geocode": {
                    "SAME": [
                        "013163",
                        "013167",
                        "013107",
                        "013175",
                        "013283",
                        "013091",
                        "013271",
                        "013309",
                        "013209",
                        "013279"
                    ],
                    "UGC": [
                        "GAZ076",
                        "GAZ085",
                        "GAZ086",
                        "GAZ097",
                        "GAZ098",
                        "GAZ109",
                        "GAZ110",
                        "GAZ111",
                        "GAZ112",
                        "GAZ113"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/GAZ076",
                    "https://api.weather.gov/zones/forecast/GAZ085",
                    "https://api.weather.gov/zones/forecast/GAZ086",
                    "https://api.weather.gov/zones/forecast/GAZ097",
                    "https://api.weather.gov/zones/forecast/GAZ098",
                    "https://api.weather.gov/zones/forecast/GAZ109",
                    "https://api.weather.gov/zones/forecast/GAZ110",
                    "https://api.weather.gov/zones/forecast/GAZ111",
                    "https://api.weather.gov/zones/forecast/GAZ112",
                    "https://api.weather.gov/zones/forecast/GAZ113"
                ],
                "references": [],
                "sent": "2025-08-21T13:38:00-04:00",
                "effective": "2025-08-21T13:38:00-04:00",
                "onset": "2025-08-22T08:00:00-04:00",
                "expires": "2025-08-22T07:00:00-04:00",
                "ends": "2025-08-24T02:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Possible",
                "urgency": "Future",
                "event": "Flood Watch",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Peachtree City GA",
                "headline": "Flood Watch issued August 21 at 1:38PM EDT until August 24 at 2:00AM EDT by NWS Peachtree City GA",
                "description": "* WHAT...Flooding caused by excessive rainfall is possible.\n\n* WHERE...Portions of central, east central, and southeast Georgia,\nincluding the following counties, in central Georgia, Dodge,\nLaurens, Montgomery, Telfair and Wheeler. In east central Georgia,\nEmanuel, Jefferson, Johnson and Treutlen. In southeast Georgia,\nToombs.\n\n* WHEN...From Friday morning through late Saturday night.\n\n* IMPACTS...Excessive runoff may result in flooding of rivers,\ncreeks, streams, and other low-lying and flood-prone locations.\n\n* ADDITIONAL DETAILS...\n- A stationary front this weekend will bring periods of heavy\nrainfall. Widespread totals of 1-3\" are expected with\nisolated areas receiving up to 5\".\n- http://www.weather.gov/safety/flood",
                "instruction": "You should monitor later forecasts and be alert for possible Flood\nWarnings. Those living in areas prone to flooding should be prepared\nto take action should flooding develop.",
                "response": "Prepare",
                "parameters": {
                    "AWIPSidentifier": [
                        "FFAFFC"
                    ],
                    "WMOidentifier": [
                        "WGUS62 KFFC 211738"
                    ],
                    "NWSheadline": [
                        "FLOOD WATCH IN EFFECT FROM FRIDAY MORNING THROUGH LATE SATURDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ],
                    "VTEC": [
                        "/O.NEW.KFFC.FA.A.0007.250822T1200Z-250824T0600Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-24T02:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "FFA"
                    ],
                    "NationalWeatherService": [
                        "FAA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/2127281732461179",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/2127281732461179",
                "@type": "wx:Alert",
                "id": "2127281732461179",
                "areaDesc": "Los Angeles, CA",
                "geocode": {
                    "SAME": [
                        "006037"
                    ]
                },
                "affectedZones": [],
                "references": [],
                "sent": "2025-08-21T10:36:30-07:00",
                "effective": "2025-08-21T10:36:30-07:00",
                "onset": null,
                "expires": "2025-08-21T12:36:30-07:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Rescue",
                "severity": "Extreme",
                "certainty": "Observed",
                "urgency": "Immediate",
                "event": "Child Abduction Emergency",
                "sender": "200230_California_Highway_Patrol_CA_California_Highway_Patrol",
                "senderName": "200230,California Highway Patrol,CA California Highway Patrol",
                "headline": "AMBER Alert",
                "description": "AN AMBER ALERT IS BEING ISSUED BY THE CALIFORNIA HIGHWAY PATROL ON BEHALF OF THE LOS ANGELES POLICE DEPARTMENT.\n\nON AUGUST 21 2025 AT 0130 AM JADEN HERNANDEZ AND DERECK RODRIGUEZ WERE ABDUCTED FROM LOS ANGELES, CALIFORNIA JADEN HERNANDEZ IS A 10 YEAR OLD HISPANIC MALE 4 FEET TALL WEIGHING 100 POUNDS WITH BLACK HAIR AND BROWN EYES IS BELIEVED TO BE WEARING BLACK SHIRT AND BLACK PANTS DEREK RODRIGUEZ IS A 2 YEAR OLD HISPANIC MALE 2 FEET TALL WEIGHING 20 POUNDS WITH RED HAIR AND BROWN EYES AND IS BELIEVED TO BE WEARING A DARK T SHIRT AND DARK PANTS\n\nTHE SUSPECT JACKELINE HERNANDEZ TORRES IS A 30 YEAR OLD HISPANIC FEMALE STANDING 5 FEET TALL WEIGHING 120 POUNDS WITH BLACK HAIR AND BROWN EYES AND IS BELIEVED TO BE WEARING A LIGHT COLORED HOODIE WITH DARK SWEATPANTS\n\nTHE SUSPECT IS BELIEVED TO BE DRIVING A 2008 BLK PT CRUISER WITH INDIANA LICENSE PLATE DFT105",
                "instruction": null,
                "response": null,
                "parameters": {
                    "BLOCKCHANNEL": [
                        "CAPEXCH",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "CIV"
                    ],
                    "timezone": [
                        "PST"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": null,
                "eventCode": {
                    "SAME": [
                        "CAE"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f0fbf5c4d90fccaeae666b2359263d08d29e296a.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -82.99,
                            31.23
                        ],
                        [
                            -82.44,
                            31.18
                        ],
                        [
                            -82.39,
                            31.02
                        ],
                        [
                            -82.41,
                            31.009999999999998
                        ],
                        [
                            -82.41,
                            30.959999999999997
                        ],
                        [
                            -82.5,
                            30.759999999999998
                        ],
                        [
                            -82.9,
                            30.86
                        ],
                        [
                            -82.99,
                            31.23
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f0fbf5c4d90fccaeae666b2359263d08d29e296a.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.f0fbf5c4d90fccaeae666b2359263d08d29e296a.001.1",
                "areaDesc": "Atkinson; Clinch; Northern Ware; Southern Ware",
                "geocode": {
                    "SAME": [
                        "013003",
                        "013065",
                        "013299"
                    ],
                    "UGC": [
                        "GAZ149",
                        "GAZ163",
                        "GAZ250",
                        "GAZ350"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/GAZ149",
                    "https://api.weather.gov/zones/forecast/GAZ163",
                    "https://api.weather.gov/zones/forecast/GAZ250",
                    "https://api.weather.gov/zones/forecast/GAZ350"
                ],
                "references": [],
                "sent": "2025-08-21T13:31:00-04:00",
                "effective": "2025-08-21T13:31:00-04:00",
                "onset": "2025-08-21T13:31:00-04:00",
                "expires": "2025-08-21T14:15:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Observed",
                "urgency": "Expected",
                "event": "Special Weather Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Jacksonville FL",
                "headline": "Special Weather Statement issued August 21 at 1:31PM EDT by NWS Jacksonville FL",
                "description": "At 131 PM EDT, Doppler radar was tracking a cluster of strong\nthunderstorms near Du Pont, or 8 miles southwest of Homerville,\nmoving east at 15 mph.\n\nHAZARD...Wind gusts around 40 mph.\n\nSOURCE...Radar indicated.\n\nIMPACT...Gusty winds could knock down tree limbs and blow around\nunsecured objects.\n\nLocations impacted include...\nHomerville, Argyle, Du Pont, Cogdell, and Manor.",
                "instruction": "If outdoors, consider seeking shelter inside a building.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "SPSJAX"
                    ],
                    "WMOidentifier": [
                        "WWUS82 KJAX 211731"
                    ],
                    "NWSheadline": [
                        "STRONG THUNDERSTORMS WILL IMPACT SOUTH CENTRAL ATKINSON...WEST CENTRAL WARE AND CLINCH COUNTIES THROUGH 215 PM EDT"
                    ],
                    "eventMotionDescription": [
                        "2025-08-21T17:31:00-00:00...storm...269DEG...12KT...30.92,-82.82"
                    ],
                    "maxWindGust": [
                        "40 MPH"
                    ],
                    "maxHailSize": [
                        "0.00"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "SPS"
                    ],
                    "NationalWeatherService": [
                        "SPS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.35ac1c4ffdf9c0812226bcf56557f60fb690901c.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.35ac1c4ffdf9c0812226bcf56557f60fb690901c.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.35ac1c4ffdf9c0812226bcf56557f60fb690901c.001.1",
                "areaDesc": "Coastal York; Coastal Cumberland; Sagadahoc; Lincoln; Knox; Coastal Rockingham",
                "geocode": {
                    "SAME": [
                        "023031",
                        "023005",
                        "023023",
                        "023015",
                        "023013",
                        "033015"
                    ],
                    "UGC": [
                        "MEZ023",
                        "MEZ024",
                        "MEZ025",
                        "MEZ026",
                        "MEZ027",
                        "NHZ014"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MEZ023",
                    "https://api.weather.gov/zones/forecast/MEZ024",
                    "https://api.weather.gov/zones/forecast/MEZ025",
                    "https://api.weather.gov/zones/forecast/MEZ026",
                    "https://api.weather.gov/zones/forecast/MEZ027",
                    "https://api.weather.gov/zones/forecast/NHZ014"
                ],
                "references": [],
                "sent": "2025-08-21T13:27:00-04:00",
                "effective": "2025-08-21T13:27:00-04:00",
                "onset": "2025-08-22T22:00:00-04:00",
                "expires": "2025-08-22T04:00:00-04:00",
                "ends": "2025-08-23T01:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Gray ME",
                "headline": "Coastal Flood Advisory issued August 21 at 1:27PM EDT until August 23 at 1:00AM EDT by NWS Gray ME",
                "description": "* WHAT...For the High Rip Current Risk, a high risk of dangerous\nrip currents. For the High Surf Advisory, large breaking waves\nof 6 to 10 feet and a high risk of dangerous rip currents. For\nthe Coastal Flood Advisory, minor coastal flooding and splash-\nover.\n\n* WHERE...In Maine, Coastal York, Coastal Cumberland, Sagadahoc,\nLincoln and Knox Counties. In New Hampshire, Coastal\nRockingham County.\n\n* WHEN...For the High Rip Current Risk, until 8 PM EDT this\nevening. For the High Surf Advisory, from 6 AM Friday to 8 PM\nEDT Saturday. For the Coastal Flood Advisory, from 10 PM\nFriday to 1 AM EDT Saturday.\n\n* IMPACTS...Flooding of lots, parks, and roads with only\nisolated road closures expected. Dangerous swimming and\nsurfing conditions and localized beach erosion. Rip currents\ncan sweep even the best swimmers away from shore into deeper\nwater.",
                "instruction": "If travel is required, allow extra time as some roads may be\nclosed. Do not drive around barricades or through water of\nunknown depth. Take the necessary actions to protect flood-prone\nproperty.\n\nInexperienced swimmers should remain out of the water due to\ndangerous surf conditions.\n\nLarge waves can present a danger to people on rocks above the\nwater.  Stay away from rock outcrops along the shoreline exposed\nto ocean waves...as waves can easily sweep people into the cold\nocean water.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWGYX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KGYX 211727"
                    ],
                    "NWSheadline": [
                        "HIGH RIP CURRENT RISK REMAINS IN EFFECT UNTIL 8 PM EDT THIS EVENING... ...HIGH SURF ADVISORY REMAINS IN EFFECT FROM 6 AM FRIDAY TO 8 PM EDT SATURDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 10 PM FRIDAY TO 1 AM EDT SATURDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KGYX.CF.Y.0002.250823T0200Z-250823T0500Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T01:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.35ac1c4ffdf9c0812226bcf56557f60fb690901c.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.35ac1c4ffdf9c0812226bcf56557f60fb690901c.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.35ac1c4ffdf9c0812226bcf56557f60fb690901c.002.1",
                "areaDesc": "Coastal Waldo",
                "geocode": {
                    "SAME": [
                        "023027"
                    ],
                    "UGC": [
                        "MEZ028"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MEZ028"
                ],
                "references": [],
                "sent": "2025-08-21T13:27:00-04:00",
                "effective": "2025-08-21T13:27:00-04:00",
                "onset": "2025-08-22T22:00:00-04:00",
                "expires": "2025-08-22T04:00:00-04:00",
                "ends": "2025-08-23T01:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Gray ME",
                "headline": "Coastal Flood Advisory issued August 21 at 1:27PM EDT until August 23 at 1:00AM EDT by NWS Gray ME",
                "description": "* WHAT...For the High Surf Advisory, large breaking waves of 4 to\n6 feet. For the Coastal Flood Advisory, minor coastal flooding\nand splash-over possible.\n\n* WHERE...Coastal Waldo County.\n\n* WHEN...For the High Surf Advisory, from 6 AM Friday to 8 PM\nEDT Saturday. For the Coastal Flood Advisory, from 10 PM\nFriday to 1 AM EDT Saturday.\n\n* IMPACTS...Flooding of lots, parks, and roads with only\nisolated road closures expected. Dangerous swimming and\nsurfing conditions and localized beach erosion.",
                "instruction": "If travel is required, allow extra time as some roads may be\nclosed. Do not drive around barricades or through water of\nunknown depth. Take the necessary actions to protect flood-prone\nproperty.\n\nInexperienced swimmers should remain out of the water due to\ndangerous surf conditions.\n\nLarge waves can present a danger to people on rocks above the\nwater.  Stay away from rock outcrops along the shoreline exposed\nto ocean waves...as waves can easily sweep people into the cold\nocean water.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWGYX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KGYX 211727"
                    ],
                    "NWSheadline": [
                        "HIGH SURF ADVISORY REMAINS IN EFFECT FROM 6 AM FRIDAY TO 8 PM EDT SATURDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 10 PM FRIDAY TO 1 AM EDT SATURDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KGYX.CF.Y.0002.250823T0200Z-250823T0500Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T01:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/2127281732460956",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/2127281732460956",
                "@type": "wx:Alert",
                "id": "2127281732460956",
                "areaDesc": "Los Angeles, CA",
                "geocode": {
                    "SAME": [
                        "006037"
                    ]
                },
                "affectedZones": [],
                "references": [],
                "sent": "2025-08-21T10:22:15-07:00",
                "effective": "2025-08-21T10:22:15-07:00",
                "onset": null,
                "expires": "2025-08-21T12:22:15-07:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Rescue",
                "severity": "Extreme",
                "certainty": "Observed",
                "urgency": "Immediate",
                "event": "Child Abduction Emergency",
                "sender": "200230_California_Highway_Patrol_CA_California_Highway_Patrol",
                "senderName": "200230,California Highway Patrol,CA California Highway Patrol",
                "headline": "AMBER Alert",
                "description": "AMBER ALERT\n\nON AUGUST 21 2025 AT 0130 AM JADEN HERNANDEZ AND DERECK RODRIGUEZ WERE ABDUCTED FROM LOS ANGELES, CALIFORNIA.  DEREK RODRIGUEZ IS A 2 YEAR OLD HISPANIC MALE 2 FEET 0 INCHES TALL WEIGHING 20 POUNDS WITH RED HAIR AND BROWN EYES  DERECK RODRIGUEZ IS BELIEVED TO BE WEARING A DARK T SHIRT AND DARK PANTS. JADEN HERNANDEZ IS A 10 YEAR OLD HISPANIC MALE 4 FEET 0 INCHES TALL WEIGHING 100 POUNDS WITH BLACK HAIR AND BROWN EYES  JADEN HERNANDEZ IS BELIEVED TO BE WEARING BLACK SHIRT AND BLACK PANTS\n\nTHE SUSPECT JACKELINE HERNANDEZ TORRES IS A 30 YR OLD HISPANIC FEMALE STANDING 5 FEET TALL WEIGHING 120 POUNDS WITH BLACK HAIR AND BROWN EYES. JACKELINE HERNANDEZ TORRES IS BELIEVED TO BE WEARING A LIGHT COLORED HOODIE WITH DARK SWEATPANTS\n\nSUSPECT IS BELIEVED TO BE DRIVING A 2008 BLK PT CRUISER WITH IND LICENSE PLATE DFT105\n\nIF SEEN CALL 911",
                "instruction": null,
                "response": null,
                "parameters": {
                    "BLOCKCHANNEL": [
                        "CAPEXCH",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "CIV"
                    ],
                    "timezone": [
                        "PST"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": null,
                "eventCode": {
                    "SAME": [
                        "CAE"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1d684655bc1a9e20863556947c5c297529809816.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1d684655bc1a9e20863556947c5c297529809816.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.1d684655bc1a9e20863556947c5c297529809816.001.1",
                "areaDesc": "Lincoln; McDuffie; Columbia; Richmond; Burke; McCormick; Edgefield; Aiken; Barnwell; Bamberg; Northwestern Orangeburg; Central Orangeburg; Southeastern Orangeburg",
                "geocode": {
                    "SAME": [
                        "013181",
                        "013189",
                        "013073",
                        "013245",
                        "013033",
                        "045065",
                        "045037",
                        "045003",
                        "045011",
                        "045009",
                        "045075"
                    ],
                    "UGC": [
                        "GAZ040",
                        "GAZ063",
                        "GAZ064",
                        "GAZ065",
                        "GAZ077",
                        "SCZ018",
                        "SCZ025",
                        "SCZ030",
                        "SCZ035",
                        "SCZ041",
                        "SCZ135",
                        "SCZ136",
                        "SCZ137"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/GAZ040",
                    "https://api.weather.gov/zones/forecast/GAZ063",
                    "https://api.weather.gov/zones/forecast/GAZ064",
                    "https://api.weather.gov/zones/forecast/GAZ065",
                    "https://api.weather.gov/zones/forecast/GAZ077",
                    "https://api.weather.gov/zones/forecast/SCZ018",
                    "https://api.weather.gov/zones/forecast/SCZ025",
                    "https://api.weather.gov/zones/forecast/SCZ030",
                    "https://api.weather.gov/zones/forecast/SCZ035",
                    "https://api.weather.gov/zones/forecast/SCZ041",
                    "https://api.weather.gov/zones/forecast/SCZ135",
                    "https://api.weather.gov/zones/forecast/SCZ136",
                    "https://api.weather.gov/zones/forecast/SCZ137"
                ],
                "references": [],
                "sent": "2025-08-21T13:06:00-04:00",
                "effective": "2025-08-21T13:06:00-04:00",
                "onset": "2025-08-22T08:00:00-04:00",
                "expires": "2025-08-22T02:00:00-04:00",
                "ends": "2025-08-24T02:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Possible",
                "urgency": "Future",
                "event": "Flood Watch",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Columbia SC",
                "headline": "Flood Watch issued August 21 at 1:06PM EDT until August 24 at 2:00AM EDT by NWS Columbia SC",
                "description": "* WHAT...Flooding caused by excessive rainfall is possible.\n\n* WHERE...Portions of east central Georgia, including the following\nareas, Burke, Columbia, Lincoln, McDuffie and Richmond and central\nSouth Carolina, including the following areas, Aiken, Bamberg,\nBarnwell, Central Orangeburg, Edgefield, McCormick, Northwestern\nOrangeburg and Southeastern Orangeburg.\n\n* WHEN...From Friday morning through late Saturday night.\n\n* IMPACTS...Excessive runoff may result in flooding of rivers,\ncreeks, streams, and other low-lying and flood-prone locations.\nCreeks and streams may rise out of their banks.\n\n* ADDITIONAL DETAILS...\n- Periods of heavy rainfall are expected to develop along a\nstalled out surface front through the day on Friday, lasting\nthrough late Saturday night.\n- http://www.weather.gov/safety/flood",
                "instruction": "You should monitor later forecasts and be alert for possible Flood\nWarnings. Those living in areas prone to flooding should be prepared\nto take action should flooding develop.",
                "response": "Prepare",
                "parameters": {
                    "AWIPSidentifier": [
                        "FFACAE"
                    ],
                    "WMOidentifier": [
                        "WGUS62 KCAE 211706"
                    ],
                    "NWSheadline": [
                        "FLOOD WATCH IN EFFECT FROM FRIDAY MORNING THROUGH LATE SATURDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ],
                    "VTEC": [
                        "/O.NEW.KCAE.FA.A.0001.250822T1200Z-250824T0600Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-24T02:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "FFA"
                    ],
                    "NationalWeatherService": [
                        "FAA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.003.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.003.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.003.1",
                "areaDesc": "Southeast Providence; Eastern Kent; Bristol",
                "geocode": {
                    "SAME": [
                        "044007",
                        "044003",
                        "044001"
                    ],
                    "UGC": [
                        "RIZ002",
                        "RIZ004",
                        "RIZ005"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/RIZ002",
                    "https://api.weather.gov/zones/forecast/RIZ004",
                    "https://api.weather.gov/zones/forecast/RIZ005"
                ],
                "references": [],
                "sent": "2025-08-21T13:03:00-04:00",
                "effective": "2025-08-21T13:03:00-04:00",
                "onset": "2025-08-22T06:00:00-04:00",
                "expires": "2025-08-22T06:00:00-04:00",
                "ends": "2025-08-22T10:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Boston/Norton MA",
                "headline": "Coastal Flood Advisory issued August 21 at 1:03PM EDT until August 22 at 10:00AM EDT by NWS Boston/Norton MA",
                "description": "* WHAT...Flooding of up to one foot deep on vulnerable coastal\nroads around high tide Friday morning and Friday evening.\n\n* WHERE...Locations around Narragansett Bay.\n\n* WHEN...High tides Friday morning and Friday evening.\n\n* IMPACTS...Flooding up to one foot deep on vulnerable roads,\nparking lots, and parks.",
                "instruction": "Do not drive around barricades or through water of unknown depth\nduring high tide. Take the necessary actions to protect flood-\nprone property.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWBOX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KBOX 211703"
                    ],
                    "NWSheadline": [
                        "COASTAL FLOOD ADVISORY IN EFFECT FROM 6 AM TO 10 AM EDT FRIDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 6 PM TO 10 PM EDT FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KBOX.CF.Y.0006.250822T1000Z-250822T1400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T10:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.002.2",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.002.2",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.002.2",
                "areaDesc": "Block Island",
                "geocode": {
                    "SAME": [
                        "044009"
                    ],
                    "UGC": [
                        "RIZ008"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/RIZ008"
                ],
                "references": [],
                "sent": "2025-08-21T13:03:00-04:00",
                "effective": "2025-08-21T13:03:00-04:00",
                "onset": "2025-08-22T18:00:00-04:00",
                "expires": "2025-08-22T06:00:00-04:00",
                "ends": "2025-08-22T22:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Boston/Norton MA",
                "headline": "Coastal Flood Advisory issued August 21 at 1:03PM EDT until August 22 at 10:00PM EDT by NWS Boston/Norton MA",
                "description": "* WHAT...Large breaking waves of 10 to 15 feet. Flooding of up to\none foot deep on vulnerable coastal roads and some debris on\nroadways around high tide Friday morning and Friday evening.\n\n* WHERE...Block Island RI.\n\n* WHEN...For the High Surf Advisory, until 8 PM EDT Saturday. For\nthe Coastal Flood Advisory, for high tides Friday morning and\nFriday evening.\n\n* IMPACTS...Flooding up to one foot deep around high tide on\nvulnerable roads, parking lots, and parks. Dangerous swimming\nand surfing conditions. Significant beach and dune erosion.",
                "instruction": "Do not drive around barricades or through water of unknown depth\nduring high tide. Take the necessary actions to protect flood-\nprone property.\n\nMany ocean beaches are closed. Stay out out of the water due to\ndangerous surf conditions. Only view surf at a safe distance, not\nfrom jetties or piers.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWBOX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KBOX 211703"
                    ],
                    "NWSheadline": [
                        "HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL 8 PM EDT SATURDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 6 AM TO 10 AM EDT FRIDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 6 PM TO 10 PM EDT FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.EXB.KBOX.CF.Y.0004.250822T2200Z-250823T0200Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T22:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.003.2",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.003.2",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.003.2",
                "areaDesc": "Southeast Providence; Eastern Kent; Bristol",
                "geocode": {
                    "SAME": [
                        "044007",
                        "044003",
                        "044001"
                    ],
                    "UGC": [
                        "RIZ002",
                        "RIZ004",
                        "RIZ005"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/RIZ002",
                    "https://api.weather.gov/zones/forecast/RIZ004",
                    "https://api.weather.gov/zones/forecast/RIZ005"
                ],
                "references": [],
                "sent": "2025-08-21T13:03:00-04:00",
                "effective": "2025-08-21T13:03:00-04:00",
                "onset": "2025-08-22T18:00:00-04:00",
                "expires": "2025-08-22T06:00:00-04:00",
                "ends": "2025-08-22T22:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Boston/Norton MA",
                "headline": "Coastal Flood Advisory issued August 21 at 1:03PM EDT until August 22 at 10:00PM EDT by NWS Boston/Norton MA",
                "description": "* WHAT...Flooding of up to one foot deep on vulnerable coastal\nroads around high tide Friday morning and Friday evening.\n\n* WHERE...Locations around Narragansett Bay.\n\n* WHEN...High tides Friday morning and Friday evening.\n\n* IMPACTS...Flooding up to one foot deep on vulnerable roads,\nparking lots, and parks.",
                "instruction": "Do not drive around barricades or through water of unknown depth\nduring high tide. Take the necessary actions to protect flood-\nprone property.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWBOX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KBOX 211703"
                    ],
                    "NWSheadline": [
                        "COASTAL FLOOD ADVISORY IN EFFECT FROM 6 AM TO 10 AM EDT FRIDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 6 PM TO 10 PM EDT FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.EXB.KBOX.CF.Y.0004.250822T2200Z-250823T0200Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T22:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.001.2",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.001.2",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.001.2",
                "areaDesc": "Southern Bristol; Washington; Newport",
                "geocode": {
                    "SAME": [
                        "025005",
                        "044009",
                        "044005"
                    ],
                    "UGC": [
                        "MAZ020",
                        "RIZ006",
                        "RIZ007"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MAZ020",
                    "https://api.weather.gov/zones/forecast/RIZ006",
                    "https://api.weather.gov/zones/forecast/RIZ007"
                ],
                "references": [],
                "sent": "2025-08-21T13:03:00-04:00",
                "effective": "2025-08-21T13:03:00-04:00",
                "onset": "2025-08-22T18:00:00-04:00",
                "expires": "2025-08-22T06:00:00-04:00",
                "ends": "2025-08-22T22:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Boston/Norton MA",
                "headline": "Coastal Flood Advisory issued August 21 at 1:03PM EDT until August 22 at 10:00PM EDT by NWS Boston/Norton MA",
                "description": "* WHAT...Large breaking waves of 10 to 15 feet. Flooding of up to\none foot deep on vulnerable coastal roads and some debris on\nroadways around high tide Friday morning and Friday evening.\n\n* WHERE...Massachusetts and Rhode Island South Coast.\n\n* WHEN...For the High Surf Advisory, until 8 PM EDT Saturday. For\nthe Coastal Flood Advisory, for high tides Friday morning and\nFriday evening.\n\n* IMPACTS...Flooding up to one foot deep occurs along the most\nvulnerable shoreline locales in Newport, Portsmouth and\nMiddletown. This includes flooding at parking lots near beaches\nin Newport, and a portion of Hazard Road. Shallow flooding also\noccurs on several streets in the Common Fence Point area.\nDangerous swimming and surfing conditions and significant beach\nerosion.",
                "instruction": "Do not drive around barricades or through water of unknown depth\nduring high tide. Take the necessary actions to protect flood-\nprone property.\n\nMany ocean beaches are closed. Stay out out of the water due to\ndangerous surf conditions. Only view surf at a safe distance, not\nfrom jetties or piers.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWBOX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KBOX 211703"
                    ],
                    "NWSheadline": [
                        "HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL 8 PM EDT SATURDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 6 AM TO 10 AM EDT FRIDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 6 PM TO 10 PM EDT FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.EXB.KBOX.CF.Y.0004.250822T2200Z-250823T0200Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T22:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.001.1",
                "areaDesc": "Southern Bristol; Washington; Newport",
                "geocode": {
                    "SAME": [
                        "025005",
                        "044009",
                        "044005"
                    ],
                    "UGC": [
                        "MAZ020",
                        "RIZ006",
                        "RIZ007"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MAZ020",
                    "https://api.weather.gov/zones/forecast/RIZ006",
                    "https://api.weather.gov/zones/forecast/RIZ007"
                ],
                "references": [],
                "sent": "2025-08-21T13:03:00-04:00",
                "effective": "2025-08-21T13:03:00-04:00",
                "onset": "2025-08-22T06:00:00-04:00",
                "expires": "2025-08-22T06:00:00-04:00",
                "ends": "2025-08-22T10:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Boston/Norton MA",
                "headline": "Coastal Flood Advisory issued August 21 at 1:03PM EDT until August 22 at 10:00AM EDT by NWS Boston/Norton MA",
                "description": "* WHAT...Large breaking waves of 10 to 15 feet. Flooding of up to\none foot deep on vulnerable coastal roads and some debris on\nroadways around high tide Friday morning and Friday evening.\n\n* WHERE...Massachusetts and Rhode Island South Coast.\n\n* WHEN...For the High Surf Advisory, until 8 PM EDT Saturday. For\nthe Coastal Flood Advisory, for high tides Friday morning and\nFriday evening.\n\n* IMPACTS...Flooding up to one foot deep occurs along the most\nvulnerable shoreline locales in Newport, Portsmouth and\nMiddletown. This includes flooding at parking lots near beaches\nin Newport, and a portion of Hazard Road. Shallow flooding also\noccurs on several streets in the Common Fence Point area.\nDangerous swimming and surfing conditions and significant beach\nerosion.",
                "instruction": "Do not drive around barricades or through water of unknown depth\nduring high tide. Take the necessary actions to protect flood-\nprone property.\n\nMany ocean beaches are closed. Stay out out of the water due to\ndangerous surf conditions. Only view surf at a safe distance, not\nfrom jetties or piers.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWBOX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KBOX 211703"
                    ],
                    "NWSheadline": [
                        "HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL 8 PM EDT SATURDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 6 AM TO 10 AM EDT FRIDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 6 PM TO 10 PM EDT FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KBOX.CF.Y.0006.250822T1000Z-250822T1400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T10:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.002.1",
                "areaDesc": "Block Island",
                "geocode": {
                    "SAME": [
                        "044009"
                    ],
                    "UGC": [
                        "RIZ008"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/RIZ008"
                ],
                "references": [],
                "sent": "2025-08-21T13:03:00-04:00",
                "effective": "2025-08-21T13:03:00-04:00",
                "onset": "2025-08-22T06:00:00-04:00",
                "expires": "2025-08-22T06:00:00-04:00",
                "ends": "2025-08-22T10:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Boston/Norton MA",
                "headline": "Coastal Flood Advisory issued August 21 at 1:03PM EDT until August 22 at 10:00AM EDT by NWS Boston/Norton MA",
                "description": "* WHAT...Large breaking waves of 10 to 15 feet. Flooding of up to\none foot deep on vulnerable coastal roads and some debris on\nroadways around high tide Friday morning and Friday evening.\n\n* WHERE...Block Island RI.\n\n* WHEN...For the High Surf Advisory, until 8 PM EDT Saturday. For\nthe Coastal Flood Advisory, for high tides Friday morning and\nFriday evening.\n\n* IMPACTS...Flooding up to one foot deep around high tide on\nvulnerable roads, parking lots, and parks. Dangerous swimming\nand surfing conditions. Significant beach and dune erosion.",
                "instruction": "Do not drive around barricades or through water of unknown depth\nduring high tide. Take the necessary actions to protect flood-\nprone property.\n\nMany ocean beaches are closed. Stay out out of the water due to\ndangerous surf conditions. Only view surf at a safe distance, not\nfrom jetties or piers.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWBOX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KBOX 211703"
                    ],
                    "NWSheadline": [
                        "HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL 8 PM EDT SATURDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 6 AM TO 10 AM EDT FRIDAY... ...COASTAL FLOOD ADVISORY IN EFFECT FROM 6 PM TO 10 PM EDT FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KBOX.CF.Y.0006.250822T1000Z-250822T1400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T10:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.006.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.006.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.006.1",
                "areaDesc": "Eastern Essex; Eastern Plymouth",
                "geocode": {
                    "SAME": [
                        "025009",
                        "025021",
                        "025023"
                    ],
                    "UGC": [
                        "MAZ007",
                        "MAZ019"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MAZ007",
                    "https://api.weather.gov/zones/forecast/MAZ019"
                ],
                "references": [],
                "sent": "2025-08-21T13:03:00-04:00",
                "effective": "2025-08-21T13:03:00-04:00",
                "onset": "2025-08-21T18:00:00-04:00",
                "expires": "2025-08-22T06:00:00-04:00",
                "ends": "2025-08-23T02:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Boston/Norton MA",
                "headline": "Coastal Flood Statement issued August 21 at 1:03PM EDT until August 23 at 2:00AM EDT by NWS Boston/Norton MA",
                "description": "* WHAT...Large breaking waves of 10 to 15 feet on ocean beaches.\nSome splashover on vulnerable coastal roads around high tide\ntonight through Friday night.\n\n* WHERE...Eastern Massachusetts coast.\n\n* WHEN...For the High Surf Advisory, until 8 PM EDT Saturday.\n\n* IMPACTS...Some water on low lying roads and property around high\ntide. Dangerous swimming and surfing conditions and significant\nbeach erosion.",
                "instruction": "Many ocean beaches are closed. Stay out out of the water due to\ndangerous surf conditions. Only view surf at a safe distance, not\nfrom near the shore, or from jetties or piers.\n\nAvoid any flooded roads during high tide.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWBOX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KBOX 211703"
                    ],
                    "NWSheadline": [
                        "HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL 8 PM EDT SATURDAY... ...COASTAL FLOOD STATEMENT IN EFFECT FROM 6 PM EDT THIS EVENING THROUGH LATE FRIDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KBOX.CF.S.0004.250821T2200Z-250823T0600Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T02:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.005.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.005.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.005.1",
                "areaDesc": "Barnstable",
                "geocode": {
                    "SAME": [
                        "025001"
                    ],
                    "UGC": [
                        "MAZ022"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MAZ022"
                ],
                "references": [],
                "sent": "2025-08-21T13:03:00-04:00",
                "effective": "2025-08-21T13:03:00-04:00",
                "onset": "2025-08-21T18:00:00-04:00",
                "expires": "2025-08-22T06:00:00-04:00",
                "ends": "2025-08-23T02:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Boston/Norton MA",
                "headline": "Coastal Flood Statement issued August 21 at 1:03PM EDT until August 23 at 2:00AM EDT by NWS Boston/Norton MA",
                "description": "* WHAT...Large breaking waves of 10 to 15 feet on ocean beaches.\nSome splashover on vulnerable coastal roads around high tide\ntonight through Friday night.\n\n* WHERE...Cape Cod.\n\n* WHEN...For the High Surf Advisory, until 8 PM EDT Saturday.\n\n* IMPACTS...Some water on low lying roads and property around high\ntide. Dangerous swimming and surfing conditions and significant\nbeach erosion.",
                "instruction": "Many ocean beaches are closed. Stay out out of the water due to\ndangerous surf conditions. Only view surf at a safe distance, not\nfrom near the shore, or from jetties or piers.\n\nAvoid any flooded roads during high tide.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWBOX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KBOX 211703"
                    ],
                    "NWSheadline": [
                        "HIGH SURF ADVISORY REMAINS IN EFFECT UNTIL 8 PM EDT SATURDAY... ...COASTAL FLOOD STATEMENT IN EFFECT FROM 6 PM EDT THIS EVENING THROUGH LATE FRIDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KBOX.CF.S.0004.250821T2200Z-250823T0600Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T02:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.008.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.008.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.54a2e474ae9099f8c3d5bf1742ef1e7e00f7882a.008.1",
                "areaDesc": "Suffolk; Eastern Norfolk",
                "geocode": {
                    "SAME": [
                        "025021",
                        "025025"
                    ],
                    "UGC": [
                        "MAZ015",
                        "MAZ016"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MAZ015",
                    "https://api.weather.gov/zones/forecast/MAZ016"
                ],
                "references": [],
                "sent": "2025-08-21T13:03:00-04:00",
                "effective": "2025-08-21T13:03:00-04:00",
                "onset": "2025-08-21T18:00:00-04:00",
                "expires": "2025-08-22T06:00:00-04:00",
                "ends": "2025-08-23T02:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Boston/Norton MA",
                "headline": "Coastal Flood Statement issued August 21 at 1:03PM EDT until August 23 at 2:00AM EDT by NWS Boston/Norton MA",
                "description": "* WHAT...Large breaking waves of 10 to 15 feet on ocean beaches.\nSome splashover on vulnerable coastal roads around high tide\ntonight through Friday night.\n\n* WHERE...Boston and nearby coastal communities.\n\n* WHEN...High tides late tonight through Friday night.\n\n* IMPACTS...Some water on the lowest lying roads and property.",
                "instruction": "Do not drive through flooded roadways.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWBOX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KBOX 211703"
                    ],
                    "NWSheadline": [
                        "COASTAL FLOOD STATEMENT IN EFFECT FROM 6 PM EDT THIS EVENING THROUGH LATE FRIDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KBOX.CF.S.0004.250821T2200Z-250823T0600Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T02:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fb8f7227b478f66ebcb6fd95a16b7f4e6ceee957.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fb8f7227b478f66ebcb6fd95a16b7f4e6ceee957.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.fb8f7227b478f66ebcb6fd95a16b7f4e6ceee957.001.1",
                "areaDesc": "Jenkins; Screven; Candler; Bulloch; Effingham; Tattnall; Evans; Inland Bryan; Coastal Bryan; Inland Chatham; Coastal Chatham; Long; Inland Liberty; Coastal Liberty; Inland McIntosh; Coastal McIntosh; Allendale; Hampton; Inland Colleton; Dorchester; Inland Berkeley; Inland Jasper; Beaufort; Coastal Colleton; Charleston; Coastal Jasper; Tidal Berkeley",
                "geocode": {
                    "SAME": [
                        "013165",
                        "013251",
                        "013043",
                        "013031",
                        "013103",
                        "013267",
                        "013109",
                        "013029",
                        "013051",
                        "013183",
                        "013179",
                        "013191",
                        "045005",
                        "045049",
                        "045029",
                        "045035",
                        "045015",
                        "045053",
                        "045013",
                        "045019"
                    ],
                    "UGC": [
                        "GAZ087",
                        "GAZ088",
                        "GAZ099",
                        "GAZ100",
                        "GAZ101",
                        "GAZ114",
                        "GAZ115",
                        "GAZ116",
                        "GAZ117",
                        "GAZ118",
                        "GAZ119",
                        "GAZ137",
                        "GAZ138",
                        "GAZ139",
                        "GAZ140",
                        "GAZ141",
                        "SCZ040",
                        "SCZ042",
                        "SCZ043",
                        "SCZ044",
                        "SCZ045",
                        "SCZ047",
                        "SCZ048",
                        "SCZ049",
                        "SCZ050",
                        "SCZ051",
                        "SCZ052"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/GAZ087",
                    "https://api.weather.gov/zones/forecast/GAZ088",
                    "https://api.weather.gov/zones/forecast/GAZ099",
                    "https://api.weather.gov/zones/forecast/GAZ100",
                    "https://api.weather.gov/zones/forecast/GAZ101",
                    "https://api.weather.gov/zones/forecast/GAZ114",
                    "https://api.weather.gov/zones/forecast/GAZ115",
                    "https://api.weather.gov/zones/forecast/GAZ116",
                    "https://api.weather.gov/zones/forecast/GAZ117",
                    "https://api.weather.gov/zones/forecast/GAZ118",
                    "https://api.weather.gov/zones/forecast/GAZ119",
                    "https://api.weather.gov/zones/forecast/GAZ137",
                    "https://api.weather.gov/zones/forecast/GAZ138",
                    "https://api.weather.gov/zones/forecast/GAZ139",
                    "https://api.weather.gov/zones/forecast/GAZ140",
                    "https://api.weather.gov/zones/forecast/GAZ141",
                    "https://api.weather.gov/zones/forecast/SCZ040",
                    "https://api.weather.gov/zones/forecast/SCZ042",
                    "https://api.weather.gov/zones/forecast/SCZ043",
                    "https://api.weather.gov/zones/forecast/SCZ044",
                    "https://api.weather.gov/zones/forecast/SCZ045",
                    "https://api.weather.gov/zones/forecast/SCZ047",
                    "https://api.weather.gov/zones/forecast/SCZ048",
                    "https://api.weather.gov/zones/forecast/SCZ049",
                    "https://api.weather.gov/zones/forecast/SCZ050",
                    "https://api.weather.gov/zones/forecast/SCZ051",
                    "https://api.weather.gov/zones/forecast/SCZ052"
                ],
                "references": [],
                "sent": "2025-08-21T13:02:00-04:00",
                "effective": "2025-08-21T13:02:00-04:00",
                "onset": "2025-08-22T08:00:00-04:00",
                "expires": "2025-08-21T21:15:00-04:00",
                "ends": "2025-08-24T02:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Possible",
                "urgency": "Future",
                "event": "Flood Watch",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Charleston SC",
                "headline": "Flood Watch issued August 21 at 1:02PM EDT until August 24 at 2:00AM EDT by NWS Charleston SC",
                "description": "* WHAT...Flash flooding caused by excessive rainfall is possible.\n\n* WHERE...Portions of southeast Georgia, including the following\nareas, Bulloch, Candler, Coastal Bryan, Coastal Chatham, Coastal\nLiberty, Coastal McIntosh, Effingham, Evans, Inland Bryan, Inland\nChatham, Inland Liberty, Inland McIntosh, Jenkins, Long, Screven\nand Tattnall and southeast South Carolina, including the following\nareas, Allendale, Beaufort, Charleston, Coastal Colleton, Coastal\nJasper, Dorchester, Hampton, Inland Berkeley, Inland Colleton,\nInland Jasper and Tidal Berkeley.\n\n* WHEN...From Friday morning through late Saturday night.\n\n* IMPACTS...Excessive runoff may result in flooding of rivers,\ncreeks, streams, and other low-lying and flood-prone locations.\nCreeks and streams may rise out of their banks. Flooding may occur\nin poor drainage and urban areas. Storm drains and ditches may\nbecome clogged with debris. Extensive street flooding and flooding\nof creeks and rivers are possible.\n\n* ADDITIONAL DETAILS...\n- Numerous to widespread showers and thunderstorms will impact\nthe region Friday into Saturday. Rainfall amounts of 2 to 4\ninches can be expected through early Sunday morning with\nlocalized amounts exceeding 6 inches. Ground conditions\nremain wet and any sustained period of heavy rainfall will\nlikely lead to areas of flash flooding.\n- http://www.weather.gov/safety/flood",
                "instruction": "Be prepared to protect life and property, especially in areas prone\nto flooding. If flooding develops, move to higher ground\nimmediately. If driving, be prepared for flooded roadways and\npossible road closures.",
                "response": "Prepare",
                "parameters": {
                    "AWIPSidentifier": [
                        "FFACHS"
                    ],
                    "WMOidentifier": [
                        "WGUS62 KCHS 211702"
                    ],
                    "NWSheadline": [
                        "FLOOD WATCH IN EFFECT FROM FRIDAY MORNING THROUGH LATE SATURDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ],
                    "VTEC": [
                        "/O.NEW.KCHS.FA.A.0002.250822T1200Z-250824T0600Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-24T02:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "FFA"
                    ],
                    "NationalWeatherService": [
                        "FAA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.de5e0f7c8906d70b1dfb1452e23e24d5d10055d0.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.de5e0f7c8906d70b1dfb1452e23e24d5d10055d0.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.de5e0f7c8906d70b1dfb1452e23e24d5d10055d0.001.1",
                "areaDesc": "Tohono O'odham Nation including Sells; Tucson Metro Area including Tucson/Green Valley/Marana/Vail; South Central Pinal County including Eloy/Picacho Peak State Park; Southeast Pinal County including Kearny/Mammoth/Oracle",
                "geocode": {
                    "SAME": [
                        "004019",
                        "004021"
                    ],
                    "UGC": [
                        "AZZ502",
                        "AZZ504",
                        "AZZ505",
                        "AZZ506"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/AZZ502",
                    "https://api.weather.gov/zones/forecast/AZZ504",
                    "https://api.weather.gov/zones/forecast/AZZ505",
                    "https://api.weather.gov/zones/forecast/AZZ506"
                ],
                "references": [],
                "sent": "2025-08-21T09:38:00-07:00",
                "effective": "2025-08-21T09:38:00-07:00",
                "onset": "2025-08-21T16:00:00-07:00",
                "expires": "2025-08-21T21:00:00-07:00",
                "ends": "2025-08-21T21:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Blowing Dust Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Tucson AZ",
                "headline": "Blowing Dust Advisory issued August 21 at 9:38AM MST until August 21 at 9:00PM MST by NWS Tucson AZ",
                "description": "* WHAT...For the Extreme Heat Warning, dangerously hot conditions\nwith temperatures ranging from 105 to 110 across much of Pima and\nsoutheastern Pinal counties leading to Major Heat Risk. In other\nareas of southeastern Arizona, high temperatures will range from\n100 to 105 degrees. For the Blowing Dust Advisory, visibility\nbetween one-quarter and one mile in blowing dust expected.\n\n* WHERE...South Central Pinal County, Southeast Pinal County, Tohono\nO'odham Nation, and Tucson Metro Area.\n\n* WHEN...The Extreme Heat Warning is in effect now until 8 PM MST\nFriday. The Blowing Dust Advisory will be in effect from 4 PM this\nafternoon to 9 PM MST this evening.\n\n* IMPACTS...Hazardous driving conditions due to reduced visibility.\nHeat related illnesses increase significantly during extreme heat\nevents.\n\n* ADDITIONAL DETAILS...Major Heat Risk is when heat will affect\nanyone without cooling or hydration as well as health systems and\nindustries.",
                "instruction": "Persons with respiratory problems should make preparations to stay\nindoors until the storm passes. Be ready for a sudden drop in\nvisibility to near zero. If you encounter blowing dust or blowing\nsand on the roadway or see it approaching, pull off the road as far\nas possible and put your vehicle in park. Turn the lights all the\nway off and keep foot off the brake pedal. Remember, 'Pull Aside,\nStay Alive'.\n\nTo reduce risk during outdoor work, the Occupational Safety and\nHealth Administration recommends scheduling frequent rest breaks in\nshaded or air conditioned environments. Anyone overcome by heat\nshould be moved to a cool and shaded location. Heat stroke is an\nemergency! Call 9 1 1.\n\nTake extra precautions if you work or spend time outside. When\npossible, reschedule strenuous activities to early morning or\nevening. Know the signs and symptoms of heat exhaustion and heat\nstroke. Wear lightweight and loose fitting clothing when possible\nand drink plenty of water.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "NPWTWC"
                    ],
                    "WMOidentifier": [
                        "WWUS75 KTWC 211638"
                    ],
                    "NWSheadline": [
                        "BLOWING DUST ADVISORY IN EFFECT FROM 4 PM THIS AFTERNOON TO 9 PM MST THIS EVENING... ...EXTREME HEAT WARNING REMAINS IN EFFECT UNTIL 8 PM MST FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KTWC.DU.Y.0015.250821T2300Z-250822T0400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T21:00:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "DUY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dc506d3fc6cb8928978eff2797472d47a1fedc7f.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dc506d3fc6cb8928978eff2797472d47a1fedc7f.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.dc506d3fc6cb8928978eff2797472d47a1fedc7f.002.1",
                "areaDesc": "Northwest Pinal County; West Pinal County",
                "geocode": {
                    "SAME": [
                        "004021"
                    ],
                    "UGC": [
                        "AZZ553",
                        "AZZ554"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/AZZ553",
                    "https://api.weather.gov/zones/forecast/AZZ554"
                ],
                "references": [],
                "sent": "2025-08-21T09:27:00-07:00",
                "effective": "2025-08-21T09:27:00-07:00",
                "onset": "2025-08-21T16:00:00-07:00",
                "expires": "2025-08-21T21:30:00-07:00",
                "ends": "2025-08-21T21:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Blowing Dust Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Phoenix AZ",
                "headline": "Blowing Dust Advisory issued August 21 at 9:27AM MST until August 21 at 9:00PM MST by NWS Phoenix AZ",
                "description": "* WHAT...For the Extreme Heat Warning, dangerously hot conditions.\nAfternoon temperatures 107 to 114. Major Heat Risk. For the\nBlowing Dust Advisory, visibility between one-quarter and one mile\nin blowing dust expected.\n\n* WHERE...Northwest Pinal County and West Pinal County.\n\n* WHEN...For the Extreme Heat Warning, until 8 PM MST Friday. For\nthe Blowing Dust Advisory, from 4 PM this afternoon to 9 PM MST\nthis evening.\n\n* IMPACTS...Hazardous driving conditions due to reduced visibility.\nHeat related illnesses increase significantly during extreme heat\nevents. Overexposure can cause heat cramps and heat exhaustion to\ndevelop and, without intervention, can lead to heat stroke.",
                "instruction": "Persons with respiratory problems should make preparations to stay\nindoors until the storm passes. Be ready for a sudden drop in\nvisibility to near zero. If you encounter blowing dust or blowing\nsand on the roadway or see it approaching, pull off the road as far\nas possible and put your vehicle in park. Turn the lights all the\nway off and keep foot off the brake pedal. Remember, 'Pull Aside,\nStay Alive'.\n\nAn Extreme Heat Warning means that a period of very hot\ntemperatures, even by local standards, will occur. Actions should be\ntaken to lessen the impact of the extreme heat.\n\nTake extra precautions if you work or spend time outside. When\npossible, reschedule strenuous activities to early morning or\nevening. Know the signs and symptoms of heat exhaustion and heat\nstroke. Wear lightweight and loose-fitting clothing when possible\nand drink plenty of water.\n\nTo reduce risk during outdoor work, the Occupational Safety and\nHealth Administration recommends scheduling frequent rest breaks in\nshaded or air conditioned environments. Anyone overcome by heat\nshould be moved to a cool and shaded location. Heat stroke is an\nemergency! Call 9 1 1.\n\nPublic cooling shelters are available in some areas. Consult county\nofficials for more details.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "NPWPSR"
                    ],
                    "WMOidentifier": [
                        "WWUS75 KPSR 211627"
                    ],
                    "NWSheadline": [
                        "EXTREME HEAT WARNING REMAINS IN EFFECT UNTIL 8 PM MST FRIDAY... ...BLOWING DUST ADVISORY IN EFFECT FROM 4 PM THIS AFTERNOON TO 9 PM MST THIS EVENING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KPSR.DU.Y.0008.250821T2300Z-250822T0400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T21:00:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "DUY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dc506d3fc6cb8928978eff2797472d47a1fedc7f.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.dc506d3fc6cb8928978eff2797472d47a1fedc7f.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.dc506d3fc6cb8928978eff2797472d47a1fedc7f.001.1",
                "areaDesc": "South Mountain/Ahwatukee; Southeast Valley/Queen Creek",
                "geocode": {
                    "SAME": [
                        "004013"
                    ],
                    "UGC": [
                        "AZZ550",
                        "AZZ551"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/AZZ550",
                    "https://api.weather.gov/zones/forecast/AZZ551"
                ],
                "references": [],
                "sent": "2025-08-21T09:27:00-07:00",
                "effective": "2025-08-21T09:27:00-07:00",
                "onset": "2025-08-21T16:00:00-07:00",
                "expires": "2025-08-21T21:30:00-07:00",
                "ends": "2025-08-21T21:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Blowing Dust Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Phoenix AZ",
                "headline": "Blowing Dust Advisory issued August 21 at 9:27AM MST until August 21 at 9:00PM MST by NWS Phoenix AZ",
                "description": "* WHAT...For the Extreme Heat Warning, dangerously hot conditions.\nAfternoon temperatures 110 to 113. Major Heat Risk. For the\nBlowing Dust Advisory, visibility between one-quarter and one mile\nin blowing dust expected.\n\n* WHERE...South Mountain/Ahwatukee and Southeast Valley/Queen Creek.\n\n* WHEN...For the Extreme Heat Warning, until 8 PM MST Friday. For\nthe Blowing Dust Advisory, from 4 PM this afternoon to 9 PM MST\nthis evening.\n\n* IMPACTS...Hazardous driving conditions due to reduced visibility.\nHeat related illnesses increase significantly during extreme heat\nevents. Overexposure can cause heat cramps and heat exhaustion to\ndevelop and, without intervention, can lead to heat stroke.\n\n* ADDITIONAL DETAILS...In Maricopa County, call 2-1-1 to find a free\ncooling center, transportation, water, and more.",
                "instruction": "Persons with respiratory problems should make preparations to stay\nindoors until the storm passes. Be ready for a sudden drop in\nvisibility to near zero. If you encounter blowing dust or blowing\nsand on the roadway or see it approaching, pull off the road as far\nas possible and put your vehicle in park. Turn the lights all the\nway off and keep foot off the brake pedal. Remember, 'Pull Aside,\nStay Alive'.\n\nAn Extreme Heat Warning means that a period of very hot\ntemperatures, even by local standards, will occur. Actions should be\ntaken to lessen the impact of the extreme heat.\n\nTake extra precautions if you work or spend time outside. When\npossible, reschedule strenuous activities to early morning or\nevening. Know the signs and symptoms of heat exhaustion and heat\nstroke. Wear lightweight and loose-fitting clothing when possible\nand drink plenty of water.\n\nTo reduce risk during outdoor work, the Occupational Safety and\nHealth Administration recommends scheduling frequent rest breaks in\nshaded or air conditioned environments. Anyone overcome by heat\nshould be moved to a cool and shaded location. Heat stroke is an\nemergency! Call 9 1 1.\n\nPublic cooling shelters are available in some areas. Consult county\nofficials for more details.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "NPWPSR"
                    ],
                    "WMOidentifier": [
                        "WWUS75 KPSR 211627"
                    ],
                    "NWSheadline": [
                        "EXTREME HEAT WARNING REMAINS IN EFFECT UNTIL 8 PM MST FRIDAY... ...BLOWING DUST ADVISORY IN EFFECT FROM 4 PM THIS AFTERNOON TO 9 PM MST THIS EVENING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KPSR.DU.Y.0008.250821T2300Z-250822T0400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T21:00:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "DUY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.182691a6162413b28485eaec162ffc313dd46ca6.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.182691a6162413b28485eaec162ffc313dd46ca6.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.182691a6162413b28485eaec162ffc313dd46ca6.001.1",
                "areaDesc": "Maricopa, AZ",
                "geocode": {
                    "SAME": [
                        "004013"
                    ],
                    "UGC": [
                        "AZC013"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/AZC013"
                ],
                "references": [],
                "sent": "2025-08-21T09:12:00-07:00",
                "effective": "2025-08-21T09:12:00-07:00",
                "onset": "2025-08-21T09:12:00-07:00",
                "expires": "2025-08-22T21:00:00-07:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Phoenix AZ",
                "headline": "Air Quality Alert issued August 21 at 9:12AM MST by NWS Phoenix AZ",
                "description": "AQAPSR\n\nThe Arizona Department of Environmental Quality (ADEQ) has extended\nan Ozone High Pollution Advisory for the Phoenix Metro Area through\nFriday.\n\nThis means that forecast weather conditions combined with existing\nozone levels are expected to result in local maximum 8-hour ozone\nconcentrations that pose a health risk. Adverse health effects\nincrease as air quality deteriorates.\n\nOzone is an air contaminant which can cause breathing difficulties\nfor children, older adults, as well as persons with respiratory\nproblems. A decrease in physical activity is recommended.\n\nYou are urged to car pool, telecommute or use mass transit.\nThe use of gasoline-powered equipment should be reduced or done late\nin the day.\n\nFor details on this High Pollution Advisory, visit the ADEQ internet\nsite at www.azdeq.gov/forecast/phoenix or call 602-771-2300.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQAPSR"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KPSR 211612"
                    ],
                    "NWSheadline": [
                        "OZONE HIGH POLLUTION ADVISORY FOR MARICOPA COUNTY INCLUDING THE PHOENIX METRO AREA THROUGH FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.57b6deb3833c4ab294fbdf018984e7692bd48a8c.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -99.68,
                            29.63
                        ],
                        [
                            -99.60000000000001,
                            29.63
                        ],
                        [
                            -99.49000000000001,
                            29.63
                        ],
                        [
                            -99.42000000000002,
                            29.63
                        ],
                        [
                            -99.41000000000001,
                            29.63
                        ],
                        [
                            -99.36000000000001,
                            29.63
                        ],
                        [
                            -99.33000000000001,
                            29.63
                        ],
                        [
                            -99.31000000000002,
                            29.63
                        ],
                        [
                            -99.27000000000001,
                            29.63
                        ],
                        [
                            -99.25000000000001,
                            29.63
                        ],
                        [
                            -99.23000000000002,
                            29.63
                        ],
                        [
                            -99.17000000000002,
                            29.619999999999997
                        ],
                        [
                            -99.20999990000001,
                            29.459999999999997
                        ],
                        [
                            -99.39000000000001,
                            29.439999999999998
                        ],
                        [
                            -99.68000000000002,
                            29.479999999999997
                        ],
                        [
                            -99.68,
                            29.63
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.57b6deb3833c4ab294fbdf018984e7692bd48a8c.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.57b6deb3833c4ab294fbdf018984e7692bd48a8c.001.1",
                "areaDesc": "Medina, TX; Uvalde, TX",
                "geocode": {
                    "SAME": [
                        "048325",
                        "048463"
                    ],
                    "UGC": [
                        "TXC325",
                        "TXC463"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/TXC325",
                    "https://api.weather.gov/zones/county/TXC463"
                ],
                "references": [],
                "sent": "2025-08-21T10:53:00-05:00",
                "effective": "2025-08-21T10:53:00-05:00",
                "onset": "2025-08-21T10:53:00-05:00",
                "expires": "2025-08-21T14:00:00-05:00",
                "ends": "2025-08-21T14:00:00-05:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Austin/San Antonio TX",
                "headline": "Flood Advisory issued August 21 at 10:53AM CDT until August 21 at 2:00PM CDT by NWS Austin/San Antonio TX",
                "description": "* WHAT...Urban and small stream flooding caused by excessive\nrainfall is expected.\n\n* WHERE...A portion of south central Texas, including the following\ncounties, Medina and Uvalde.\n\n* WHEN...Until 200 PM CDT.\n\n* IMPACTS...Minor flooding in low-lying and poor drainage areas.\nOverflowing poor drainage areas.\n\n* ADDITIONAL DETAILS...\n- At 1053 AM CDT, Doppler radar indicated heavy rain due to\nthunderstorms. This will cause urban and small stream\nflooding. Between 1 and 2 inches of rain have fallen.\n- Additional rainfall amounts up to 2 inches are expected over\nthe area. This additional rain will result in minor flooding.\n- Some locations that will experience flooding include...\nUtopia and Hill Country State Natural Area.\n- http://www.weather.gov/safety/flood",
                "instruction": "Turn around, don't drown when encountering flooded roads. Most flood\ndeaths occur in vehicles.\n\nBe aware of your surroundings and do not drive on flooded roads.\n\nPlease report observed flooding to local emergency services or law\nenforcement and request they pass this information to the National\nWeather Service when you can do so safely.",
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "FLSEWX"
                    ],
                    "WMOidentifier": [
                        "WGUS84 KEWX 211553"
                    ],
                    "NWSheadline": [
                        "FLOOD ADVISORY IN EFFECT UNTIL 2 PM CDT THIS AFTERNOON"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KEWX.FA.Y.0201.250821T1553Z-250821T1900Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T14:00:00-05:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "FAY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6a0fd5a8da3291e9e8783839bff73eae414b1a9b.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6a0fd5a8da3291e9e8783839bff73eae414b1a9b.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.6a0fd5a8da3291e9e8783839bff73eae414b1a9b.001.1",
                "areaDesc": "Adams, CO; Jefferson, CO; Broomfield, CO; Larimer, CO; Arapahoe, CO; Denver, CO; Boulder, CO; Weld, CO; Douglas, CO",
                "geocode": {
                    "SAME": [
                        "008001",
                        "008059",
                        "008014",
                        "008069",
                        "008005",
                        "008031",
                        "008013",
                        "008123",
                        "008035"
                    ],
                    "UGC": [
                        "COC001",
                        "COC059",
                        "COC014",
                        "COC069",
                        "COC005",
                        "COC031",
                        "COC013",
                        "COC123",
                        "COC035"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/COC001",
                    "https://api.weather.gov/zones/county/COC059",
                    "https://api.weather.gov/zones/county/COC014",
                    "https://api.weather.gov/zones/county/COC069",
                    "https://api.weather.gov/zones/county/COC005",
                    "https://api.weather.gov/zones/county/COC031",
                    "https://api.weather.gov/zones/county/COC013",
                    "https://api.weather.gov/zones/county/COC123",
                    "https://api.weather.gov/zones/county/COC035"
                ],
                "references": [],
                "sent": "2025-08-21T09:10:00-06:00",
                "effective": "2025-08-21T09:10:00-06:00",
                "onset": "2025-08-21T09:10:00-06:00",
                "expires": "2025-08-21T16:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Denver CO",
                "headline": "Air Quality Alert issued August 21 at 9:10AM MDT by NWS Denver CO",
                "description": "The Colorado Department of Public Health and Environment has\nissued the following...\n\nWHAT...Ozone Action Day Alert.\n\nWHERE...Douglas, Jefferson, Denver, western Arapahoe, western\nAdams, Broomfield, Boulder, Larimer, and Weld Counties\n\nWHEN...400 PM Wednesday August 20 to 400 PM Thursday August 21\n\nIMPACTS...Ozone Action Day Alert is now in effect for the Front\nRange Urban Corridor.  Hot, stagnant weather will allow ozone to\nreach the Unhealthy for Sensitive Groups category on Wednesday and\nThursday. For Colorado air quality conditions, forecasts, and\nadvisories, visit:\nhttps://www.colorado.gov/airquality/colorado_summary.aspx   If\npossible, please help us reduce ozone pollution by limiting\ndriving gas and diesel-powered vehicles until at least 4 p.m.\nThursday, August 21, 2025. Colorado is also addressing ozone\npollution through state policies. For more information about\nhealth impacts and how ozone pollution forms in Colorado, visit:\nhttps://cdphe.colorado.gov/ozone-pollution-and-your-health\n\nHEALTH INFORMATION...Increasing likelihood of respiratory symptoms\nand breathing discomfort in active children and adults and people\nwith lung disease, such as asthma. Active children and adults, and\npeople with lung disease, such as asthma, should reduce prolonged\nor heavy outdoor exertion.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQABOU"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KBOU 211510"
                    ],
                    "NWSheadline": [
                        "OZONE ACTION DAY ALERT FROM 400 PM WEDNESDAY UNTIL 400 PM THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33cdec6a5b0658dfb5fcf0632a853a3942c55a8f.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33cdec6a5b0658dfb5fcf0632a853a3942c55a8f.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.33cdec6a5b0658dfb5fcf0632a853a3942c55a8f.002.1",
                "areaDesc": "Eagle, CO; Garfield, CO",
                "geocode": {
                    "SAME": [
                        "008037",
                        "008045"
                    ],
                    "UGC": [
                        "COC037",
                        "COC045"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/COC037",
                    "https://api.weather.gov/zones/county/COC045"
                ],
                "references": [],
                "sent": "2025-08-21T09:10:00-06:00",
                "effective": "2025-08-21T09:10:00-06:00",
                "onset": "2025-08-21T09:10:00-06:00",
                "expires": "2025-08-22T09:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Grand Junction CO",
                "headline": "Air Quality Alert issued August 21 at 9:10AM MDT by NWS Grand Junction CO",
                "description": "The Colorado Department of Public Health and Environment has\nissued the following...\n\nWHAT...Air Quality Health Advisory for Wildfire Smoke.\n\nWHERE...Western Eagle and eastern Garfield Counties. Locations\ninclude, but are not limited to Sweetwater Lake, Dotsero, Gypsum,\nand Eagle.\n\nWHEN...900 AM Thursday August 21 to 900 AM Friday August 22\n\nIMPACTS...Smoke from the Derby Fire is impacting central Colorado.\nThe heaviest smoke is expected in areas near the fire and in low-\nlying areas.\n\nHEALTH INFORMATION...Public Health Recommendations: If smoke is\nthick or becomes thick in your neighborhood you may want to remain\nindoors. This is especially true for those with heart disease,\nrespiratory illnesses, the very young, and older adults. Consider\nlimiting outdoor activity when moderate to heavy smoke is present.\nConsider relocating temporarily if smoke is present indoors and is\nmaking you ill. If visibility is less than 5 miles in smoke in\nyour neighborhood, smoke has reached levels that are unhealthy.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQAGJT"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KGJT 211510"
                    ],
                    "NWSheadline": [
                        "AIR QUALITY HEALTH ADVISORY FOR WILDFIRE SMOKE FROM 900 AM THURSDAY UNTIL 900 AM FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33cdec6a5b0658dfb5fcf0632a853a3942c55a8f.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33cdec6a5b0658dfb5fcf0632a853a3942c55a8f.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.33cdec6a5b0658dfb5fcf0632a853a3942c55a8f.001.1",
                "areaDesc": "Dolores, CO; Montezuma, CO",
                "geocode": {
                    "SAME": [
                        "008033",
                        "008083"
                    ],
                    "UGC": [
                        "COC033",
                        "COC083"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/COC033",
                    "https://api.weather.gov/zones/county/COC083"
                ],
                "references": [],
                "sent": "2025-08-21T09:10:00-06:00",
                "effective": "2025-08-21T09:10:00-06:00",
                "onset": "2025-08-21T09:10:00-06:00",
                "expires": "2025-08-22T09:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Grand Junction CO",
                "headline": "Air Quality Alert issued August 21 at 9:10AM MDT by NWS Grand Junction CO",
                "description": "The Colorado Department of Public Health and Environment has\nissued the following...\n\nWHAT...Air Quality Health Advisory for Wildfire Smoke.\n\nWHERE...Southeastern Dolores and northeastern Montezuma Counties.\nLocations include, but are not limited to Stoner.\n\nWHEN...900 AM Thursday August 21 to 900 AM Friday August 22\n\nIMPACTS...Locations near the Stoner Mesa Fire, including highway\n145 and the Stoner area, are experiencing heavy smoke. Smoke is\nexpected to continue through Friday morning.\n\nHEALTH INFORMATION...Public Health Recommendations: If smoke is\nthick or becomes thick in your neighborhood you may want to remain\nindoors. This is especially true for those with heart disease,\nrespiratory illnesses, the very young, and older adults. Consider\nlimiting outdoor activity when moderate to heavy smoke is present.\nConsider relocating temporarily if smoke is present indoors and is\nmaking you ill. If visibility is less than 5 miles in smoke in\nyour neighborhood, smoke has reached levels that are unhealthy.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQAGJT"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KGJT 211510"
                    ],
                    "NWSheadline": [
                        "AIR QUALITY HEALTH ADVISORY FOR WILDFIRE SMOKE FROM 900 AM THURSDAY UNTIL 900 AM FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4c88615fe12f5e36a88fab7d689b96d4caf6cdbf.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -100.02,
                            29.67
                        ],
                        [
                            -100.02,
                            29.680000000000003
                        ],
                        [
                            -100.03,
                            29.690000000000005
                        ],
                        [
                            -100,
                            29.690000000000005
                        ],
                        [
                            -99.83,
                            29.920000000000005
                        ],
                        [
                            -99.84,
                            30.070000000000004
                        ],
                        [
                            -99.69,
                            30.070000000000004
                        ],
                        [
                            -99.69,
                            29.910000000000004
                        ],
                        [
                            -99.36,
                            29.910000000000004
                        ],
                        [
                            -99.37,
                            29.630000000000003
                        ],
                        [
                            -100.01,
                            29.630000000000003
                        ],
                        [
                            -100.02,
                            29.67
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.4c88615fe12f5e36a88fab7d689b96d4caf6cdbf.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.4c88615fe12f5e36a88fab7d689b96d4caf6cdbf.001.1",
                "areaDesc": "Bandera, TX; Real, TX",
                "geocode": {
                    "SAME": [
                        "048019",
                        "048385"
                    ],
                    "UGC": [
                        "TXC019",
                        "TXC385"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/TXC019",
                    "https://api.weather.gov/zones/county/TXC385"
                ],
                "references": [],
                "sent": "2025-08-21T10:06:00-05:00",
                "effective": "2025-08-21T10:06:00-05:00",
                "onset": "2025-08-21T10:06:00-05:00",
                "expires": "2025-08-21T13:15:00-05:00",
                "ends": "2025-08-21T13:15:00-05:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Austin/San Antonio TX",
                "headline": "Flood Advisory issued August 21 at 10:06AM CDT until August 21 at 1:15PM CDT by NWS Austin/San Antonio TX",
                "description": "* WHAT...Urban and small stream flooding caused by excessive\nrainfall is expected.\n\n* WHERE...A portion of south central Texas, including the following\ncounties, Bandera and Real.\n\n* WHEN...Until 115 PM CDT.\n\n* IMPACTS...Minor flooding in low-lying and poor drainage areas.\nOverflowing poor drainage areas.\n\n* ADDITIONAL DETAILS...\n- At 1006 AM CDT, Doppler radar indicated heavy rain due to\nthunderstorms. This will cause urban and small stream\nflooding. Between 1 and 2 inches of rain have fallen.\n- Additional rainfall amounts up to 2 inches are expected over\nthe area. This additional rain will result in minor flooding.\n- Some locations that will experience flooding include...\nLeakey, Vanderpool, Camp Wood, Lost Maples State Natural\nArea, Tuff, Rio Frio and Prade Ranch.\n- http://www.weather.gov/safety/flood",
                "instruction": "Turn around, don't drown when encountering flooded roads. Most flood\ndeaths occur in vehicles.\n\nBe aware of your surroundings and do not drive on flooded roads.\n\nIn hilly terrain there are hundreds of low water crossings which are\npotentially dangerous in heavy rain. Do not attempt to cross flooded\nroads. Find an alternate route.",
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "FLSEWX"
                    ],
                    "WMOidentifier": [
                        "WGUS84 KEWX 211506"
                    ],
                    "NWSheadline": [
                        "FLOOD ADVISORY IN EFFECT UNTIL 115 PM CDT THIS AFTERNOON"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KEWX.FA.Y.0200.250821T1506Z-250821T1815Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T13:15:00-05:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "FAY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1818d712e816a0ea11b11c9d88d9a31522e06990.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.1818d712e816a0ea11b11c9d88d9a31522e06990.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.1818d712e816a0ea11b11c9d88d9a31522e06990.001.1",
                "areaDesc": "Dorchester; Wicomico; Somerset; Inland Worcester; Maryland Beaches; Pasquotank; Camden; Western Currituck; Bertie; Chowan; Perquimans; Eastern Currituck; Westmoreland; Richmond; Northumberland; Lancaster; Charles City; New Kent; Gloucester; Middlesex; Mathews; Surry; James City; Isle of Wight; Norfolk/Portsmouth; Suffolk; Chesapeake; Virginia Beach; Accomack; Northampton; Eastern King William; Eastern King and Queen; Eastern Essex; York; Newport News; Hampton/Poquoson",
                "geocode": {
                    "SAME": [
                        "024019",
                        "024045",
                        "024039",
                        "024047",
                        "037139",
                        "037029",
                        "037053",
                        "037015",
                        "037041",
                        "037143",
                        "051193",
                        "051159",
                        "051133",
                        "051103",
                        "051036",
                        "051127",
                        "051073",
                        "051119",
                        "051115",
                        "051181",
                        "051095",
                        "051830",
                        "051093",
                        "051710",
                        "051740",
                        "051800",
                        "051550",
                        "051810",
                        "051001",
                        "051131",
                        "051101",
                        "051097",
                        "051057",
                        "051199",
                        "051735",
                        "051700",
                        "051650"
                    ],
                    "UGC": [
                        "MDZ021",
                        "MDZ022",
                        "MDZ023",
                        "MDZ024",
                        "MDZ025",
                        "NCZ015",
                        "NCZ016",
                        "NCZ017",
                        "NCZ030",
                        "NCZ031",
                        "NCZ032",
                        "NCZ102",
                        "VAZ075",
                        "VAZ076",
                        "VAZ077",
                        "VAZ078",
                        "VAZ082",
                        "VAZ083",
                        "VAZ084",
                        "VAZ085",
                        "VAZ086",
                        "VAZ089",
                        "VAZ090",
                        "VAZ093",
                        "VAZ095",
                        "VAZ096",
                        "VAZ097",
                        "VAZ098",
                        "VAZ099",
                        "VAZ100",
                        "VAZ518",
                        "VAZ520",
                        "VAZ522",
                        "VAZ523",
                        "VAZ524",
                        "VAZ525"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MDZ021",
                    "https://api.weather.gov/zones/forecast/MDZ022",
                    "https://api.weather.gov/zones/forecast/MDZ023",
                    "https://api.weather.gov/zones/forecast/MDZ024",
                    "https://api.weather.gov/zones/forecast/MDZ025",
                    "https://api.weather.gov/zones/forecast/NCZ015",
                    "https://api.weather.gov/zones/forecast/NCZ016",
                    "https://api.weather.gov/zones/forecast/NCZ017",
                    "https://api.weather.gov/zones/forecast/NCZ030",
                    "https://api.weather.gov/zones/forecast/NCZ031",
                    "https://api.weather.gov/zones/forecast/NCZ032",
                    "https://api.weather.gov/zones/forecast/NCZ102",
                    "https://api.weather.gov/zones/forecast/VAZ075",
                    "https://api.weather.gov/zones/forecast/VAZ076",
                    "https://api.weather.gov/zones/forecast/VAZ077",
                    "https://api.weather.gov/zones/forecast/VAZ078",
                    "https://api.weather.gov/zones/forecast/VAZ082",
                    "https://api.weather.gov/zones/forecast/VAZ083",
                    "https://api.weather.gov/zones/forecast/VAZ084",
                    "https://api.weather.gov/zones/forecast/VAZ085",
                    "https://api.weather.gov/zones/forecast/VAZ086",
                    "https://api.weather.gov/zones/forecast/VAZ089",
                    "https://api.weather.gov/zones/forecast/VAZ090",
                    "https://api.weather.gov/zones/forecast/VAZ093",
                    "https://api.weather.gov/zones/forecast/VAZ095",
                    "https://api.weather.gov/zones/forecast/VAZ096",
                    "https://api.weather.gov/zones/forecast/VAZ097",
                    "https://api.weather.gov/zones/forecast/VAZ098",
                    "https://api.weather.gov/zones/forecast/VAZ099",
                    "https://api.weather.gov/zones/forecast/VAZ100",
                    "https://api.weather.gov/zones/forecast/VAZ518",
                    "https://api.weather.gov/zones/forecast/VAZ520",
                    "https://api.weather.gov/zones/forecast/VAZ522",
                    "https://api.weather.gov/zones/forecast/VAZ523",
                    "https://api.weather.gov/zones/forecast/VAZ524",
                    "https://api.weather.gov/zones/forecast/VAZ525"
                ],
                "references": [],
                "sent": "2025-08-21T11:05:00-04:00",
                "effective": "2025-08-21T11:05:00-04:00",
                "onset": "2025-08-21T11:05:00-04:00",
                "expires": "2025-08-21T19:15:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Tropical Cyclone Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Wakefield VA",
                "headline": "Tropical Cyclone Statement issued August 21 at 11:05AM EDT by NWS Wakefield VA",
                "description": "HLSAKQ\n\nThis product covers CENTRAL AND EASTERN VIRGINIA...NORTHEAST NORTH CAROLINA...AND THE LOWER MARYLAND EASTERN SHORE\n\n**ERIN JUST BEGINNING TO MOVE AWAY FROM THE NORTH CAROLINA COAST**\n\nNEW INFORMATION\n---------------\n\n* CHANGES TO WATCHES AND WARNINGS:\n- None\n\n* CURRENT WATCHES AND WARNINGS:\n- A Tropical Storm Warning is in effect for Accomack, Eastern\nCurrituck, Northampton, Virginia Beach, and Western Currituck\n\n* STORM INFORMATION:\n- About 310 miles southeast of Ocean City MD or about 310 miles\neast-southeast of Norfolk VA\n- 35.4N 70.9W\n- Storm Intensity 100 mph\n- Movement North-northeast or 25 degrees at 18 mph\n\nSITUATION OVERVIEW\n------------------\n\nHurricane Erin, currently about 260 miles east of Cape Hatteras, NC,\ncontinues to move north-northeast away from the coast. Erin will\ngradually turn northeastward as the center of the storm tracks well\noffshore of the Mid-Atlantic coast. However, Erin is expected to grow\nin size, and tropical storm force gusts are expected to continue\nthrough this evening across Virginia Beach, Currituck County, as well\nas the Maryland, Virginia and northeast North Carolina Coastal Waters.\nWinds of 30 to 40 mph with gusts of 45 to 50 mph are possible close to\nthe coast south of Chincoteague.\n\nRegardless of the exact track, Erin is expected to bring high surf,\nsignificant dune and beach erosion and moderate to locally major tidal\nflooding to the area. Seas will increase to 12 to 18 feet over the\ncoastal waters later today which will allow for significant beach and\ndune erosion for the coast especially around the times of high tide on\nthis evening. In addition, moderate to locally major coastal flooding\nis expected during the high tide cycle this evening and tonight with\ninundation of 1 to 3 feet above normally high ground. A Coastal Flood\nWarning remains in effect for the Atlantic coast from Corolla, NC to\nOcean City, MD, areas adjacent to the Chesapeake Bay from Windmill\nPoint south, tidal portions of the James, York, and Rappahannock Rivers\nas well as adjacent estuaries. A Coastal Flood Watch is in effect for\nareas adjacent to the Chesapeake Bay north of Windmill Point through\nthe bay side of the lower Maryland Eastern Shore, and the southern\nshore of the Potomac River, as well as adjacent estuaries.\n\n\nPOTENTIAL IMPACTS\n-----------------\n\n* SURGE:\nPotential impacts from the main surge event will begin to unfold this\nafternoon across across all of the shoreline from Maryland through\nVirginia to NE North Carolina, including the lower and middle\nChesapeake Bay. If realized, these impacts include:\n- Widespread storm surge flooding of vulnerable areas will result\nin an elevated threat of property damage to homes and\nbusinesses near the waterfront and shoreline.\n- Sections of low-lying vulnerable roads, parking lots and\nproperty will likely become flooded. Driving conditions could\nbecome dangerous in places where flooding covers the road.\n- Moderate to severe beach erosion is likely, including heavy\nsurf possibly breaching dunes, especially in vulnerable\nlocations. Strong and dangerous rip currents are likely.\n- Minor to moderate damage to marinas, docks, boardwalks, and\npiers is likely. A few small craft broken away from moorings.\n\nElsewhere across CENTRAL AND EASTERN VIRGINIA...NORTHEAST NORTH\nCAROLINA...AND THE LOWER MARYLAND EASTERN SHORE, little to no impact\nis anticipated.\n\n* OTHER COASTAL HAZARDS:\nAlong the Atlantic coast from Fenwick Island Delaware to Duck North\nCarolina, expect waves to build to 12 to 18 ft today. These large\nwaves combined with increased water levels will likely allow for\nsignificant beach and dune erosion. There is a high risk of rip\ncurrents along the shoreline through Friday, and a high risk of rip\ncurrents will likely continue into the weekend.\n\n* WIND:\nPotential impacts from the main wind event are beginning to unfold\nacross the area close to the shoreline from Chincoteague VA to Duck NC.\nA north-northeast wind is gusting to 35 to 45 mph along the Atlantic\ncoast of Virginia Beach and the Currituck Outer Banks late this\nmorning. Remain well sheltered from hazardous wind having limited\nimpacts. If realized, these impacts include:\n- Damage to porches, awnings, carports, sheds, and unanchored\nmobile homes. Unsecured lightweight objects blown about.\n- Many large tree limbs broken off. A few trees snapped or\nuprooted, especially if soils are saturated. Some roadway signs\nwill sustain damage.\n- A few roads will be impassable from debris. Hazardous driving\nconditions on bridges and other elevated roadways.\n- Scattered power and communications outages.\n\nElsewhere across CENTRAL AND EASTERN VIRGINIA...NORTHEAST NORTH\nCAROLINA...AND THE LOWER MARYLAND EASTERN SHORE, little to no impact\nis anticipated.\n\nPRECAUTIONARY/PREPAREDNESS ACTIONS\n----------------------------------\n\n* EVACUATIONS:\nA mandatory evacuation for the off-road area of Corolla has been\neffective as of 9 AM EDT Wednesday August 20th.\n\n* OTHER PREPAREDNESS INFORMATION:\nNow is the time to stay inside and away from windows. Listen for\nupdates and be ready in case you lose electrical power. Keep a battery-\npowered radio, charged cell phone and flashlight handy.\n\nKeep your cell phone charged and in power-saving mode. If you lose\npower, use it sparingly and mainly for personal emergencies and\ncheck-ins.\n\nIf you are prone to coastal flooding or ocean overwash be prepared for\nthe possibility of a quick rise in water levels.\n\nClosely monitor weather.gov, NOAA Weather Radio and local news outlets\nfor official storm information. Listen for possible changes to the\nforecast.\n\n* ADDITIONAL SOURCES OF INFORMATION:\n- For information on appropriate preparations see\nwww.readyvirginia.gov, readync.org or mema.maryland.gov\n- For the latest weather and storm information go to\nweather.gov/wakefield\n\nNEXT UPDATE\n-----------\n\nThe next local statement will be issued by the National Weather\nService in Wakefield VA around 6 PM, or sooner if conditions warrant.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "HLSAKQ"
                    ],
                    "WMOidentifier": [
                        "WTUS81 KAKQ 211505"
                    ],
                    "NWSheadline": [
                        "ERIN JUST BEGINNING TO MOVE AWAY FROM THE NORTH CAROLINA COAST"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "HLS"
                    ],
                    "NationalWeatherService": [
                        "HLS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a4f48d4af3cd87575de9b1679f7cd114279a1777.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -94.6,
                            44.36
                        ],
                        [
                            -94.58999999999999,
                            44.39
                        ],
                        [
                            -94.50999999999999,
                            44.38
                        ],
                        [
                            -94.44999999999999,
                            44.34
                        ],
                        [
                            -94.40999999999998,
                            44.300000000000004
                        ],
                        [
                            -94.37999999999998,
                            44.28
                        ],
                        [
                            -94.30999999999999,
                            44.26
                        ],
                        [
                            -94.30999999999999,
                            44.22
                        ],
                        [
                            -94.35,
                            44.24
                        ],
                        [
                            -94.41,
                            44.260000000000005
                        ],
                        [
                            -94.42999999999999,
                            44.27
                        ],
                        [
                            -94.4599999,
                            44.300000000000004
                        ],
                        [
                            -94.5,
                            44.330000000000005
                        ],
                        [
                            -94.52,
                            44.35000000000001
                        ],
                        [
                            -94.6,
                            44.36
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a4f48d4af3cd87575de9b1679f7cd114279a1777.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.a4f48d4af3cd87575de9b1679f7cd114279a1777.001.1",
                "areaDesc": "Blue Earth, MN; Brown, MN; Nicollet, MN",
                "geocode": {
                    "SAME": [
                        "027013",
                        "027015",
                        "027103"
                    ],
                    "UGC": [
                        "MNC013",
                        "MNC015",
                        "MNC103"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/MNC013",
                    "https://api.weather.gov/zones/county/MNC015",
                    "https://api.weather.gov/zones/county/MNC103"
                ],
                "references": [],
                "sent": "2025-08-21T09:56:00-05:00",
                "effective": "2025-08-21T09:56:00-05:00",
                "onset": "2025-08-22T13:00:00-05:00",
                "expires": "2025-08-22T01:00:00-05:00",
                "ends": "2025-08-28T22:00:00-05:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Flood Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Twin Cities/Chanhassen MN",
                "headline": "Flood Warning issued August 21 at 9:56AM CDT until August 28 at 10:00PM CDT by NWS Twin Cities/Chanhassen MN",
                "description": "...The National Weather Service in the Twin Cities has issued a\nFlood Warning for the following rivers in Minnesota...\n\nMinnesota River at New Ulm affecting Blue Earth, Brown and\nNicollet Counties.\n\n* WHAT...Minor flooding is forecast.\n\n* WHERE...Minnesota River at New Ulm.\n\n* WHEN...From Friday afternoon to Thursday evening.\n\n* IMPACTS...At 801.0 feet, Flood gate at 18th South Street is closed.\n\n* ADDITIONAL DETAILS...\n- At 845 AM CDT Thursday, the stage was 798.8 feet.\n- Forecast...The river is expected to rise above flood stage\nearly tomorrow afternoon to a crest of 801.3 feet early\nSunday afternoon. It will then fall below flood stage\nThursday, August 28.\n- Flood stage is 800.0 feet.\n- Flood History...This crest compares to a previous crest of\n801.4 feet on 04/26/2018.",
                "instruction": "Turn around, don't drown when encountering flooded roads. Most flood\ndeaths occur in vehicles.\n\nMotorists should not attempt to drive around barricades or drive\ncars through flooded areas.\n\nCaution is urged when walking near riverbanks.",
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "FLWMPX"
                    ],
                    "WMOidentifier": [
                        "WGUS43 KMPX 211456"
                    ],
                    "NWSheadline": [
                        "FLOOD WARNING IN EFFECT FROM FRIDAY AFTERNOON TO THURSDAY EVENING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ],
                    "VTEC": [
                        "/O.NEW.KMPX.FL.W.0019.250822T1800Z-250829T0300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-28T22:00:00-05:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "FLW"
                    ],
                    "NationalWeatherService": [
                        "FLW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.387adf4a19c2e07570a8c1e2518dfb74b890feec.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.387adf4a19c2e07570a8c1e2518dfb74b890feec.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.387adf4a19c2e07570a8c1e2518dfb74b890feec.001.1",
                "areaDesc": "Mainland Dare; East Carteret; Northern Outer Banks; Ocracoke Island; Hatteras Island",
                "geocode": {
                    "SAME": [
                        "037055",
                        "037031",
                        "037095"
                    ],
                    "UGC": [
                        "NCZ047",
                        "NCZ196",
                        "NCZ203",
                        "NCZ204",
                        "NCZ205"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/NCZ047",
                    "https://api.weather.gov/zones/forecast/NCZ196",
                    "https://api.weather.gov/zones/forecast/NCZ203",
                    "https://api.weather.gov/zones/forecast/NCZ204",
                    "https://api.weather.gov/zones/forecast/NCZ205"
                ],
                "references": [],
                "sent": "2025-08-21T10:56:00-04:00",
                "effective": "2025-08-21T10:56:00-04:00",
                "onset": "2025-08-21T10:56:00-04:00",
                "expires": "2025-08-21T19:00:00-04:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Tropical Cyclone Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Newport/Morehead City NC",
                "headline": "Tropical Cyclone Statement issued August 21 at 10:56AM EDT by NWS Newport/Morehead City NC",
                "description": "HLSMHX\n\nThis product covers Eastern North Carolina\n\n**Erin is gradually pulling away but strong winds and coastal\nflooding continue today**\n\nNEW INFORMATION\n---------------\n\n* CHANGES TO WATCHES AND WARNINGS:\n- None\n\n* CURRENT WATCHES AND WARNINGS:\n- A Storm Surge Warning and Tropical Storm Warning are in effect\nfor East Carteret, Hatteras Island, Northern Outer Banks, and\nOcracoke Island\n- A Tropical Storm Warning is in effect for Mainland Dare\n\n* STORM INFORMATION:\n- About 260 miles east of Buxton NC or about 330 miles east of\nMorehead City NC\n- 35.4N 70.9W\n- Storm Intensity 100 mph\n- Movement North-northeast or 25 degrees at 18 mph\n\nSITUATION OVERVIEW\n------------------\n\nNot much change with regards to hurricane Erin this morning as the\nsystem remains a powerful Category 2 hurricane. Erin has begun to\npull away from Eastern North Carolina and the Outer Banks, but given\nthe large wind field from the system, significant coastal impacts\nare expected to continue today, particularly on the Outer Banks and\nadjacent waters, as Erin slowly pulls away to the northeast.\n\nModerate to significant storm surge inundation of 2 to 4 feet above\nground level is expected to continue along the oceanside north of\nCape Lookout, resulting in a significant threat to life and\nproperty. The worst impacts will likely be felt along the Outer\nBanks on Ocracoke and Hatteras Island. Portions of NC-12 and\nsecondary roads along the Outer Banks, in particular on Hatteras and\nOcracoke Islands, are already closed and will likely remain\nimpassable or inaccessible through much of this week due to\nsignificant ocean overwash.\n\nMinor to locally moderate inundation of 1 to 3 ft can also be\nexpected for soundside areas adjacent to the southern Pamlico Sound\ntoday and possibly into Friday as well. Now that we have passed this\nmornings high tide, we once again expect potential impacts around\nthe high tide cycle this evening, when the higher of the daily\ntides is expected.\n\nStrong rip currents are expected along area beaches through the\nweekend. Extensive beach erosion is also likely due to strong long\nperiod waves as high as 10 to 18 feet in the surf zone, highest on\nthe Outer Banks.\n\nVery dangerous marine conditions will continue for the coastal\nwaters, sounds and rivers, with gusty winds and dangerous seas.\nThis will create treacherous conditions for mariners.\n\nPOTENTIAL IMPACTS\n-----------------\n\n* SURGE:\nPotential impacts from the main surge event are now unfolding across\nthe Outer Banks from Duck to Cape Lookout. Remain well away from\nlife-threatening surge having additional significant impacts. If\nrealized, these impacts include:\n- Areas of inundation with storm surge flooding accentuated by\nwaves. Damage to several buildings, mainly near the coast.\n- Sections of near-shore escape routes and secondary roads become\nweakened or washed out, especially in usually vulnerable low\nspots.\n- Major beach erosion with heavy surf breaching dunes. Strong and\nnumerous rip currents.\n- Moderate damage to marinas, docks, boardwalks, and piers.\nSeveral small craft broken away from moorings, especially in\nunprotected anchorages.\n\nAlso, minor to locally moderate soundside inundation with water level\nrises of 1 to 3 feet across the southern Pamlico Sound and adjacent\ntributaries due to the north winds. Highest water levels expected\nacross Downeast Carteret County today. Remain well away from locally\nhazardous surge having additional limited impacts.\n\nElsewhere across Eastern North Carolina, little to no impact is\nanticipated.\n\n* WIND:\nPotential impacts from the main wind event are now unfolding across\nthe Outer Banks southward to Cape Lookout, and adjacent coastal communities\non Pamlico and Albemarle Sound. Remain well sheltered from hazardous\nwind having additional limited impacts. If realized, these impacts include:\n- Damage to porches, awnings, carports, sheds, and unanchored\nmobile homes. Unsecured lightweight objects blown about.\n- Many large tree limbs broken off. A few trees snapped or\nuprooted, but with greater numbers in places where trees are\nshallow rooted. Some fences and roadway signs blown over.\n- A few roads impassable from debris, particularly within urban\nor heavily wooded places. Hazardous driving conditions on\nbridges and other elevated roadways.\n- Scattered power and communications outages.\n\nElsewhere across Eastern North Carolina, little to no impact is\nanticipated.\n\nPRECAUTIONARY/PREPAREDNESS ACTIONS\n----------------------------------\n\n* EVACUATIONS:\nFollow the advice of local officials.\n\n* OTHER PREPAREDNESS INFORMATION:\nNow is the time to stay inside and away from windows. Listen for\nupdates and be ready in case you lose electrical power. Keep a\nbattery-powered radio, charged cell phone and flashlight handy.\n\nKeep your cell phone charged and in power-saving mode. If you lose\npower, use it sparingly and mainly for personal emergencies and\ncheck-ins.\n\nDo not be a thrill seeker or risk your life for senseless photos or\nvideos.\n\nQuickly move to the safest place within your shelter if it begins to\nfail, preferably an interior room on the lowest floor as long as\nflooding is not a concern.\n\nIf you are prone to flooding or in an area under a storm surge watch\nor warning, be prepared for the possibility of a quick and dramatic\nrise in water levels.\n\n* ADDITIONAL SOURCES OF INFORMATION:\n- For information on appropriate preparations see ready.gov\n- For information on creating an emergency plan see getagameplan.org\n- For additional disaster preparedness information see redcross.org\n\nNEXT UPDATE\n-----------\n\nThe next local statement will be issued by the National Weather\nService in Newport/Morehead City NC around 5 PM EDT, or sooner if\nconditions warrant.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "HLSMHX"
                    ],
                    "WMOidentifier": [
                        "WTUS82 KMHX 211456"
                    ],
                    "NWSheadline": [
                        "Erin is gradually pulling away but strong winds and coastal\nflooding continue today"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "HLS"
                    ],
                    "NationalWeatherService": [
                        "HLS"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b211ec1cf817bf74de975a4e8b49b31e74a23b84.001.2",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b211ec1cf817bf74de975a4e8b49b31e74a23b84.001.2",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.b211ec1cf817bf74de975a4e8b49b31e74a23b84.001.2",
                "areaDesc": "Lower Columbia River; Cowlitz County Lowlands",
                "geocode": {
                    "SAME": [
                        "041009",
                        "053015"
                    ],
                    "UGC": [
                        "ORZ108",
                        "WAZ204"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/ORZ108",
                    "https://api.weather.gov/zones/forecast/WAZ204"
                ],
                "references": [],
                "sent": "2025-08-21T07:44:00-07:00",
                "effective": "2025-08-21T07:44:00-07:00",
                "onset": "2025-08-22T11:00:00-07:00",
                "expires": "2025-08-21T20:00:00-07:00",
                "ends": "2025-08-26T05:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Extreme Heat Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Portland OR",
                "headline": "Extreme Heat Warning issued August 21 at 7:44AM PDT until August 26 at 5:00AM PDT by NWS Portland OR",
                "description": "* WHAT...Dangerously hot conditions with high temperatures of\n95-101F and overnight low temperatures of 63-67F expected.\n\n* WHERE...Lower Columbia River and Cowlitz River Valleys.\n\n* WHEN...From 11 AM Friday to 5 AM PDT Tuesday.\n\n* IMPACTS...Heat related illnesses increase significantly during\nextreme heat events, especially for those spending time outdoors\nor without access to adequate cooling.\n\n* ADDITIONAL DETAILS...Friday and Saturday will be the hottest days.",
                "instruction": "Drink plenty of fluids, stay in a cool place during the heat of the\nday, stay out of the sunshine, and check up on relatives and\nneighbors. For those without air conditioning, use fans to keep air\nmoving. Keeps windows closed during the day and open at night,\nunless air quality is degraded due to wildfire smoke.\n\nDo not leave young children and pets in unattended vehicles. Car\ninteriors will reach lethal temperatures in a matter of minutes.\n\nTake extra precautions when outside. Wear lightweight and loose\nfitting clothing. Try to limit strenuous activities to early morning\nor evening. Take action when you see symptoms of heat exhaustion and\nheat stroke.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "NPWPQR"
                    ],
                    "WMOidentifier": [
                        "WWUS76 KPQR 211444"
                    ],
                    "NWSheadline": [
                        "EXTREME HEAT WARNING IN EFFECT FROM 11 AM FRIDAY TO 5 AM PDT TUESDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.EXA.KPQR.XH.W.0002.250822T1800Z-250826T1200Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-26T05:00:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "XHW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a7d96c7e90dfeed2704dd48a95f55e8c26486e00.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a7d96c7e90dfeed2704dd48a95f55e8c26486e00.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.a7d96c7e90dfeed2704dd48a95f55e8c26486e00.001.1",
                "areaDesc": "Lemhi, ID",
                "geocode": {
                    "SAME": [
                        "016059"
                    ],
                    "UGC": [
                        "IDC059"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/IDC059"
                ],
                "references": [],
                "sent": "2025-08-21T08:15:00-06:00",
                "effective": "2025-08-21T08:15:00-06:00",
                "onset": "2025-08-21T08:15:00-06:00",
                "expires": "2025-08-22T10:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Missoula MT",
                "headline": "Air Quality Alert issued August 21 at 8:15AM MDT by NWS Missoula MT",
                "description": "AQAMSO\n\n* WHAT... Air Quality Advisory because of degraded air quality due to\nwildfire smoke.\n\nAir Quality Index is forecast to be Very Unhealthy\n\n*WHERE... Lemhi County\n\n*WHEN... Until 10am MDT 08/22/2025\n\n*IMPACTS... Air quality is Very Unhealthy. The risk of health effects is\nincreased for everyone.",
                "instruction": "Air pollutants can cause breathing difficult for children, the elderly, as\nwell as persons with respiratory problems. Those individuals who are\nsensitive to increased particulate matter or smoke are encouraged to avoid\nprolonged or strenuous outdoor activity during this advisory. Open burning\nis prohibited by air quality rule. It is also recommended that all other\nindividuals limit prolonged or strenuous activity outdoors.\n\n\n\n\n\nTHIS STATEMENT IS ISSUED BY THE IDAHO DEPARTMENT OF ENVIRONMENTAL QUALITY,\nAIR QUALITY GROUP\nFOR MORE INFORMATION, CONTACT DEQ's\nIdaho Falls Regional Office at (208) 528-2650",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQAMSO"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KMSO 211415"
                    ],
                    "NWSheadline": [
                        "AIR QUALITY ADVISORY FROM THE IDAHO DEPARTMENT OF ENVIRONMENTAL QUALITY FOR Lemhi County"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6ac198e3a7a029d1f3c74aa4660fdbc11a9ac969.001.2",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6ac198e3a7a029d1f3c74aa4660fdbc11a9ac969.001.2",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.6ac198e3a7a029d1f3c74aa4660fdbc11a9ac969.001.2",
                "areaDesc": "Anne Arundel",
                "geocode": {
                    "SAME": [
                        "024003"
                    ],
                    "UGC": [
                        "MDZ014"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MDZ014"
                ],
                "references": [],
                "sent": "2025-08-21T09:48:00-04:00",
                "effective": "2025-08-21T09:48:00-04:00",
                "onset": "2025-08-22T04:00:00-04:00",
                "expires": "2025-08-21T18:00:00-04:00",
                "ends": "2025-08-23T10:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Possible",
                "urgency": "Future",
                "event": "Coastal Flood Watch",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Baltimore MD/Washington DC",
                "headline": "Coastal Flood Watch issued August 21 at 9:48AM EDT until August 23 at 10:00AM EDT by NWS Baltimore MD/Washington DC",
                "description": "* WHAT...For the Coastal Flood Advisory, up to two feet of\ninundation above ground level expected in low lying areas due to\ntidal flooding. For the Coastal Flood Watch, two to two and half feet\nof inundation above ground level possible in low lying areas\ndue to tidal flooding.\n\n* WHERE...Shoreline in Anne Arundel County.\n\n* WHEN...For the Coastal Flood Advisory, from 2 AM to 4 AM EDT\nFriday, especially around the time of high tide. For the\nCoastal Flood Watch, from late tonight through Saturday\nmorning, especially around the time of high tide.\n\n* IMPACTS...At 3.5 feet, water reaches the floor of the Maritime\nMuseum in Annapolis, begins to cover Bowyer Road on the Naval\nAcademy campus, and numerous businesses on Dock Street are\nflooded, along with the City Dock parking lot. Bayside Beach\nbegins to flood around Harbor Rd and Lake Dr.\n\n* ADDITIONAL DETAILS...Tides one and a half to two feet above\nnormal. The next high tide at Annapolis U.S. Naval Academy is at\n4:26 PM and 5:31 AM.",
                "instruction": "If travel is required, allow extra time as some roads may be\nclosed. Do not drive around barricades or through water of\nunknown depth. Take the necessary actions to protect flood-prone\nproperty.",
                "response": "Prepare",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWLWX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KLWX 211348"
                    ],
                    "NWSheadline": [
                        "COASTAL FLOOD ADVISORY IN EFFECT FROM 2 AM TO 4 AM EDT FRIDAY... ...COASTAL FLOOD WATCH IN EFFECT FROM LATE TONIGHT THROUGH SATURDAY MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ],
                    "VTEC": [
                        "/O.NEW.KLWX.CF.A.0002.250822T0800Z-250823T1400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T10:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "CFA"
                    ],
                    "NationalWeatherService": [
                        "CFA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6ac198e3a7a029d1f3c74aa4660fdbc11a9ac969.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6ac198e3a7a029d1f3c74aa4660fdbc11a9ac969.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.6ac198e3a7a029d1f3c74aa4660fdbc11a9ac969.001.1",
                "areaDesc": "Anne Arundel",
                "geocode": {
                    "SAME": [
                        "024003"
                    ],
                    "UGC": [
                        "MDZ014"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/MDZ014"
                ],
                "references": [],
                "sent": "2025-08-21T09:48:00-04:00",
                "effective": "2025-08-21T09:48:00-04:00",
                "onset": "2025-08-22T02:00:00-04:00",
                "expires": "2025-08-21T18:00:00-04:00",
                "ends": "2025-08-22T04:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Coastal Flood Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Baltimore MD/Washington DC",
                "headline": "Coastal Flood Advisory issued August 21 at 9:48AM EDT until August 22 at 4:00AM EDT by NWS Baltimore MD/Washington DC",
                "description": "* WHAT...For the Coastal Flood Advisory, up to two feet of\ninundation above ground level expected in low lying areas due to\ntidal flooding. For the Coastal Flood Watch, two to two and half feet\nof inundation above ground level possible in low lying areas\ndue to tidal flooding.\n\n* WHERE...Shoreline in Anne Arundel County.\n\n* WHEN...For the Coastal Flood Advisory, from 2 AM to 4 AM EDT\nFriday, especially around the time of high tide. For the\nCoastal Flood Watch, from late tonight through Saturday\nmorning, especially around the time of high tide.\n\n* IMPACTS...At 3.5 feet, water reaches the floor of the Maritime\nMuseum in Annapolis, begins to cover Bowyer Road on the Naval\nAcademy campus, and numerous businesses on Dock Street are\nflooded, along with the City Dock parking lot. Bayside Beach\nbegins to flood around Harbor Rd and Lake Dr.\n\n* ADDITIONAL DETAILS...Tides one and a half to two feet above\nnormal. The next high tide at Annapolis U.S. Naval Academy is at\n4:26 PM and 5:31 AM.",
                "instruction": "If travel is required, allow extra time as some roads may be\nclosed. Do not drive around barricades or through water of\nunknown depth. Take the necessary actions to protect flood-prone\nproperty.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "CFWLWX"
                    ],
                    "WMOidentifier": [
                        "WHUS41 KLWX 211348"
                    ],
                    "NWSheadline": [
                        "COASTAL FLOOD ADVISORY IN EFFECT FROM 2 AM TO 4 AM EDT FRIDAY... ...COASTAL FLOOD WATCH IN EFFECT FROM LATE TONIGHT THROUGH SATURDAY MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KLWX.CF.Y.0033.250822T0600Z-250822T0800Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T04:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "CFY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d1e5f7dbfb6d16fddc0222abdc80da2ff3b36c19.001.1",
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -99.41,
                            30.03
                        ],
                        [
                            -99.41,
                            30.1
                        ],
                        [
                            -99.16,
                            30.1
                        ],
                        [
                            -99.19,
                            30.03
                        ],
                        [
                            -99.41,
                            30.03
                        ]
                    ]
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.d1e5f7dbfb6d16fddc0222abdc80da2ff3b36c19.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.d1e5f7dbfb6d16fddc0222abdc80da2ff3b36c19.001.1",
                "areaDesc": "Kerr, TX",
                "geocode": {
                    "SAME": [
                        "048265"
                    ],
                    "UGC": [
                        "TXC265"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/TXC265"
                ],
                "references": [],
                "sent": "2025-08-21T08:36:00-05:00",
                "effective": "2025-08-21T08:36:00-05:00",
                "onset": "2025-08-21T16:45:00-05:00",
                "expires": "2025-08-22T02:45:00-05:00",
                "ends": "2025-08-22T09:12:00-05:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Flood Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Austin/San Antonio TX",
                "headline": "Flood Warning issued August 21 at 8:36AM CDT until August 22 at 9:12AM CDT by NWS Austin/San Antonio TX",
                "description": "...The National Weather Service in Austin/San Antonio TX has issued\na Flood Warning for the following rivers in Texas...\n\nGuadalupe River at Hunt affecting Kerr County.\n\n* WHAT...Minor flooding is forecast.\n\n* WHERE...Guadalupe River at Hunt.\n\n* WHEN...From this afternoon to late tomorrow morning.\n\n* IMPACTS...At 10.0 feet, Water extends into low areas of the flood\nplain. Lower bridges on the north and south fork of the Guadalupe\nalong highways 39 and FM 1341 become impassable.\n\n* ADDITIONAL DETAILS...\n- At 8:20 AM CDT Thursday the stage was 7.9 feet.\n- Bankfull stage is 10.0 feet.\n- Forecast...The river is expected to rise above flood stage\nlate this afternoon to a crest of 11.0 feet this evening. It\nwill then fall below flood stage late this evening.\n- Flood stage is 10.0 feet.\n- Flood History...This crest compares to a previous crest of\n10.6 feet on 05/24/2015.\n- http://www.weather.gov/safety/flood",
                "instruction": "Turn around, don't drown when encountering flooded roads. Most flood\ndeaths occur in vehicles.\n\nPlease report observed flooding to local emergency services or law\nenforcement and request they pass this information to the National\nWeather Service when you can do so safely.\n\nAdditional information is available at www.weather.gov.\n\nThe next statement will be issued late tonight by 245 AM CDT.",
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "FLWEWX"
                    ],
                    "WMOidentifier": [
                        "WGUS44 KEWX 211336"
                    ],
                    "NWSheadline": [
                        "FLOOD WARNING IN EFFECT FROM THIS AFTERNOON TO LATE TOMORROW MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "EAS-ORG": [
                        "WXR"
                    ],
                    "VTEC": [
                        "/O.NEW.KEWX.FL.W.0038.250821T2145Z-250822T1412Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T09:12:00-05:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "FLW"
                    ],
                    "NationalWeatherService": [
                        "FLW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.003.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.003.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.003.1",
                "areaDesc": "Dixon Entrance to Cape Decision from 15 to 90 NM",
                "geocode": {
                    "SAME": [
                        "058661"
                    ],
                    "UGC": [
                        "PKZ661"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ661"
                ],
                "references": [],
                "sent": "2025-08-21T04:00:00-08:00",
                "effective": "2025-08-21T04:00:00-08:00",
                "onset": "2025-08-21T04:00:00-08:00",
                "expires": "2025-08-21T22:00:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Juneau AK",
                "headline": "Small Craft Advisory issued August 21 at 4:00AM AKDT until August 22 at 5:00AM AKDT by NWS Juneau AK",
                "description": "Southeast Alaska Coastal Waters from Dixon Entrance to\nCape Suckling out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Seas forecasts represent the average of the highest\none-third of the combined windwave and swell height.\n\n.TODAY...SE wind 20 kt. Seas 5 ft building to 8 ft.\n.TONIGHT...SE wind 25 kt. Seas 9 ft.\n.FRI...SE wind 20 kt. Seas 8 ft.\n.FRI NIGHT...SE wind 15 kt. Seas 6 ft.\n.SAT...SE wind 10 kt. Seas 4 ft.\n.SUN...NW wind 15 kt. Seas 4 ft.\n.MON...NW wind 15 kt. Seas 4 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFAEG"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAJK 211200"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THROUGH LATE TONIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAJK.SC.Y.8278.250821T1200Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.013.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.013.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.013.1",
                "areaDesc": "Icy Cape to Cape Suckling from 15 to 80 NM",
                "geocode": {
                    "SAME": [
                        "058672"
                    ],
                    "UGC": [
                        "PKZ672"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ672"
                ],
                "references": [],
                "sent": "2025-08-21T04:00:00-08:00",
                "effective": "2025-08-21T04:00:00-08:00",
                "onset": "2025-08-21T04:00:00-08:00",
                "expires": "2025-08-21T22:00:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Juneau AK",
                "headline": "Small Craft Advisory issued August 21 at 4:00AM AKDT until August 22 at 5:00AM AKDT by NWS Juneau AK",
                "description": "Southeast Alaska Coastal Waters from Dixon Entrance to\nCape Suckling out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Seas forecasts represent the average of the highest\none-third of the combined windwave and swell height.\n\n.TODAY...E wind 15 kt. Seas 7 ft.\n.TONIGHT...E wind 15 kt. Seas 8 ft.\n.FRI...NE wind 15 kt. Seas 7 ft.\n.FRI NIGHT...NE wind 10 kt. Seas 7 ft.\n.SAT...NE wind 10 kt. Seas 4 ft.\n.SUN...W wind 10 kt. Seas 4 ft.\n.MON...W wind 15 kt. Seas 4 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFAEG"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAJK 211200"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THIS AFTERNOON THROUGH LATE TONIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAJK.SC.Y.8282.250821T1200Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.009.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.009.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.009.1",
                "areaDesc": "Cape Spencer to Cape Fairweather from 15 to 85 NM",
                "geocode": {
                    "SAME": [
                        "058664"
                    ],
                    "UGC": [
                        "PKZ664"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ664"
                ],
                "references": [],
                "sent": "2025-08-21T04:00:00-08:00",
                "effective": "2025-08-21T04:00:00-08:00",
                "onset": "2025-08-21T04:00:00-08:00",
                "expires": "2025-08-21T22:00:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Juneau AK",
                "headline": "Small Craft Advisory issued August 21 at 4:00AM AKDT until August 22 at 5:00AM AKDT by NWS Juneau AK",
                "description": "Southeast Alaska Coastal Waters from Dixon Entrance to\nCape Suckling out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Seas forecasts represent the average of the highest\none-third of the combined windwave and swell height.\n\n.TODAY...E wind 15 kt. Seas 8 ft.\n.TONIGHT...E wind 20 kt. Seas 9 ft.\n.FRI...E wind 25 kt. Seas 9 ft. Rain in the afternoon.\n.FRI NIGHT...E wind 15 kt. Seas 7 ft.\n.SAT...E wind 15 kt. Seas 5 ft.\n.SUN...NW wind 15 kt. Seas 4 ft.\n.MON...W wind 15 kt. Seas 4 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFAEG"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAJK 211200"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THROUGH LATE TONIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAJK.SC.Y.8281.250821T1200Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.005.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.005.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.005.1",
                "areaDesc": "Cape Decision to Cape Edgecumbe from 15 to 80 NM",
                "geocode": {
                    "SAME": [
                        "058662"
                    ],
                    "UGC": [
                        "PKZ662"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ662"
                ],
                "references": [],
                "sent": "2025-08-21T04:00:00-08:00",
                "effective": "2025-08-21T04:00:00-08:00",
                "onset": "2025-08-21T04:00:00-08:00",
                "expires": "2025-08-21T22:00:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Juneau AK",
                "headline": "Small Craft Advisory issued August 21 at 4:00AM AKDT until August 22 at 5:00AM AKDT by NWS Juneau AK",
                "description": "Southeast Alaska Coastal Waters from Dixon Entrance to\nCape Suckling out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Seas forecasts represent the average of the highest\none-third of the combined windwave and swell height.\n\n.TODAY...SE wind 20 kt. Seas 5 ft building to 9 ft.\n.TONIGHT...E wind 25 kt. Seas 10 ft. Rain late.\n.FRI...E wind 25 kt. Seas 9 ft. Rain.\n.FRI NIGHT...SE wind 20 kt. Seas 7 ft.\n.SAT...SE wind 10 kt. Seas 5 ft.\n.SUN...NW wind 15 kt. Seas 4 ft.\n.MON...NW wind 15 kt. Seas 4 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFAEG"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAJK 211200"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THROUGH LATE TONIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAJK.SC.Y.8279.250821T1200Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.007.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.007.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.e6fb76f74ddffcecb2d4abc46c67b5002a0bfd68.007.1",
                "areaDesc": "Cape Edgecumbe to Cape Spencer from 15 to 80 NM",
                "geocode": {
                    "SAME": [
                        "058663"
                    ],
                    "UGC": [
                        "PKZ663"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ663"
                ],
                "references": [],
                "sent": "2025-08-21T04:00:00-08:00",
                "effective": "2025-08-21T04:00:00-08:00",
                "onset": "2025-08-21T04:00:00-08:00",
                "expires": "2025-08-21T22:00:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Juneau AK",
                "headline": "Small Craft Advisory issued August 21 at 4:00AM AKDT until August 22 at 5:00AM AKDT by NWS Juneau AK",
                "description": "Southeast Alaska Coastal Waters from Dixon Entrance to\nCape Suckling out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Seas forecasts represent the average of the highest\none-third of the combined windwave and swell height.\n\n.TODAY...SE wind 20 kt. Seas 8 ft.\n.TONIGHT...E wind 25 kt. Seas 10 ft. Rain late.\n.FRI...E wind 25 kt. Seas 10 ft. Rain.\n.FRI NIGHT...E wind 20 kt. Seas 7 ft. Rain.\n.SAT...NW wind 10 kt. Seas 5 ft.\n.SUN...NW wind 10 kt. Seas 4 ft.\n.MON...NW wind 15 kt. Seas 4 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFAEG"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAJK 211200"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THROUGH LATE TONIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAJK.SC.Y.8280.250821T1200Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a587c33a64fa05d3ff9e0a9ae3d2ff1a7b8e4e30.019.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.a587c33a64fa05d3ff9e0a9ae3d2ff1a7b8e4e30.019.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.a587c33a64fa05d3ff9e0a9ae3d2ff1a7b8e4e30.019.1",
                "areaDesc": "Marmot Island To Sitkinak from 15 to 85 NM",
                "geocode": {
                    "SAME": [
                        "058734"
                    ],
                    "UGC": [
                        "PKZ734"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ734"
                ],
                "references": [],
                "sent": "2025-08-21T03:56:00-08:00",
                "effective": "2025-08-21T03:56:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T17:00:00-08:00",
                "ends": "2025-08-22T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 21 at 3:56AM AKDT until August 22 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for the Northern Gulf of Alaska Coast\nup to 100 nm out including Kodiak Island and Cook Inlet.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...NE wind 20 kt. Seas 7 ft.\n.TONIGHT...N wind 25 kt. Seas 8 ft.\n.FRI...NE wind 20 kt. Seas 8 ft.\n.FRI NIGHT...N wind 20 kt. Seas 8 ft.\n.SAT...N wind 15 kt. Seas 6 ft.\n.SUN...Variable wind 10 kt. Seas 3 ft.\n.MON...S wind 15 kt. Seas 3 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFAER"
                    ],
                    "WMOidentifier": [
                        "FZAK51 PAFC 211156"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY TONIGHT AND FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.7764.250822T0100Z-250823T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.022.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.022.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.022.1",
                "areaDesc": "Seguam to Adak Bering Side from 15 to 85 NM",
                "geocode": {
                    "SAME": [
                        "058781"
                    ],
                    "UGC": [
                        "PKZ781"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ781"
                ],
                "references": [],
                "sent": "2025-08-21T03:30:00-08:00",
                "effective": "2025-08-21T03:30:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T16:30:00-08:00",
                "ends": "2025-08-22T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 21 at 3:30AM AKDT until August 22 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...SW wind 20 kt. Seas 4 ft. Areas of fog. Isolated thunderstorms.\n.TONIGHT...SW wind 25 kt. Seas 5 ft. Areas of fog.\n.FRI...SW wind 25 kt. Seas 5 ft. Areas of fog.\n.FRI NIGHT...SW wind 25 kt. Seas 7 ft.\n.SAT THROUGH SUN...S wind 25 kt. Seas 7 ft.\n.MON...W wind 20 kt. Seas 7 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 211130"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY TONIGHT AND FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.9130.250822T0100Z-250823T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.026.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.026.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.026.1",
                "areaDesc": "Adak to Kiska Pacific Side",
                "geocode": {
                    "SAME": [
                        "058785"
                    ],
                    "UGC": [
                        "PKZ785"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ785"
                ],
                "references": [],
                "sent": "2025-08-21T03:30:00-08:00",
                "effective": "2025-08-21T03:30:00-08:00",
                "onset": "2025-08-21T03:00:00-08:00",
                "expires": "2025-08-21T16:30:00-08:00",
                "ends": "2025-08-22T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 21 at 3:30AM AKDT until August 22 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...SW wind 25 kt. Seas 5 ft. Areas of fog. Isolated thunderstorms\nin the morning.\n.TONIGHT...SW wind 25 kt. Seas 6 ft. Areas of fog.\n.FRI...SW wind 25 kt. Seas 6 ft. Areas of fog.\n.FRI NIGHT...S wind 30 kt. Seas 8 ft.\n.SAT THROUGH SUN...S wind 25 kt. Seas 9 ft.\n.MON...W wind 15 kt. Seas 7 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 211130"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THROUGH FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.9132.250821T1100Z-250823T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.0944e467665aeebfea0745f1276ced4f50f36b0b.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.0944e467665aeebfea0745f1276ced4f50f36b0b.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.0944e467665aeebfea0745f1276ced4f50f36b0b.002.1",
                "areaDesc": "Bering Sea Offshore  West of 180 and East of the International Date Line",
                "geocode": {
                    "SAME": [
                        "058411"
                    ],
                    "UGC": [
                        "PKZ411"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ411"
                ],
                "references": [],
                "sent": "2025-08-21T03:30:00-08:00",
                "effective": "2025-08-21T03:30:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T18:30:00-08:00",
                "ends": "2025-08-22T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Gale Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Gale Warning issued August 21 at 3:30AM AKDT until August 22 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Offshore Waters Forecast for the Bering Sea\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...S wind 15 to 25 kt. Seas 4 ft. Rain showers.\n.TONIGHT...S wind 15 to 30 kt increasing to 25 to 35 kt after midnight.\nSeas 5 to 10 ft. Rain showers.\n.FRI...SW wind 20 to 35 kt. Seas 8 to 16 ft.\n.FRI NIGHT...SW wind 15 to 30 kt. Seas 9 to 14 ft.\n.SAT...SW wind 10 to 25 kt. Seas 5 to 9 ft.\n.SUN THROUGH MON...W wind 15 kt. Seas 3 to 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "OFFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK62 PAFC 211130"
                    ],
                    "NWSheadline": [
                        "GALE WARNING TONIGHT AND FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.GL.W.9392.250822T0100Z-250823T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "GLW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.027.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.027.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.027.1",
                "areaDesc": "Kiska to Attu Bering Side",
                "geocode": {
                    "SAME": [
                        "058786"
                    ],
                    "UGC": [
                        "PKZ786"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ786"
                ],
                "references": [],
                "sent": "2025-08-21T03:30:00-08:00",
                "effective": "2025-08-21T03:30:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T16:30:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Gale Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Gale Warning issued August 21 at 3:30AM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...S wind 30 kt. Seas 6 ft. Isolated thunderstorms early then\nrain showers.\n.TONIGHT...SW wind 35 kt. Seas 8 ft building to 14 ft after\nmidnight.\n.FRI...S wind 30 kt. Seas 14 ft. Rain showers.\n.FRI NIGHT...S wind 30 kt. Seas 9 ft.\n.SAT...SW wind 25 kt. Seas 9 ft.\n.SUN THROUGH MON...W wind 15 kt. Seas 5 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 211130"
                    ],
                    "NWSheadline": [
                        "GALE WARNING TONIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.GL.W.9133.250822T0100Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "GLW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.033.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.033.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.033.1",
                "areaDesc": "Kuskokwim Delta and Etolin Strait out to 15 NM",
                "geocode": {
                    "SAME": [
                        "058763"
                    ],
                    "UGC": [
                        "PKZ763"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ763"
                ],
                "references": [],
                "sent": "2025-08-21T03:30:00-08:00",
                "effective": "2025-08-21T03:30:00-08:00",
                "onset": "2025-08-22T05:00:00-08:00",
                "expires": "2025-08-21T16:30:00-08:00",
                "ends": "2025-08-22T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 21 at 3:30AM AKDT until August 22 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...SW wind 15 kt diminishing to 10 kt in the afternoon. Seas 2 ft.\n.TONIGHT...SW wind 10 kt. Seas 2 ft. Areas of fog.\n.FRI...S wind 15 kt increasing to 25 kt in the afternoon. Seas 3 ft.\nAreas of fog.\n.FRI NIGHT...S wind 25 kt. Seas 4 ft.\n.SAT THROUGH SUN...S wind 20 kt. Seas 4 ft.\n.MON...S wind 25 kt. Seas 7 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 211130"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.9135.250822T1300Z-250823T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.034.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.034.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.034.1",
                "areaDesc": "Kuskokwim Delta from 15 to 80 NM",
                "geocode": {
                    "SAME": [
                        "058764"
                    ],
                    "UGC": [
                        "PKZ764"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ764"
                ],
                "references": [],
                "sent": "2025-08-21T03:30:00-08:00",
                "effective": "2025-08-21T03:30:00-08:00",
                "onset": "2025-08-22T05:00:00-08:00",
                "expires": "2025-08-21T16:30:00-08:00",
                "ends": "2025-08-22T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 21 at 3:30AM AKDT until August 22 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...SW wind 15 kt diminishing to 10 kt in the afternoon. Seas 3 ft.\n.TONIGHT...SW wind 10 kt becoming S after midnight. Seas 3 ft.\nAreas of fog.\n.FRI...S wind 25 kt. Seas 4 ft. Areas of fog.\n.FRI NIGHT...S wind 25 kt. Seas 6 ft.\n.SAT...SW wind 20 kt. Seas 7 ft.\n.SUN THROUGH MON...S wind 25 kt. Seas 8 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 211130"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.9136.250822T1300Z-250823T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.035.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.035.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.035.1",
                "areaDesc": "North and West of Nunivak Island",
                "geocode": {
                    "SAME": [
                        "058765"
                    ],
                    "UGC": [
                        "PKZ765"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ765"
                ],
                "references": [],
                "sent": "2025-08-21T03:30:00-08:00",
                "effective": "2025-08-21T03:30:00-08:00",
                "onset": "2025-08-22T05:00:00-08:00",
                "expires": "2025-08-21T16:30:00-08:00",
                "ends": "2025-08-22T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 21 at 3:30AM AKDT until August 22 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...SW wind 15 kt. Seas 5 ft.\n.TONIGHT...S wind 15 kt. Seas 4 ft. Areas of fog.\n.FRI...S wind 30 kt. Seas 7 ft. Areas of fog.\n.FRI NIGHT...SW wind 30 kt. Seas 8 ft.\n.SAT...SW wind 25 kt. Seas 8 ft.\n.SUN THROUGH MON...S wind 20 kt. Seas 8 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 211130"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.9137.250822T1300Z-250823T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.036.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.036.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.036.1",
                "areaDesc": "Saint Matthew Island Waters",
                "geocode": {
                    "SAME": [
                        "058767"
                    ],
                    "UGC": [
                        "PKZ767"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ767"
                ],
                "references": [],
                "sent": "2025-08-21T03:30:00-08:00",
                "effective": "2025-08-21T03:30:00-08:00",
                "onset": "2025-08-22T05:00:00-08:00",
                "expires": "2025-08-21T16:30:00-08:00",
                "ends": "2025-08-22T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Gale Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Gale Warning issued August 21 at 3:30AM AKDT until August 22 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...SW wind 20 kt. Seas 7 ft. Areas of fog.\n.TONIGHT...SE wind 25 kt. Seas 6 ft. Areas of fog. Rain showers.\n.FRI...S wind 35 kt W of Saint Matthew Island. E of Saint Matthew\nIsland, S wind 30 kt. Seas 11 ft. Rain showers.\n.FRI NIGHT...SW wind 35 kt. Seas 14 ft.\n.SAT...SW wind 25 kt. Seas 14 ft.\n.SUN...S wind 20 kt. Seas 8 ft.\n.MON...N wind 20 kt. Seas 7 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 211130"
                    ],
                    "NWSheadline": [
                        "GALE WARNING FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.GL.W.9138.250822T1300Z-250823T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "GLW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.025.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.025.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.025.1",
                "areaDesc": "Adak to Kiska Bering Side",
                "geocode": {
                    "SAME": [
                        "058784"
                    ],
                    "UGC": [
                        "PKZ784"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ784"
                ],
                "references": [],
                "sent": "2025-08-21T03:30:00-08:00",
                "effective": "2025-08-21T03:30:00-08:00",
                "onset": "2025-08-21T03:00:00-08:00",
                "expires": "2025-08-21T16:30:00-08:00",
                "ends": "2025-08-22T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 21 at 3:30AM AKDT until August 22 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...SW wind 25 kt. Seas 5 ft. Areas of fog. Isolated thunderstorms\nin the morning.\n.TONIGHT...SW wind 30 kt. Seas 6 ft. Areas of fog.\n.FRI...SW wind 30 kt. Seas 7 ft. Areas of fog.\n.FRI NIGHT...S wind 30 kt. Seas 9 ft.\n.SAT...S wind 30 kt. Seas 9 ft.\n.SUN...SW wind 20 kt. Seas 6 ft.\n.MON...W wind 15 kt. Seas 5 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 211130"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THROUGH FRIDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.9131.250821T1100Z-250823T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.028.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.028.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.86e2eaf8c9091509828164bdf052d14e8ef11fae.028.1",
                "areaDesc": "Kiska to Attu Pacific Side",
                "geocode": {
                    "SAME": [
                        "058787"
                    ],
                    "UGC": [
                        "PKZ787"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ787"
                ],
                "references": [],
                "sent": "2025-08-21T03:30:00-08:00",
                "effective": "2025-08-21T03:30:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T16:30:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Gale Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Gale Warning issued August 21 at 3:30AM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...S wind 30 kt. Seas 7 ft. Areas of fog.\n.TONIGHT...S wind 35 kt. Seas 11 ft.\n.FRI...S wind 30 kt. Seas 12 ft. Rain showers.\n.FRI NIGHT...S wind 30 kt. Seas 10 ft.\n.SAT...SW wind 30 kt. Seas 9 ft.\n.SUN THROUGH MON...W wind 15 kt. Seas 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 211130"
                    ],
                    "NWSheadline": [
                        "GALE WARNING TONIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.GL.W.9134.250822T0100Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "GLW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7e8f08ef47720e3b53fb37a455e46b08b648b44c.003.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7e8f08ef47720e3b53fb37a455e46b08b648b44c.003.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.7e8f08ef47720e3b53fb37a455e46b08b648b44c.003.1",
                "areaDesc": "Northeast Siskiyou and Northwest Modoc Counties; Modoc County; South Central Oregon Cascades; Klamath Basin; Northern and Eastern Klamath County and Western Lake County; Central and Eastern Lake County",
                "geocode": {
                    "SAME": [
                        "006049",
                        "006093",
                        "041019",
                        "041029",
                        "041035",
                        "041037"
                    ],
                    "UGC": [
                        "CAZ084",
                        "CAZ085",
                        "ORZ027",
                        "ORZ029",
                        "ORZ030",
                        "ORZ031"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/CAZ084",
                    "https://api.weather.gov/zones/forecast/CAZ085",
                    "https://api.weather.gov/zones/forecast/ORZ027",
                    "https://api.weather.gov/zones/forecast/ORZ029",
                    "https://api.weather.gov/zones/forecast/ORZ030",
                    "https://api.weather.gov/zones/forecast/ORZ031"
                ],
                "references": [],
                "sent": "2025-08-21T03:37:00-07:00",
                "effective": "2025-08-21T03:37:00-07:00",
                "onset": "2025-08-22T13:00:00-07:00",
                "expires": "2025-08-21T17:00:00-07:00",
                "ends": "2025-08-23T20:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Heat Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Medford OR",
                "headline": "Heat Advisory issued August 21 at 3:37AM PDT until August 23 at 8:00PM PDT by NWS Medford OR",
                "description": "* WHAT...Hot conditions with high temperatures of 95 to 100 degrees.\nOvernight low temperatures of 50 to 60 degrees.\n\n* WHERE...All areas from the Cascades eastward in Oregon, including\nUnion Creek, Klamath Falls, Chiloquin, Crescent, Fort Rock, Bly\nand Lakeview. Also all of eastern Siskiyou County and Modoc County\nin Northeast California, including Dorris, Macdoel, Tulelake,\nAdin, Alturas and Likely.\n\n* WHEN...From 1 PM Friday to 8 PM PDT Saturday.\n\n* IMPACTS...Unusually hot temperatures will increase risk for heat\nrelated illnesses.",
                "instruction": "Drink plenty of fluids, stay in an air-conditioned room, stay out of\nthe sun, and check up on relatives and neighbors.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "NPWMFR"
                    ],
                    "WMOidentifier": [
                        "WWUS76 KMFR 211037"
                    ],
                    "NWSheadline": [
                        "HEAT ADVISORY IN EFFECT FROM 1 PM FRIDAY TO 8 PM PDT SATURDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.EXB.KMFR.HT.Y.0006.250822T2000Z-250824T0300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T20:00:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "HTY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.542733690a4f3fdf791b082e331efab5352f49f6.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.542733690a4f3fdf791b082e331efab5352f49f6.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.542733690a4f3fdf791b082e331efab5352f49f6.001.1",
                "areaDesc": "Foothills and Valleys of the North Cascades; Foothills and Valleys of Snohomish and Northern King Counties; Foothills and Valleys of Central King County; Foothills and Valleys of Pierce and Southern King Counties; Foothills and Valleys of Thurston and Lewis Counties; Lowlands of Western Whatcom County; Lowlands of Western Skagit and Northwestern Snohomish Counties; Downtown Everett / Marysville Area; Shoreline / Lynnwood / South Everett Area; Eastside; City of Seattle; Lowlands of Pierce and Southern King Counties; Olympia and Southern Puget Sound; Lowlands of Lewis and Southern Thurston Counties; Middle Chehalis River Valley; Willapa and Black Hills; Southern Hood Canal; Northern Hood Canal; Eastern Kitsap County; Foothills of the Western and Southern Olympic Peninsula",
                "geocode": {
                    "SAME": [
                        "053073",
                        "053057",
                        "053061",
                        "053033",
                        "053053",
                        "053067",
                        "053041",
                        "053045",
                        "053027",
                        "053031",
                        "053035",
                        "053009"
                    ],
                    "UGC": [
                        "WAZ305",
                        "WAZ306",
                        "WAZ307",
                        "WAZ308",
                        "WAZ309",
                        "WAZ310",
                        "WAZ311",
                        "WAZ312",
                        "WAZ313",
                        "WAZ314",
                        "WAZ315",
                        "WAZ316",
                        "WAZ317",
                        "WAZ318",
                        "WAZ319",
                        "WAZ320",
                        "WAZ321",
                        "WAZ322",
                        "WAZ323",
                        "WAZ329"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/WAZ305",
                    "https://api.weather.gov/zones/forecast/WAZ306",
                    "https://api.weather.gov/zones/forecast/WAZ307",
                    "https://api.weather.gov/zones/forecast/WAZ308",
                    "https://api.weather.gov/zones/forecast/WAZ309",
                    "https://api.weather.gov/zones/forecast/WAZ310",
                    "https://api.weather.gov/zones/forecast/WAZ311",
                    "https://api.weather.gov/zones/forecast/WAZ312",
                    "https://api.weather.gov/zones/forecast/WAZ313",
                    "https://api.weather.gov/zones/forecast/WAZ314",
                    "https://api.weather.gov/zones/forecast/WAZ315",
                    "https://api.weather.gov/zones/forecast/WAZ316",
                    "https://api.weather.gov/zones/forecast/WAZ317",
                    "https://api.weather.gov/zones/forecast/WAZ318",
                    "https://api.weather.gov/zones/forecast/WAZ319",
                    "https://api.weather.gov/zones/forecast/WAZ320",
                    "https://api.weather.gov/zones/forecast/WAZ321",
                    "https://api.weather.gov/zones/forecast/WAZ322",
                    "https://api.weather.gov/zones/forecast/WAZ323",
                    "https://api.weather.gov/zones/forecast/WAZ329"
                ],
                "references": [],
                "sent": "2025-08-21T01:35:00-07:00",
                "effective": "2025-08-21T01:35:00-07:00",
                "onset": "2025-08-22T11:00:00-07:00",
                "expires": "2025-08-21T17:00:00-07:00",
                "ends": "2025-08-26T05:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Heat Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Seattle WA",
                "headline": "Heat Advisory issued August 21 at 1:35AM PDT until August 26 at 5:00AM PDT by NWS Seattle WA",
                "description": "* WHAT...Hot conditions with high temperatures in the mid 80s to 90s\nexpected and low temperatures mostly in the 60s. This will pose a\nmoderate risk of heat-related illness.\n\n* WHERE...Portions of northwest and west central Washington.\n\n* WHEN...From 11 AM Friday to 5 AM PDT Tuesday.\n\n* IMPACTS...Heat will significantly increase the risk of\nheat-related illnesses for those who are sensitive to heat,\nespecially those without effective cooling or adequate hydration.",
                "instruction": "Drink plenty of fluids, stay in an air-conditioned room, stay out of\nthe sun, and check up on relatives and neighbors. Young children and\npets should never be left unattended in vehicles under any\ncircumstances.\n\nTake extra precautions if you work or spend time outside. When\npossible reschedule strenuous activities to early morning or\nevening. Know the signs and symptoms of heat exhaustion and heat\nstroke. Wear lightweight and loose fitting clothing when possible.\nTo reduce risk during outdoor work, the Occupational Safety and\nHealth Administration recommends scheduling frequent rest breaks in\nshaded or air conditioned environments. Anyone overcome by heat\nshould be moved to a cool and shaded location. Heat stroke is an\nemergency! Call 9 1 1.\n\nFor sheltering information and other human services in your area,\ndial 2 1 1 during business hours or visit wa211.org anytime.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "NPWSEW"
                    ],
                    "WMOidentifier": [
                        "WWUS76 KSEW 210835"
                    ],
                    "NWSheadline": [
                        "HEAT ADVISORY IN EFFECT FROM 11 AM FRIDAY TO 5 AM PDT TUESDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KSEW.HT.Y.0005.250822T1800Z-250826T1200Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-26T05:00:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "HTY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b2ec44e7f55c3a860786c0bd90f60b2ccfb343f2.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.b2ec44e7f55c3a860786c0bd90f60b2ccfb343f2.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.b2ec44e7f55c3a860786c0bd90f60b2ccfb343f2.001.1",
                "areaDesc": "South Central Elko County",
                "geocode": {
                    "SAME": [
                        "032007"
                    ],
                    "UGC": [
                        "NVZ039"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/NVZ039"
                ],
                "references": [],
                "sent": "2025-08-21T00:39:00-07:00",
                "effective": "2025-08-21T00:39:00-07:00",
                "onset": "2025-08-22T11:00:00-07:00",
                "expires": "2025-08-22T03:00:00-07:00",
                "ends": "2025-08-22T20:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Heat Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Elko NV",
                "headline": "Heat Advisory issued August 21 at 12:39AM PDT until August 22 at 8:00PM PDT by NWS Elko NV",
                "description": "* WHAT...High temperatures 95 to 100 degrees expected in the valleys.\n\n* WHERE...South Central Elko County.\n\n* WHEN...From 11 AM PDT Friday morning until 8 PM PDT Friday evening.\n\n* IMPACTS...Hot temperatures may cause heat illnesses.",
                "instruction": "Drink plenty of fluids, stay in an air-conditioned room, remain out\nof the sun, and check on relatives and neighbors.\n\nTake extra precautions when outside. Wear lightweight and loose\nfitting clothing. Try to limit strenuous activities to early morning\nor evening. Take action when you see symptoms of heat exhaustion and\nheat stroke.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "NPWLKN"
                    ],
                    "WMOidentifier": [
                        "WWUS75 KLKN 210739"
                    ],
                    "NWSheadline": [
                        "A HEAT ADVISORY IS IN EFFECT FROM 11 AM PDT FRIDAY MORNING UNTIL 8 PM PDT FRIDAY EVENING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.EXA.KLKN.HT.Y.0007.250822T1800Z-250823T0300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T20:00:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "HTY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.268a956e5b64c5aa1efe081ecfe9f664d71ecfbd.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.268a956e5b64c5aa1efe081ecfe9f664d71ecfbd.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.268a956e5b64c5aa1efe081ecfe9f664d71ecfbd.001.1",
                "areaDesc": "San Juan and Vicinity; Northeast; Southeast; Eastern Interior; North Central; Ponce and Vicinity; Northwest; Mayaguez and Vicinity; Southwest; Culebra; Vieques; St.Thomas...St. John.. and Adjacent Islands; St Croix",
                "geocode": {
                    "SAME": [
                        "072021",
                        "072031",
                        "072033",
                        "072061",
                        "072127",
                        "072135",
                        "072137",
                        "072139",
                        "072029",
                        "072037",
                        "072053",
                        "072069",
                        "072087",
                        "072089",
                        "072103",
                        "072119",
                        "072015",
                        "072057",
                        "072095",
                        "072109",
                        "072123",
                        "072151",
                        "072007",
                        "072025",
                        "072035",
                        "072041",
                        "072045",
                        "072063",
                        "072077",
                        "072085",
                        "072129",
                        "072013",
                        "072017",
                        "072051",
                        "072054",
                        "072091",
                        "072143",
                        "072145",
                        "072059",
                        "072075",
                        "072111",
                        "072113",
                        "072133",
                        "072153",
                        "072005",
                        "072027",
                        "072065",
                        "072071",
                        "072115",
                        "072003",
                        "072011",
                        "072067",
                        "072097",
                        "072099",
                        "072117",
                        "072125",
                        "072023",
                        "072055",
                        "072079",
                        "072049",
                        "072147",
                        "078020",
                        "078030",
                        "078010"
                    ],
                    "UGC": [
                        "PRZ001",
                        "PRZ002",
                        "PRZ003",
                        "PRZ004",
                        "PRZ005",
                        "PRZ007",
                        "PRZ008",
                        "PRZ010",
                        "PRZ011",
                        "PRZ012",
                        "PRZ013",
                        "VIZ001",
                        "VIZ002"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PRZ001",
                    "https://api.weather.gov/zones/forecast/PRZ002",
                    "https://api.weather.gov/zones/forecast/PRZ003",
                    "https://api.weather.gov/zones/forecast/PRZ004",
                    "https://api.weather.gov/zones/forecast/PRZ005",
                    "https://api.weather.gov/zones/forecast/PRZ007",
                    "https://api.weather.gov/zones/forecast/PRZ008",
                    "https://api.weather.gov/zones/forecast/PRZ010",
                    "https://api.weather.gov/zones/forecast/PRZ011",
                    "https://api.weather.gov/zones/forecast/PRZ012",
                    "https://api.weather.gov/zones/forecast/PRZ013",
                    "https://api.weather.gov/zones/forecast/VIZ001",
                    "https://api.weather.gov/zones/forecast/VIZ002"
                ],
                "references": [],
                "sent": "2025-08-21T03:02:00-04:00",
                "effective": "2025-08-21T03:02:00-04:00",
                "onset": "2025-08-21T10:00:00-04:00",
                "expires": "2025-08-21T17:00:00-04:00",
                "ends": "2025-08-21T17:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Heat Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS San Juan PR",
                "headline": "Heat Advisory issued August 21 at 3:02AM AST until August 21 at 5:00PM AST by NWS San Juan PR",
                "description": "* WHAT...This level of heat affect most individuals sensitive to\nheat, especially those without effective cooling or adequate\nhydration. Impacts possible in some health system and in\nheat-sensitive industries.\n\n* WHERE...All coastal and urban areas of Puerto Rico and Virgin\nIslands.\n\n* WHEN...From 10 AM this morning to 5 PM AST this afternoon.\n\n* IMPACTS...Hot temperatures and high humidity may cause heat\nillnesses.",
                "instruction": "Take extra precautions when outside. Wear lightweight and loose\nfitting clothing. Try to limit strenuous activities to early morning\nor evening. Take action when you see symptoms of heat exhaustion and\nheat stroke.\n\nTo reduce risk during outdoor work, the Occupational Safety and\nHealth Administration recommends scheduling frequent rest breaks in\nshaded or air conditioned environments. Anyone overcome by heat\nshould be moved to a cool and shaded location. Heat stroke is an\nemergency! Call 9 1 1.",
                "response": "Execute",
                "parameters": {
                    "AWIPSidentifier": [
                        "NPWSJU"
                    ],
                    "WMOidentifier": [
                        "WWCA72 TJSJ 210702"
                    ],
                    "NWSheadline": [
                        "HEAT ADVISORY IN EFFECT FROM 10 AM THIS MORNING TO 5 PM AST THIS AFTERNOON"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.TJSJ.HT.Y.0041.250821T1400Z-250821T2100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "HTY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f1b0da4115cc49f634c3fd234547ae0b36c9667e.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.f1b0da4115cc49f634c3fd234547ae0b36c9667e.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.f1b0da4115cc49f634c3fd234547ae0b36c9667e.001.1",
                "areaDesc": "Lewiston Area; Lower Garfield and Asotin Counties; Moses Lake Area; Upper Columbia Basin; Wenatchee Area; Okanogan Valley; Waterville Plateau; Central Chelan County; Western Okanogan County",
                "geocode": {
                    "SAME": [
                        "016069",
                        "053003",
                        "053023",
                        "053001",
                        "053025",
                        "053017",
                        "053043",
                        "053047",
                        "053007"
                    ],
                    "UGC": [
                        "IDZ026",
                        "WAZ032",
                        "WAZ034",
                        "WAZ035",
                        "WAZ041",
                        "WAZ043",
                        "WAZ044",
                        "WAZ047",
                        "WAZ049"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/IDZ026",
                    "https://api.weather.gov/zones/forecast/WAZ032",
                    "https://api.weather.gov/zones/forecast/WAZ034",
                    "https://api.weather.gov/zones/forecast/WAZ035",
                    "https://api.weather.gov/zones/forecast/WAZ041",
                    "https://api.weather.gov/zones/forecast/WAZ043",
                    "https://api.weather.gov/zones/forecast/WAZ044",
                    "https://api.weather.gov/zones/forecast/WAZ047",
                    "https://api.weather.gov/zones/forecast/WAZ049"
                ],
                "references": [],
                "sent": "2025-08-20T23:29:00-07:00",
                "effective": "2025-08-20T23:29:00-07:00",
                "onset": "2025-08-23T12:00:00-07:00",
                "expires": "2025-08-21T17:00:00-07:00",
                "ends": "2025-08-26T21:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Likely",
                "urgency": "Future",
                "event": "Extreme Heat Watch",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Spokane WA",
                "headline": "Extreme Heat Watch issued August 20 at 11:29PM PDT until August 26 at 9:00PM PDT by NWS Spokane WA",
                "description": "* WHAT...Hot temperatures. High temperatures 95 to 102 degrees.\nLimited overnight relief with low temperatures 65 to 74.\n\n* WHERE...Entiat, Moses Lake, Number 2 Canyon, Lewiston, Disautel\nPass, Conconully, Tonasket, Leavenworth, Culdesac, Loup Loup Pass,\nLewiston Grade, Number 1 Canyon, Methow, Mansfield, Lapwai,\nClarkston, Cashmere, Chelan, Ritzville, Harrington, Plain,\nOthello, Quincy, Winthrop, Wenatchee, Ephrata, Alpowa Summit,\nBridgeport, Gifford, Coulee City, Wilbur, Pangborn Airport, Twisp,\nOmak, Odessa, Peck, Badger Mountain Road, Waterville, Creston,\nPomeroy, Brewster, Nespelem, Mazama, Oroville, Okanogan, and Grand\nCoulee.\n\n* WHEN...From Saturday afternoon through Tuesday evening.\n\n* IMPACTS...Hot temperatures will increase the risk of heat-related\nillnesses. Heat of this magnitude affects anyone without cooling\nand hydration as well as health systems and industries.",
                "instruction": "Drink plenty of fluids, stay in an air-conditioned room, stay out of\nthe sun, and check up on relatives and neighbors.\n\nDo not leave young children and pets in unattended vehicles. Car\ninteriors will reach lethal temperatures in a matter of minutes.\n\nTake extra precautions when outside. Wear lightweight and loose\nfitting clothing. Try to limit strenuous activities to early morning\nor evening. Take action when you see symptoms of heat exhaustion and\nheat stroke.\n\nTo reduce risk during outdoor work, the Occupational Safety and\nHealth Administration recommends scheduling frequent rest breaks in\nshaded or air conditioned environments. Anyone overcome by heat\nshould be moved to a cool and shaded location. Heat stroke is an\nemergency! Call 9 1 1.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "NPWOTX"
                    ],
                    "WMOidentifier": [
                        "WWUS76 KOTX 210629"
                    ],
                    "NWSheadline": [
                        "EXTREME HEAT WATCH REMAINS IN EFFECT FROM SATURDAY AFTERNOON THROUGH TUESDAY EVENING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.CON.KOTX.XH.A.0002.250823T1900Z-250827T0400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-26T21:00:00-07:00"
                    ],
                    "expiredReferences": [
                        "w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.56b4a0ae6bdecaf14bac843cc1405bd6b383e458.001.1,2025-08-20T14:09:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "XHA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.036.2",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.036.2",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.036.2",
                "areaDesc": "Saint Matthew Island Waters",
                "geocode": {
                    "SAME": [
                        "058767"
                    ],
                    "UGC": [
                        "PKZ767"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ767"
                ],
                "references": [],
                "sent": "2025-08-20T20:13:00-08:00",
                "effective": "2025-08-20T20:13:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T09:15:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 8:13PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...SW wind 25 kt. Seas 9 ft. Areas of fog.\n.THU...SW wind 20 kt. Seas 7 ft. Areas of fog.\n.THU NIGHT...E of Saint Matthew Island, variable wind 10 kt\nbecoming S 20 kt after midnight. W of Saint Matthew Island, SE wind\n25 kt. Seas 5 ft. Rain showers.\n.FRI...S wind 30 kt. Seas 10 ft.\n.FRI NIGHT...SW wind 30 kt. Seas 15 ft.\n.SAT...SW wind 25 kt. Seas 14 ft.\n.SUN...S wind 20 kt. Seas 8 ft.\n.MON...N wind 20 kt. Seas 7 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 210413"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY TONIGHT AND THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.6550.250822T0100Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.026.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.026.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.026.1",
                "areaDesc": "Adak to Kiska Pacific Side",
                "geocode": {
                    "SAME": [
                        "058785"
                    ],
                    "UGC": [
                        "PKZ785"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ785"
                ],
                "references": [],
                "sent": "2025-08-20T20:13:00-08:00",
                "effective": "2025-08-20T20:13:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-21T09:15:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 8:13PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...S wind 20 kt. Seas 5 ft. Areas of fog.\n.THU...SW wind 25 kt. Seas 5 ft. Areas of fog.\n.THU NIGHT...SW wind 25 kt. Seas 6 ft. Areas of fog.\n.FRI AND FRI NIGHT...S wind 25 kt. Seas 8 ft.\n.SAT THROUGH SUN...S wind 25 kt. Seas 9 ft.\n.MON...W wind 15 kt. Seas 7 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 210413"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY AND THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.6544.250821T1300Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.028.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.028.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.028.1",
                "areaDesc": "Kiska to Attu Pacific Side",
                "geocode": {
                    "SAME": [
                        "058787"
                    ],
                    "UGC": [
                        "PKZ787"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ787"
                ],
                "references": [],
                "sent": "2025-08-20T20:13:00-08:00",
                "effective": "2025-08-20T20:13:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-21T09:15:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 8:13PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...S wind 20 kt. Seas 6 ft. Areas of fog. Isolated\nthunderstorms.\n.THU...S wind 20 kt increasing to 30 kt in the afternoon. Seas 6\nft. Areas of fog.\n.THU NIGHT...S wind 30 kt. Seas 12 ft.\n.FRI...S wind 25 kt. Seas 13 ft.\n.FRI NIGHT...S wind 30 kt. Seas 10 ft.\n.SAT...SW wind 30 kt. Seas 9 ft.\n.SUN THROUGH MON...W wind 15 kt. Seas 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 210413"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY AND THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.6546.250821T1300Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.027.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.027.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.027.1",
                "areaDesc": "Kiska to Attu Bering Side",
                "geocode": {
                    "SAME": [
                        "058786"
                    ],
                    "UGC": [
                        "PKZ786"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ786"
                ],
                "references": [],
                "sent": "2025-08-20T20:13:00-08:00",
                "effective": "2025-08-20T20:13:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T09:15:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Gale Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Gale Warning issued August 20 at 8:13PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...SE wind 20 kt. Seas 4 ft. Areas of fog. Isolated\nthunderstorms.\n.THU...S wind 30 kt. Seas 5 ft. Rain showers.\n.THU NIGHT...S wind 35 kt. Seas 8 ft building to 14 ft after\nmidnight.\n.FRI...S wind 30 kt. Seas 16 ft.\n.FRI NIGHT...S wind 30 kt. Seas 9 ft.\n.SAT...SW wind 25 kt. Seas 9 ft.\n.SUN THROUGH MON...W wind 15 kt. Seas 5 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 210413"
                    ],
                    "NWSheadline": [
                        "GALE WARNING THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.GL.W.6545.250822T0100Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "GLW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.615bef1fbec91c5f816009a652cbbe795dc11d7b.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.615bef1fbec91c5f816009a652cbbe795dc11d7b.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.615bef1fbec91c5f816009a652cbbe795dc11d7b.002.1",
                "areaDesc": "Bering Sea Offshore  West of 180 and East of the International Date Line",
                "geocode": {
                    "SAME": [
                        "058411"
                    ],
                    "UGC": [
                        "PKZ411"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ411"
                ],
                "references": [],
                "sent": "2025-08-20T20:13:00-08:00",
                "effective": "2025-08-20T20:13:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T04:15:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Gale Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Gale Warning issued August 20 at 8:13PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Offshore Waters Forecast for the Bering Sea\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...SE wind 15 kt. Seas 4 ft. Areas of fog. Rain showers.\n.THU...S wind 15 to 25 kt. Seas 4 ft. Rain showers.\n.THU NIGHT...S wind 15 to 30 kt increasing to 25 to 35 kt after\nmidnight. Seas 5 to 10 ft. Rain showers.\n.FRI...SW wind 20 to 35 kt. Seas 9 to 17 ft.\n.FRI NIGHT...S wind 15 to 25 kt. Seas 9 to 14 ft.\n.SAT...SW wind 10 to 25 kt. Seas 5 to 9 ft.\n.SUN THROUGH MON...W wind 15 kt. Seas 3 to 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "OFFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK62 PAFC 210413"
                    ],
                    "NWSheadline": [
                        "GALE WARNING THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.GL.W.7325.250822T0100Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "GLW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.025.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.025.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.6664810c9451b5c667005eb5449a74c5233ef049.025.1",
                "areaDesc": "Adak to Kiska Bering Side",
                "geocode": {
                    "SAME": [
                        "058784"
                    ],
                    "UGC": [
                        "PKZ784"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ784"
                ],
                "references": [],
                "sent": "2025-08-20T20:13:00-08:00",
                "effective": "2025-08-20T20:13:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T09:15:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 8:13PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...S wind 20 kt. Seas 4 ft. Areas of fog. Rain showers.\n.THU...SW wind 20 kt. Seas 5 ft. Areas of fog.\n.THU NIGHT...SW wind 25 kt. Seas 6 ft. Areas of fog.\n.FRI...SW wind 25 kt. Seas 7 ft.\n.FRI NIGHT...S wind 30 kt. Seas 8 ft.\n.SAT...S wind 30 kt. Seas 9 ft.\n.SUN...SW wind 20 kt. Seas 6 ft.\n.MON...W wind 15 kt. Seas 5 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 210413"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.6543.250822T0100Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.df95570133d4883e20d3f6e097f0df9b03a90172.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.df95570133d4883e20d3f6e097f0df9b03a90172.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.df95570133d4883e20d3f6e097f0df9b03a90172.002.1",
                "areaDesc": "Summit, CO",
                "geocode": {
                    "SAME": [
                        "008117"
                    ],
                    "UGC": [
                        "COC117"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/COC117"
                ],
                "references": [],
                "sent": "2025-08-20T20:11:00-06:00",
                "effective": "2025-08-20T20:10:00-06:00",
                "onset": "2025-08-20T20:10:00-06:00",
                "expires": "2025-08-21T16:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Denver CO",
                "headline": "Air Quality Alert issued August 20 at 8:10PM MDT by NWS Denver CO",
                "description": "The Colorado Department of Public Health and Environment has\nissued the following...\n\nWHAT...Air Quality Health Advisory for Wildfire Smoke.\n\nWHERE...Eagle, Pitkin, Summit, and Lake Counties. Locations\ninclude, but are not limited to Gypsum, Eagle, Vail, Basalt, Woody\nCreek, Aspen, Frisco, Silverthorne, Breckenridge, and Leadville.\n\nWHEN...430 PM Wednesday August 20 to 900 AM Thursday August 21\n\nIMPACTS...Smoke from the Derby Fire is impacting central Colorado.\nThe heaviest smoke is expected in areas near the fire, but\nmoderate to heavy smoke is possible throughout the advisory area\novernight Wednesday and into Thursday morning.\n\nHEALTH INFORMATION...Public Health Recommendations: If smoke is\nthick or becomes thick in your neighborhood you may want to remain\nindoors. This is especially true for those with heart disease,\nrespiratory illnesses, the very young, and older adults. Consider\nlimiting outdoor activity when moderate to heavy smoke is present.\nConsider relocating temporarily if smoke is present indoors and is\nmaking you ill. If visibility is less than 5 miles in smoke in\nyour neighborhood, smoke has reached levels that are unhealthy.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQABOU"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KBOU 210211"
                    ],
                    "NWSheadline": [
                        "AIR QUALITY HEALTH ADVISORY FOR WILDFIRE SMOKE FROM 430 PM WEDNESDAY UNTIL 900 AM THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.df95570133d4883e20d3f6e097f0df9b03a90172.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.df95570133d4883e20d3f6e097f0df9b03a90172.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.df95570133d4883e20d3f6e097f0df9b03a90172.001.1",
                "areaDesc": "Denver, CO; Weld, CO; Douglas, CO; Broomfield, CO; Boulder, CO; Jefferson, CO; Larimer, CO; Arapahoe, CO; Adams, CO",
                "geocode": {
                    "SAME": [
                        "008031",
                        "008123",
                        "008035",
                        "008014",
                        "008013",
                        "008059",
                        "008069",
                        "008005",
                        "008001"
                    ],
                    "UGC": [
                        "COC031",
                        "COC123",
                        "COC035",
                        "COC014",
                        "COC013",
                        "COC059",
                        "COC069",
                        "COC005",
                        "COC001"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/COC031",
                    "https://api.weather.gov/zones/county/COC123",
                    "https://api.weather.gov/zones/county/COC035",
                    "https://api.weather.gov/zones/county/COC014",
                    "https://api.weather.gov/zones/county/COC013",
                    "https://api.weather.gov/zones/county/COC059",
                    "https://api.weather.gov/zones/county/COC069",
                    "https://api.weather.gov/zones/county/COC005",
                    "https://api.weather.gov/zones/county/COC001"
                ],
                "references": [],
                "sent": "2025-08-20T20:11:00-06:00",
                "effective": "2025-08-20T20:10:00-06:00",
                "onset": "2025-08-20T20:10:00-06:00",
                "expires": "2025-08-21T16:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Denver CO",
                "headline": "Air Quality Alert issued August 20 at 8:10PM MDT by NWS Denver CO",
                "description": "The Colorado Department of Public Health and Environment has\nissued the following...\n\nWHAT...Ozone Action Day Alert.\n\nWHERE...Douglas, Jefferson, Denver, western Arapahoe, western\nAdams, Broomfield, Boulder, Larimer, and Weld Counties\n\nWHEN...400 PM Wednesday August 20 to 400 PM Thursday August 21\n\nIMPACTS...Ozone Action Day Alert is now in effect for the Front\nRange Urban Corridor.  Hot, stagnant weather will allow ozone to\nreach the Unhealthy for Sensitive Groups category on Wednesday and\nThursday. For Colorado air quality conditions, forecasts, and\nadvisories, visit:\nhttps://www.colorado.gov/airquality/colorado_summary.aspx   If\npossible, please help us reduce ozone pollution by limiting\ndriving gas and diesel-powered vehicles until at least 4 p.m.\nThursday, August 21, 2025. Colorado is also addressing ozone\npollution through state policies. For more information about\nhealth impacts and how ozone pollution forms in Colorado, visit:\nhttps://cdphe.colorado.gov/ozone-pollution-and-your-health\n\nHEALTH INFORMATION...Increasing likelihood of respiratory symptoms\nand breathing discomfort in active children and adults and people\nwith lung disease, such as asthma. Active children and adults, and\npeople with lung disease, such as asthma, should reduce prolonged\nor heavy outdoor exertion.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQABOU"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KBOU 210211"
                    ],
                    "NWSheadline": [
                        "OZONE ACTION DAY ALERT FROM 400 PM WEDNESDAY UNTIL 400 PM THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fdc9a105459df9eb26a4e0920d3aa8603832c79c.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fdc9a105459df9eb26a4e0920d3aa8603832c79c.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.fdc9a105459df9eb26a4e0920d3aa8603832c79c.002.1",
                "areaDesc": "Denver, CO; Broomfield, CO; Larimer, CO; Weld, CO; Douglas, CO; Jefferson, CO; Arapahoe, CO; Adams, CO; Boulder, CO",
                "geocode": {
                    "SAME": [
                        "008031",
                        "008014",
                        "008069",
                        "008123",
                        "008035",
                        "008059",
                        "008005",
                        "008001",
                        "008013"
                    ],
                    "UGC": [
                        "COC031",
                        "COC014",
                        "COC069",
                        "COC123",
                        "COC035",
                        "COC059",
                        "COC005",
                        "COC001",
                        "COC013"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/COC031",
                    "https://api.weather.gov/zones/county/COC014",
                    "https://api.weather.gov/zones/county/COC069",
                    "https://api.weather.gov/zones/county/COC123",
                    "https://api.weather.gov/zones/county/COC035",
                    "https://api.weather.gov/zones/county/COC059",
                    "https://api.weather.gov/zones/county/COC005",
                    "https://api.weather.gov/zones/county/COC001",
                    "https://api.weather.gov/zones/county/COC013"
                ],
                "references": [],
                "sent": "2025-08-20T19:10:00-06:00",
                "effective": "2025-08-20T19:10:00-06:00",
                "onset": "2025-08-20T19:10:00-06:00",
                "expires": "2025-08-21T16:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Denver CO",
                "headline": "Air Quality Alert issued August 20 at 7:10PM MDT by NWS Denver CO",
                "description": "The Colorado Department of Public Health and Environment has\nissued the following...\n\nWHAT...Action Day for No Action Day.\n\nWHERE...Douglas, Jefferson, Denver, western Arapahoe, western\nAdams, Broomfield, Boulder, Larimer, and Weld Counties\n\nWHEN...400 PM Wednesday August 20 to 400 PM Thursday August 21\n\nIMPACTS...Action Day for No Action Day is now in effect for the\nFront Range Urban Corridor.  Hot, stagnant weather will allow\nozone to reach the Unhealthy for Sensitive Groups category on\nWednesday and Thursday. For Colorado air quality conditions,\nforecasts, and advisories, visit:\nhttps://www.colorado.gov/airquality/colorado_summary.aspx   If\npossible, please help us reduce ozone pollution by limiting\ndriving gas and diesel-powered vehicles until at least 4 p.m.\nThursday, August 21, 2025. Colorado is also addressing ozone\npollution through state policies. For more information about\nhealth impacts and how ozone pollution forms in Colorado, visit:\nhttps://cdphe.colorado.gov/ozone-pollution-and-your-health\n\nHEALTH INFORMATION...Increasing likelihood of respiratory symptoms\nand breathing discomfort in active children and adults and people\nwith lung disease, such as asthma. Active children and adults, and\npeople with lung disease, such as asthma, should reduce prolonged\nor heavy outdoor exertion.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQABOU"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KBOU 210110"
                    ],
                    "NWSheadline": [
                        "ACTION DAY FOR NO ACTION DAY FROM 400 PM WEDNESDAY UNTIL 400 PM THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fdc9a105459df9eb26a4e0920d3aa8603832c79c.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fdc9a105459df9eb26a4e0920d3aa8603832c79c.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.fdc9a105459df9eb26a4e0920d3aa8603832c79c.001.1",
                "areaDesc": "Denver, CO; Broomfield, CO; Larimer, CO; Weld, CO; Douglas, CO; Jefferson, CO; Arapahoe, CO; Adams, CO; Boulder, CO",
                "geocode": {
                    "SAME": [
                        "008031",
                        "008014",
                        "008069",
                        "008123",
                        "008035",
                        "008059",
                        "008005",
                        "008001",
                        "008013"
                    ],
                    "UGC": [
                        "COC031",
                        "COC014",
                        "COC069",
                        "COC123",
                        "COC035",
                        "COC059",
                        "COC005",
                        "COC001",
                        "COC013"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/COC031",
                    "https://api.weather.gov/zones/county/COC014",
                    "https://api.weather.gov/zones/county/COC069",
                    "https://api.weather.gov/zones/county/COC123",
                    "https://api.weather.gov/zones/county/COC035",
                    "https://api.weather.gov/zones/county/COC059",
                    "https://api.weather.gov/zones/county/COC005",
                    "https://api.weather.gov/zones/county/COC001",
                    "https://api.weather.gov/zones/county/COC013"
                ],
                "references": [],
                "sent": "2025-08-20T19:10:00-06:00",
                "effective": "2025-08-20T19:10:00-06:00",
                "onset": "2025-08-20T19:10:00-06:00",
                "expires": "2025-08-21T16:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Denver CO",
                "headline": "Air Quality Alert issued August 20 at 7:10PM MDT by NWS Denver CO",
                "description": "The Colorado Department of Public Health and Environment has\nissued the following...\n\nWHAT...Ozone Action Day Alert.\n\nWHERE...Douglas, Jefferson, Denver, western Arapahoe, western\nAdams, Broomfield, Boulder, Larimer, and Weld Counties\n\nWHEN...400 PM Wednesday August 20 to 400 PM Thursday August 21\n\nIMPACTS...Ozone Action Day Alert is now in effect for the Front\nRange Urban Corridor.  Hot, stagnant weather will allow ozone to\nreach the Unhealthy for Sensitive Groups category on Wednesday and\nThursday. For Colorado air quality conditions, forecasts, and\nadvisories, visit:\nhttps://www.colorado.gov/airquality/colorado_summary.aspx   If\npossible, please help us reduce ozone pollution by limiting\ndriving gas and diesel-powered vehicles until at least 4 p.m.\nThursday, August 21, 2025. Colorado is also addressing ozone\npollution through state policies. For more information about\nhealth impacts and how ozone pollution forms in Colorado, visit:\nhttps://cdphe.colorado.gov/ozone-pollution-and-your-health\n\nHEALTH INFORMATION...Increasing likelihood of respiratory symptoms\nand breathing discomfort in active children and adults and people\nwith lung disease, such as asthma. Active children and adults, and\npeople with lung disease, such as asthma, should reduce prolonged\nor heavy outdoor exertion.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQABOU"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KBOU 210110"
                    ],
                    "NWSheadline": [
                        "OZONE ACTION DAY ALERT FROM 400 PM WEDNESDAY UNTIL 400 PM THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fdc9a105459df9eb26a4e0920d3aa8603832c79c.003.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.fdc9a105459df9eb26a4e0920d3aa8603832c79c.003.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.fdc9a105459df9eb26a4e0920d3aa8603832c79c.003.1",
                "areaDesc": "Summit, CO",
                "geocode": {
                    "SAME": [
                        "008117"
                    ],
                    "UGC": [
                        "COC117"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/COC117"
                ],
                "references": [],
                "sent": "2025-08-20T19:10:00-06:00",
                "effective": "2025-08-20T19:10:00-06:00",
                "onset": "2025-08-20T19:10:00-06:00",
                "expires": "2025-08-21T16:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Denver CO",
                "headline": "Air Quality Alert issued August 20 at 7:10PM MDT by NWS Denver CO",
                "description": "The Colorado Department of Public Health and Environment has\nissued the following...\n\nWHAT...Air Quality Health Advisory for Wildfire Smoke.\n\nWHERE...Eagle, Pitkin, Summit, and Lake Counties. Locations\ninclude, but are not limited to Gypsum, Eagle, Vail, Basalt, Woody\nCreek, Aspen, Frisco, Silverthorne, Breckenridge, and Leadville.\n\nWHEN...430 PM Wednesday August 20 to 900 AM Thursday August 21\n\nIMPACTS...Smoke from the Derby Fire is impacting central Colorado.\nThe heaviest smoke is expected in areas near the fire, but\nmoderate to heavy smoke is possible throughout the advisory area\novernight Wednesday and into Thursday morning.\n\nHEALTH INFORMATION...Public Health Recommendations: If smoke is\nthick or becomes thick in your neighborhood you may want to remain\nindoors. This is especially true for those with heart disease,\nrespiratory illnesses, the very young, and older adults. Consider\nlimiting outdoor activity when moderate to heavy smoke is present.\nConsider relocating temporarily if smoke is present indoors and is\nmaking you ill. If visibility is less than 5 miles in smoke in\nyour neighborhood, smoke has reached levels that are unhealthy.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQABOU"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KBOU 210110"
                    ],
                    "NWSheadline": [
                        "AIR QUALITY HEALTH ADVISORY FOR WILDFIRE SMOKE FROM 430 PM WEDNESDAY UNTIL 900 AM THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.06c588c8b58f359e5b869406656b40f6cdfc35f9.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.06c588c8b58f359e5b869406656b40f6cdfc35f9.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.06c588c8b58f359e5b869406656b40f6cdfc35f9.001.1",
                "areaDesc": "Arapahoe, CO; Douglas, CO; Jefferson, CO; Adams, CO; Larimer, CO; Boulder, CO; Denver, CO; Broomfield, CO; Weld, CO",
                "geocode": {
                    "SAME": [
                        "008005",
                        "008035",
                        "008059",
                        "008001",
                        "008069",
                        "008013",
                        "008031",
                        "008014",
                        "008123"
                    ],
                    "UGC": [
                        "COC005",
                        "COC035",
                        "COC059",
                        "COC001",
                        "COC069",
                        "COC013",
                        "COC031",
                        "COC014",
                        "COC123"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/COC005",
                    "https://api.weather.gov/zones/county/COC035",
                    "https://api.weather.gov/zones/county/COC059",
                    "https://api.weather.gov/zones/county/COC001",
                    "https://api.weather.gov/zones/county/COC069",
                    "https://api.weather.gov/zones/county/COC013",
                    "https://api.weather.gov/zones/county/COC031",
                    "https://api.weather.gov/zones/county/COC014",
                    "https://api.weather.gov/zones/county/COC123"
                ],
                "references": [],
                "sent": "2025-08-20T18:10:00-06:00",
                "effective": "2025-08-20T18:10:00-06:00",
                "onset": "2025-08-20T18:10:00-06:00",
                "expires": "2025-08-21T16:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Denver CO",
                "headline": "Air Quality Alert issued August 20 at 6:10PM MDT by NWS Denver CO",
                "description": "The Colorado Department of Public Health and Environment has\nissued the following...\n\nWHAT...Action Day for No Action Day.\n\nWHERE...Douglas, Jefferson, Denver, western Arapahoe, western\nAdams, Broomfield, Boulder, Larimer, and Weld Counties\n\nWHEN...400 PM Wednesday August 20 to 400 PM Thursday August 21\n\nIMPACTS...Action Day for No Action Day is now in effect for the\nFront Range Urban Corridor.  Hot, stagnant weather will allow\nozone to reach the Unhealthy for Sensitive Groups category on\nWednesday and Thursday. For Colorado air quality conditions,\nforecasts, and advisories, visit:\nhttps://www.colorado.gov/airquality/colorado_summary.aspx   If\npossible, please help us reduce ozone pollution by limiting\ndriving gas and diesel-powered vehicles until at least 4 p.m.\nThursday, August 21, 2025. Colorado is also addressing ozone\npollution through state policies. For more information about\nhealth impacts and how ozone pollution forms in Colorado, visit:\nhttps://cdphe.colorado.gov/ozone-pollution-and-your-health\n\nHEALTH INFORMATION...Increasing likelihood of respiratory symptoms\nand breathing discomfort in active children and adults and people\nwith lung disease, such as asthma. Active children and adults, and\npeople with lung disease, such as asthma, should reduce prolonged\nor heavy outdoor exertion.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQABOU"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KBOU 210010"
                    ],
                    "NWSheadline": [
                        "ACTION DAY FOR NO ACTION DAY FROM 400 PM WEDNESDAY UNTIL 400 PM THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.06c588c8b58f359e5b869406656b40f6cdfc35f9.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.06c588c8b58f359e5b869406656b40f6cdfc35f9.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.06c588c8b58f359e5b869406656b40f6cdfc35f9.002.1",
                "areaDesc": "Summit, CO",
                "geocode": {
                    "SAME": [
                        "008117"
                    ],
                    "UGC": [
                        "COC117"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/COC117"
                ],
                "references": [],
                "sent": "2025-08-20T18:10:00-06:00",
                "effective": "2025-08-20T18:10:00-06:00",
                "onset": "2025-08-20T18:10:00-06:00",
                "expires": "2025-08-21T16:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Denver CO",
                "headline": "Air Quality Alert issued August 20 at 6:10PM MDT by NWS Denver CO",
                "description": "The Colorado Department of Public Health and Environment has\nissued the following...\n\nWHAT...Air Quality Health Advisory for Wildfire Smoke.\n\nWHERE...Eagle, Pitkin, Summit, and Lake Counties. Locations\ninclude, but are not limited to Gypsum, Eagle, Vail, Basalt, Woody\nCreek, Aspen, Frisco, Silverthorne, Breckenridge, and Leadville.\n\nWHEN...430 PM Wednesday August 20 to 900 AM Thursday August 21\n\nIMPACTS...Smoke from the Derby Fire is impacting central Colorado.\nThe heaviest smoke is expected in areas near the fire, but\nmoderate to heavy smoke is possible throughout the advisory area\novernight Wednesday and into Thursday morning.\n\nHEALTH INFORMATION...Public Health Recommendations: If smoke is\nthick or becomes thick in your neighborhood you may want to remain\nindoors. This is especially true for those with heart disease,\nrespiratory illnesses, the very young, and older adults. Consider\nlimiting outdoor activity when moderate to heavy smoke is present.\nConsider relocating temporarily if smoke is present indoors and is\nmaking you ill. If visibility is less than 5 miles in smoke in\nyour neighborhood, smoke has reached levels that are unhealthy.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQABOU"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KBOU 210010"
                    ],
                    "NWSheadline": [
                        "AIR QUALITY HEALTH ADVISORY FOR WILDFIRE SMOKE FROM 430 PM WEDNESDAY UNTIL 900 AM THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.016.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.016.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.016.1",
                "areaDesc": "Kwemeluk Pass to Kwikpak Pass from 15 to 90 NM",
                "geocode": {
                    "SAME": [
                        "058853"
                    ],
                    "UGC": [
                        "PKZ853"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ853"
                ],
                "references": [],
                "sent": "2025-08-20T15:49:00-08:00",
                "effective": "2025-08-20T15:49:00-08:00",
                "onset": "2025-08-20T15:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:49PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Northwestern Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...S winds 25 kt. Seas 6 ft. Rain showers.\n.THU...W winds 25 kt. Seas 6 ft.\n.THU NIGHT...SW winds 15 kt. Seas 3 ft.\n.FRI...SW winds 20 kt. Seas 4 ft.\n.FRI NIGHT...S winds 25 kt. Seas 8 ft. Rain showers.\n.SAT...SW winds 25 kt. Seas 7 ft. Rain.\n.SAT NIGHT...SW winds 20 kt. Seas 7 ft. Rain.\n.SUN...SW winds 10 kt. Seas 5 ft.\n.MON...S winds 25 kt. Seas 10 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFWCZ"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFG 202349"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THROUGH THURSDAY MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.3215.250820T2300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.005.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.005.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.005.1",
                "areaDesc": "Moses Point to Sledge Island out to 15 NM",
                "geocode": {
                    "SAME": [
                        "058805"
                    ],
                    "UGC": [
                        "PKZ805"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ805"
                ],
                "references": [],
                "sent": "2025-08-20T15:49:00-08:00",
                "effective": "2025-08-20T15:49:00-08:00",
                "onset": "2025-08-20T15:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:49PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Northwestern Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...S winds 25 kt. Seas 6 ft. Rain showers.\n.THU...SW winds 25 kt. Seas 6 ft. Rain showers.\n.THU NIGHT...W winds 15 kt. Seas 3 ft.\n.FRI...SW winds 15 kt. Seas 3 ft.\n.FRI NIGHT...S winds 20 kt. Seas 6 ft. Rain showers.\n.SAT...SW winds 25 kt. Seas 6 ft. Rain.\n.SAT NIGHT...SW winds 20 kt. Seas 5 ft. Rain.\n.SUN...SW winds 10 kt. Seas 4 ft.\n.MON...S winds 20 kt. Seas 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFWCZ"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFG 202349"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THROUGH THURSDAY AFTERNOON"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.3206.250820T2300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.012.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.012.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.012.1",
                "areaDesc": "North Side of Saint Lawrence Island out to 15 NM",
                "geocode": {
                    "SAME": [
                        "058817"
                    ],
                    "UGC": [
                        "PKZ817"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ817"
                ],
                "references": [],
                "sent": "2025-08-20T15:49:00-08:00",
                "effective": "2025-08-20T15:49:00-08:00",
                "onset": "2025-08-20T15:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:49PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Northwestern Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...S winds 25 kt. Seas 6 ft.\n.THU...W winds 25 kt. Seas 6 ft.\n.THU NIGHT...S winds 10 kt. Seas 4 ft.\n.FRI...S winds 20 kt. Seas 4 ft. Rain showers.\n.FRI NIGHT...S winds 25 kt. Seas 7 ft. Rain showers.\n.SAT...SW winds 25 kt. Seas 8 ft. Rain.\n.SAT NIGHT...S winds 15 kt. Seas 7 ft. Rain.\n.SUN...NE winds 10 kt. Seas 4 ft.\n.MON...NE winds 20 kt. Seas 9 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFWCZ"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFG 202349"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THROUGH THURSDAY MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.3211.250820T2300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.015.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.015.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.015.1",
                "areaDesc": "Norton Sound greater than 15 NM",
                "geocode": {
                    "SAME": [
                        "058852"
                    ],
                    "UGC": [
                        "PKZ852"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ852"
                ],
                "references": [],
                "sent": "2025-08-20T15:49:00-08:00",
                "effective": "2025-08-20T15:49:00-08:00",
                "onset": "2025-08-20T15:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:49PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Northwestern Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...S winds 25 kt. Seas 6 ft. Rain showers.\n.THU...SW winds 25 kt. Seas 6 ft. Rain showers.\n.THU NIGHT...W winds 15 kt. Seas 3 ft.\n.FRI...SW winds 15 kt. Seas 3 ft.\n.FRI NIGHT...S winds 25 kt. Seas 7 ft. Rain showers.\n.SAT...SW winds 25 kt. Seas 6 ft. Rain.\n.SAT NIGHT...SW winds 20 kt. Seas 6 ft. Rain.\n.SUN...SW winds 15 kt. Seas 4 ft.\n.MON...S winds 25 kt. Seas 7 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFWCZ"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFG 202349"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THROUGH THURSDAY AFTERNOON"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.3214.250820T2300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.002.1",
                "areaDesc": "Dall Point to Kwikpak Pass out to 15 NM",
                "geocode": {
                    "SAME": [
                        "058802"
                    ],
                    "UGC": [
                        "PKZ802"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ802"
                ],
                "references": [],
                "sent": "2025-08-20T15:49:00-08:00",
                "effective": "2025-08-20T15:49:00-08:00",
                "onset": "2025-08-20T15:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:49PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Northwestern Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...S winds 25 kt. Seas 5 ft. Rain showers.\n.THU...SW winds 25 kt. Seas 5 ft.\n.THU NIGHT...SW winds 15 kt. Seas 3 ft.\n.FRI...S winds 20 kt. Seas 4 ft.\n.FRI NIGHT...S winds 25 kt. Seas 6 ft. Rain showers.\n.SAT...SW winds 25 kt. Seas 5 ft. Rain.\n.SAT NIGHT...S winds 25 kt. Seas 6 ft. Rain.\n.SUN...SW winds 15 kt. Seas 4 ft.\n.MON...S winds 25 kt. Seas 7 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFWCZ"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFG 202349"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THROUGH THURSDAY MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.3205.250820T2300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.013.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.013.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.7636c6c11a8392b1a863f0034319a52e8028096d.013.1",
                "areaDesc": "Etolin Strait to Kwemeluk Pass from 15 to 90 NM",
                "geocode": {
                    "SAME": [
                        "058850"
                    ],
                    "UGC": [
                        "PKZ850"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ850"
                ],
                "references": [],
                "sent": "2025-08-20T15:49:00-08:00",
                "effective": "2025-08-20T15:49:00-08:00",
                "onset": "2025-08-20T15:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:49PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Northwestern Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...SW winds 25 kt. Seas 7 ft.\n.THU...W winds 25 kt. Seas 6 ft.\n.THU NIGHT...SW winds 15 kt. Seas 4 ft.\n.FRI...S winds 20 kt. Seas 4 ft. Rain showers.\n.FRI NIGHT...S winds 25 kt. Seas 8 ft. Rain showers.\n.SAT...SW winds 20 kt. Seas 7 ft. Rain.\n.SAT NIGHT...SW winds 25 kt. Seas 8 ft. Rain.\n.SUN...SW winds 15 kt. Seas 6 ft.\n.MON...S winds 25 kt. Seas 11 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFWCZ"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFG 202349"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THROUGH THURSDAY MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.3212.250820T2300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.002.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.002.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.002.1",
                "areaDesc": "Cape Beaufort to Point Franklin out to 15 NM",
                "geocode": {
                    "SAME": [
                        "058812"
                    ],
                    "UGC": [
                        "PKZ812"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ812"
                ],
                "references": [],
                "sent": "2025-08-20T15:48:00-08:00",
                "effective": "2025-08-20T15:48:00-08:00",
                "onset": "2025-08-20T15:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:48PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Arctic Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...S winds 30 kt. Seas 8 ft. Rain.\n.THU...N winds 25 kt. Seas 6 ft. Rain.\n.THU NIGHT...W winds 15 kt. Seas 3 ft.\n.FRI...SW winds 15 kt. Seas 3 ft.\n.FRI NIGHT...SE winds 10 kt. Seas 2 ft.\n.SAT...NE winds 15 kt. Seas 3 ft.\n.SAT NIGHT...N winds 15 kt. Seas 4 ft.\n.SUN...N winds 10 kt. Seas 4 ft.\n.MON...NW winds 15 kt. Seas 3 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFNSB"
                    ],
                    "WMOidentifier": [
                        "FZAK51 PAFG 202348"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THROUGH THURSDAY MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.7292.250820T2300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.006.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.006.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.006.1",
                "areaDesc": "Cape Thompson to Cape Beaufort from 15 to 85 NM",
                "geocode": {
                    "SAME": [
                        "058857"
                    ],
                    "UGC": [
                        "PKZ857"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ857"
                ],
                "references": [],
                "sent": "2025-08-20T15:48:00-08:00",
                "effective": "2025-08-20T15:48:00-08:00",
                "onset": "2025-08-20T15:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:48PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Arctic Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...S winds 30 kt. Seas 9 ft. Rain.\n.THU...N winds 25 kt. Seas 5 ft.\n.THU NIGHT...W winds 10 kt. Seas 3 ft.\n.FRI...S winds 15 kt. Seas 3 ft.\n.FRI NIGHT...E winds 10 kt. Seas 3 ft.\n.SAT...N winds 20 kt. Seas 5 ft.\n.SAT NIGHT...N winds 15 kt. Seas 6 ft.\n.SUN...N winds 15 kt. Seas 5 ft.\n.MON...N winds 20 kt. Seas 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFNSB"
                    ],
                    "WMOidentifier": [
                        "FZAK51 PAFG 202348"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THROUGH THURSDAY MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.7295.250820T2300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.007.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.007.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.007.1",
                "areaDesc": "Cape Beaufort to Point Franklin from 15 to 85 NM",
                "geocode": {
                    "SAME": [
                        "058858"
                    ],
                    "UGC": [
                        "PKZ858"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ858"
                ],
                "references": [],
                "sent": "2025-08-20T15:48:00-08:00",
                "effective": "2025-08-20T15:48:00-08:00",
                "onset": "2025-08-20T15:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:48PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Arctic Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...S winds 30 kt. Seas 10 ft. Rain.\n.THU...N winds 25 kt. Seas 7 ft.\n.THU NIGHT...W winds 15 kt. Seas 4 ft.\n.FRI...W winds 15 kt. Seas 3 ft.\n.FRI NIGHT...S winds 10 kt. Seas 3 ft.\n.SAT...NE winds 15 kt. Seas 4 ft.\n.SAT NIGHT...NW winds 15 kt. Seas 5 ft.\n.SUN...N winds 10 kt. Seas 4 ft.\n.MON...NW winds 15 kt. Seas 4 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFNSB"
                    ],
                    "WMOidentifier": [
                        "FZAK51 PAFG 202348"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THROUGH THURSDAY MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.7296.250820T2300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.010.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.010.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.010.1",
                "areaDesc": "Flaxman Island to Demarcation Point from 15 to 75 NM",
                "geocode": {
                    "SAME": [
                        "058861"
                    ],
                    "UGC": [
                        "PKZ861"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ861"
                ],
                "references": [],
                "sent": "2025-08-20T15:48:00-08:00",
                "effective": "2025-08-20T15:48:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:48PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Arctic Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...SE winds 20 kt. Seas 4 ft.\n.THU...SW winds 25 kt. Seas 4 ft.\n.THU NIGHT...SW winds 20 kt. Seas 4 ft.\n.FRI...W winds 10 kt. Seas 2 ft.\n.FRI NIGHT...S winds 10 kt. Seas 3 ft.\n.SAT...SE winds 20 kt. Seas 4 ft.\n.SAT NIGHT...W winds 20 kt. Seas 5 ft. Rain.\n.SUN...NW winds 10 kt. Seas 3 ft.\n.MON...SE winds 10 kt. Seas 2 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFNSB"
                    ],
                    "WMOidentifier": [
                        "FZAK51 PAFG 202348"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THURSDAY AFTERNOON"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.7298.250821T1300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.33eb7cfacc64b8b163f2eb208f252c34be52fc7a.001.1",
                "areaDesc": "Cape Thompson to Cape Beaufort out to 15 NM",
                "geocode": {
                    "SAME": [
                        "058811"
                    ],
                    "UGC": [
                        "PKZ811"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ811"
                ],
                "references": [],
                "sent": "2025-08-20T15:48:00-08:00",
                "effective": "2025-08-20T15:48:00-08:00",
                "onset": "2025-08-20T15:00:00-08:00",
                "expires": "2025-08-21T06:00:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Fairbanks AK",
                "headline": "Small Craft Advisory issued August 20 at 3:48PM AKDT until August 21 at 5:00PM AKDT by NWS Fairbanks AK",
                "description": "Arctic Alaska Coastal Waters out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent the average of the highest one-\nthird of the combined wind-wave and swell height.\n\n.TONIGHT...S winds 30 kt. Seas 8 ft. Rain.\n.THU...N winds 25 kt. Seas 4 ft.\n.THU NIGHT...NW winds 10 kt. Seas 3 ft.\n.FRI...SW winds 10 kt. Seas 3 ft.\n.FRI NIGHT...SE winds 15 kt. Seas 3 ft. Rain.\n.SAT...NE winds 15 kt. Seas 6 ft. Rain.\n.SAT NIGHT...N winds 15 kt. Seas 5 ft.\n.SUN...N winds 15 kt. Seas 5 ft.\n.MON...N winds 20 kt. Seas 5 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFNSB"
                    ],
                    "WMOidentifier": [
                        "FZAK51 PAFG 202348"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY IN EFFECT THROUGH THURSDAY MORNING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFG.SC.Y.7291.250820T2300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.022.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.022.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.022.1",
                "areaDesc": "Seguam to Adak Bering Side from 15 to 85 NM",
                "geocode": {
                    "SAME": [
                        "058781"
                    ],
                    "UGC": [
                        "PKZ781"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ781"
                ],
                "references": [],
                "sent": "2025-08-20T15:46:00-08:00",
                "effective": "2025-08-20T15:46:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-21T04:30:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 3:46PM AKDT until August 21 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...S wind 20 kt. Seas 6 ft. Areas of fog.\n.THU...SW wind 25 kt. Seas 6 ft. Areas of fog. Rain showers. Isolated\nthunderstorms.\n.THU NIGHT...SW wind 20 kt. Seas 6 ft. Areas of fog.\n.FRI...SW wind 25 kt. Seas 7 ft.\n.FRI NIGHT...SW wind 20 kt. Seas 6 ft.\n.SAT THROUGH SUN...S wind 25 kt. Seas 7 ft.\n.MON...S wind 20 kt. Seas 8 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 202346"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.2876.250821T1300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.028.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.028.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.028.1",
                "areaDesc": "Kiska to Attu Pacific Side",
                "geocode": {
                    "SAME": [
                        "058787"
                    ],
                    "UGC": [
                        "PKZ787"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ787"
                ],
                "references": [],
                "sent": "2025-08-20T15:46:00-08:00",
                "effective": "2025-08-20T15:46:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T04:30:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Gale Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Gale Warning issued August 20 at 3:46PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...S wind 20 kt. Seas 6 ft. Areas of fog. Isolated\nthunderstorms.\n.THU...S wind 25 kt. Seas 10 ft. Areas of fog.\n.THU NIGHT...S wind 35 kt. Seas 13 ft.\n.FRI...S wind 35 kt. Seas 14 ft.\n.FRI NIGHT...S wind 25 kt. Seas 11 ft.\n.SAT...S wind 25 kt. Seas 10 ft.\n.SUN THROUGH MON...NW wind 15 kt. Seas 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 202346"
                    ],
                    "NWSheadline": [
                        "GALE WARNING THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.GL.W.2880.250822T0100Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "GLW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.027.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.027.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.027.1",
                "areaDesc": "Kiska to Attu Bering Side",
                "geocode": {
                    "SAME": [
                        "058786"
                    ],
                    "UGC": [
                        "PKZ786"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ786"
                ],
                "references": [],
                "sent": "2025-08-20T15:46:00-08:00",
                "effective": "2025-08-20T15:46:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T04:30:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Gale Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Gale Warning issued August 20 at 3:46PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...SE wind 20 kt. Seas 4 ft. Areas of fog. Isolated\nthunderstorms.\n.THU...S wind 25 kt. Seas 8 ft. Isolated thunderstorms E of Shemya in\nthe morning.\n.THU NIGHT...S wind 30 kt increasing to 40 kt after midnight. Seas\n12 ft.\n.FRI...SW wind 35 kt. Seas 15 ft.\n.FRI NIGHT...S wind 25 kt. Seas 10 ft.\n.SAT...S wind 25 kt. Seas 9 ft.\n.SUN...W wind 15 kt. Seas 5 ft.\n.MON...NW wind 20 kt. Seas 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 202346"
                    ],
                    "NWSheadline": [
                        "GALE WARNING THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.GL.W.2879.250822T0100Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "GLW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.036.2",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.036.2",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.036.2",
                "areaDesc": "Saint Matthew Island Waters",
                "geocode": {
                    "SAME": [
                        "058767"
                    ],
                    "UGC": [
                        "PKZ767"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ767"
                ],
                "references": [],
                "sent": "2025-08-20T15:46:00-08:00",
                "effective": "2025-08-20T15:46:00-08:00",
                "onset": "2025-08-21T17:00:00-08:00",
                "expires": "2025-08-21T04:30:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 3:46PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...SW wind 25 kt. Seas 9 ft. Areas of fog.\n.THU...SW wind 20 kt. Seas 7 ft. Areas of fog.\n.THU NIGHT...S wind 15 kt E of Saint Matthew Island... S 25 kt W\nof Saint Matthew Island. Seas 6 ft.\n.FRI AND FRI NIGHT...SW wind 30 kt. Seas 11 ft.\n.SAT...S wind 25 kt. Seas 10 ft.\n.SUN...S wind 15 kt. Seas 8 ft.\n.MON...NE wind 15 kt. Seas 8 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 202346"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY TONIGHT AND THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.2884.250822T0100Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.026.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.026.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.026.1",
                "areaDesc": "Adak to Kiska Pacific Side",
                "geocode": {
                    "SAME": [
                        "058785"
                    ],
                    "UGC": [
                        "PKZ785"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ785"
                ],
                "references": [],
                "sent": "2025-08-20T15:46:00-08:00",
                "effective": "2025-08-20T15:46:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-21T04:30:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 3:46PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...S wind 20 kt. Seas 6 ft. Areas of fog. Isolated\nthunderstorms.\n.THU...SW wind 25 kt. Seas 8 ft. Areas of fog.\n.THU NIGHT...SW wind 25 kt. Seas 8 ft. Areas of fog.\n.FRI...SW wind 30 kt. Seas 8 ft.\n.FRI NIGHT...S wind 25 kt. Seas 9 ft.\n.SAT THROUGH SUN...S wind 25 kt. Seas 9 ft.\n.MON...SW wind 15 kt. Seas 9 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 202346"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY AND THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.2878.250821T1300Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.025.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.025.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.ba7bdf65883662e12700cc969d8d722e91896d31.025.1",
                "areaDesc": "Adak to Kiska Bering Side",
                "geocode": {
                    "SAME": [
                        "058784"
                    ],
                    "UGC": [
                        "PKZ784"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ784"
                ],
                "references": [],
                "sent": "2025-08-20T15:46:00-08:00",
                "effective": "2025-08-20T15:46:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-21T04:30:00-08:00",
                "ends": "2025-08-22T05:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 3:46PM AKDT until August 22 at 5:00AM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TONIGHT...S wind 20 kt. Seas 6 ft. Rain. Isolated Thunderstorms.\n.THU...SW wind 25 kt. Seas 7 ft. Areas of fog. Isolated\nthunderstorms in the morning.\n.THU NIGHT...SW wind 25 kt. Seas 8 ft. Areas of fog.\n.FRI...SW wind 30 kt. Seas 9 ft.\n.FRI NIGHT...S wind 25 kt. Seas 9 ft.\n.SAT...S wind 25 kt. Seas 8 ft.\n.SUN...S wind 20 kt. Seas 6 ft.\n.MON...Variable wind 10 kt. Seas 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 202346"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY AND THURSDAY NIGHT"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.2877.250821T1300Z-250822T1300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T05:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.951ae6bb4250f981a5d45720c394d7e2aa18ab2e.005.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.951ae6bb4250f981a5d45720c394d7e2aa18ab2e.005.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.951ae6bb4250f981a5d45720c394d7e2aa18ab2e.005.1",
                "areaDesc": "Cape Decision to Cape Edgecumbe from 15 to 80 NM",
                "geocode": {
                    "SAME": [
                        "058662"
                    ],
                    "UGC": [
                        "PKZ662"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ662"
                ],
                "references": [],
                "sent": "2025-08-20T13:37:00-08:00",
                "effective": "2025-08-20T13:37:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-21T07:45:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Juneau AK",
                "headline": "Small Craft Advisory issued August 20 at 1:37PM AKDT until August 21 at 5:00PM AKDT by NWS Juneau AK",
                "description": "Southeast Alaska Coastal Waters from Dixon Entrance to\nCape Suckling out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Seas forecasts represent the average of the highest\none-third of the combined windwave and swell height.\n\n.TONIGHT...SE wind 15 kt. Seas 5 ft.\n.THU...SE wind 25 kt. Seas 7 ft.\n.THU NIGHT...E wind 25 kt. Seas 8 ft. Rain late.\n.FRI...E wind 25 kt. Seas 7 ft. Rain.\n.FRI NIGHT...SE wind 20 kt. Seas 6 ft.\n.SAT...SE wind 10 kt. Seas 4 ft.\n.SUN...NW wind 15 kt. Seas 4 ft.\n.MON...NW wind 15 kt. Seas 4 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFAEG"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAJK 202137"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAJK.SC.Y.1533.250821T1300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.951ae6bb4250f981a5d45720c394d7e2aa18ab2e.003.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.951ae6bb4250f981a5d45720c394d7e2aa18ab2e.003.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.951ae6bb4250f981a5d45720c394d7e2aa18ab2e.003.1",
                "areaDesc": "Dixon Entrance to Cape Decision from 15 to 90 NM",
                "geocode": {
                    "SAME": [
                        "058661"
                    ],
                    "UGC": [
                        "PKZ661"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ661"
                ],
                "references": [],
                "sent": "2025-08-20T13:37:00-08:00",
                "effective": "2025-08-20T13:37:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-21T07:45:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Juneau AK",
                "headline": "Small Craft Advisory issued August 20 at 1:37PM AKDT until August 21 at 5:00PM AKDT by NWS Juneau AK",
                "description": "Southeast Alaska Coastal Waters from Dixon Entrance to\nCape Suckling out 100 NM\n\nWind forecasts reflect the predominant speed and direction\nexpected. Seas forecasts represent the average of the highest\none-third of the combined windwave and swell height.\n\n.TONIGHT...SE wind 15 kt. Seas 5 ft.\n.THU...SE wind 25 kt. Seas 7 ft.\n.THU NIGHT...SE wind 25 kt. Seas 8 ft. Rain late.\n.FRI...SE wind 20 kt. Seas 7 ft. Rain.\n.FRI NIGHT...SE wind 15 kt. Seas 5 ft.\n.SAT...SE wind 10 kt. Seas 4 ft.\n.SUN...NW wind 15 kt. Seas 4 ft.\n.MON...NW wind 15 kt. Seas 4 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFAEG"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAJK 202137"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAJK.SC.Y.1532.250821T1300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9d91c9c47cd76a157f3d9f4a48ebbd4d655535f6.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9d91c9c47cd76a157f3d9f4a48ebbd4d655535f6.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.9d91c9c47cd76a157f3d9f4a48ebbd4d655535f6.001.1",
                "areaDesc": "Lower Columbia Basin of Oregon; Warm Springs Reservation",
                "geocode": {
                    "SAME": [
                        "041021",
                        "041031",
                        "041049",
                        "041055",
                        "041059",
                        "041065",
                        "041069",
                        "041005",
                        "041047"
                    ],
                    "UGC": [
                        "ORZ691",
                        "ORZ703"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/fire/ORZ691",
                    "https://api.weather.gov/zones/fire/ORZ703"
                ],
                "references": [],
                "sent": "2025-08-20T14:10:00-07:00",
                "effective": "2025-08-20T14:10:00-07:00",
                "onset": "2025-08-22T14:00:00-07:00",
                "expires": "2025-08-21T14:00:00-07:00",
                "ends": "2025-08-22T23:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Possible",
                "urgency": "Future",
                "event": "Fire Weather Watch",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Pendleton OR",
                "headline": "Fire Weather Watch issued August 20 at 2:10PM PDT until August 22 at 11:00PM PDT by NWS Pendleton OR",
                "description": "...LOCALLY BREEZY WITH LOW RELATIVE HUMIDITY FRIDAY...\n\n.Locally breezy with low relative humidity Friday afternoon and\nevening in portions of central and north-central Oregon.\n\nThe National Weather Service in Pendleton has issued a Fire\nWeather Watch for wind and low relative humidity, which is in\neffect from Friday afternoon through Friday evening.\n\n* AFFECTED AREA...Fire Weather Zones 691 Lower Columbia Basin of\nOregon and 703 Warm Springs Reservation.\n\n* TIMING...From Friday afternoon through Friday evening.\n\n* WINDS...Northeast 10 to 15 mph with gusts up to 25 mph.\n\n* RELATIVE HUMIDITY...As low as 10 percent.\n\n* IMPACTS...Any fire that develops will catch and spread\nquickly. Outdoor burning is not recommended.",
                "instruction": "A Fire Weather Watch means that critical fire weather conditions\nare forecast to occur. Listen for later forecasts and possible\nRed Flag Warnings.",
                "response": "Prepare",
                "parameters": {
                    "AWIPSidentifier": [
                        "RFWPDT"
                    ],
                    "WMOidentifier": [
                        "WWUS86 KPDT 202110"
                    ],
                    "NWSheadline": [
                        "FIRE WEATHER WATCH IN EFFECT FROM FRIDAY AFTERNOON THROUGH FRIDAY EVENING FOR WIND AND LOW RELATIVE HUMIDITY FOR FIRE WEATHER ZONES OR691 AND OR703"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KPDT.FW.A.0010.250822T2100Z-250823T0600Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-22T23:00:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "FWA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.789ac70e4fe8260ebcd6dd10a8cca438f08d91c0.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.789ac70e4fe8260ebcd6dd10a8cca438f08d91c0.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.789ac70e4fe8260ebcd6dd10a8cca438f08d91c0.001.1",
                "areaDesc": "Eastern Columbia River Gorge of Oregon; Lower Columbia Basin of Oregon; Foothills of the Northern Blue Mountains of Oregon; Foothills of the Southern Blue Mountains of Oregon; North Central Oregon; Eastern Columbia River Gorge of Washington; Kittitas Valley; Yakima Valley; Lower Columbia Basin of Washington; Foothills of the Blue Mountains of Washington; Simcoe Highlands; Lower Slopes of the Eastern Washington Cascades Crest",
                "geocode": {
                    "SAME": [
                        "041021",
                        "041055",
                        "041065",
                        "041049",
                        "041059",
                        "041069",
                        "053039",
                        "053037",
                        "053077",
                        "053005",
                        "053021",
                        "053071",
                        "053013"
                    ],
                    "UGC": [
                        "ORZ041",
                        "ORZ044",
                        "ORZ507",
                        "ORZ508",
                        "ORZ510",
                        "WAZ024",
                        "WAZ026",
                        "WAZ027",
                        "WAZ028",
                        "WAZ029",
                        "WAZ521",
                        "WAZ523"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/ORZ041",
                    "https://api.weather.gov/zones/forecast/ORZ044",
                    "https://api.weather.gov/zones/forecast/ORZ507",
                    "https://api.weather.gov/zones/forecast/ORZ508",
                    "https://api.weather.gov/zones/forecast/ORZ510",
                    "https://api.weather.gov/zones/forecast/WAZ024",
                    "https://api.weather.gov/zones/forecast/WAZ026",
                    "https://api.weather.gov/zones/forecast/WAZ027",
                    "https://api.weather.gov/zones/forecast/WAZ028",
                    "https://api.weather.gov/zones/forecast/WAZ029",
                    "https://api.weather.gov/zones/forecast/WAZ521",
                    "https://api.weather.gov/zones/forecast/WAZ523"
                ],
                "references": [],
                "sent": "2025-08-20T13:59:00-07:00",
                "effective": "2025-08-20T13:59:00-07:00",
                "onset": "2025-08-23T12:00:00-07:00",
                "expires": "2025-08-21T14:00:00-07:00",
                "ends": "2025-08-26T21:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Likely",
                "urgency": "Future",
                "event": "Extreme Heat Watch",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Pendleton OR",
                "headline": "Extreme Heat Watch issued August 20 at 1:59PM PDT until August 26 at 9:00PM PDT by NWS Pendleton OR",
                "description": "* WHAT...Dangerously hot conditions with high temperatures of 95 to\n105 degrees possible. This will pose a major to extreme risk of\nheat-related illness.\n\n* WHERE...Portions of north central and northeast Oregon and\ncentral, south central, and southeast Washington.\n\n* WHEN...From Saturday afternoon through Tuesday evening.\n\n* IMPACTS...Heat related illnesses increase significantly during\nextreme heat events. Extreme heat will significantly increase the\nrisk of heat-related illnesses for much of the population,\nespecially those who are heat sensitive and those without\neffective cooling or adequate hydration.",
                "instruction": "Monitor the latest forecasts and warnings for updates on this\nsituation. Be prepared to drink plenty of fluids, stay in an\nair-conditioned room, stay out of the sun, and check up on relatives\nand neighbors.\n\nYoung children and pets should never be left unattended in vehicles\nunder any circumstances. This is especially true during warm or hot\nweather when car interiors can reach lethal temperatures in a matter\nof minutes.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "NPWPDT"
                    ],
                    "WMOidentifier": [
                        "WWUS76 KPDT 202059"
                    ],
                    "NWSheadline": [
                        "EXTREME HEAT WATCH IN EFFECT FROM SATURDAY AFTERNOON THROUGH TUESDAY EVENING"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KPDT.XH.A.0003.250823T1900Z-250827T0400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-26T21:00:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "XHA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.00b1ed4455de9e0aa506241acf2611161c705737.001.2",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.00b1ed4455de9e0aa506241acf2611161c705737.001.2",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.00b1ed4455de9e0aa506241acf2611161c705737.001.2",
                "areaDesc": "Southern Willamette Valley",
                "geocode": {
                    "SAME": [
                        "041003",
                        "041039",
                        "041043",
                        "041047",
                        "041053"
                    ],
                    "UGC": [
                        "ORZ685"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/fire/ORZ685"
                ],
                "references": [],
                "sent": "2025-08-20T13:12:00-07:00",
                "effective": "2025-08-20T13:12:00-07:00",
                "onset": "2025-08-21T14:00:00-07:00",
                "expires": "2025-08-21T16:00:00-07:00",
                "ends": "2025-08-21T20:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Red Flag Warning",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Portland OR",
                "headline": "Red Flag Warning issued August 20 at 1:12PM PDT until August 21 at 8:00PM PDT by NWS Portland OR",
                "description": "The National Weather Service in Portland has issued a Red Flag\nWarning for wind and low relative humidity, which is in effect\nfrom 2 PM to 8 PM PDT Thursday. The Fire Weather Watch is no\nlonger in effect.\n\n* AFFECTED AREA...In Oregon, Fire Weather Zone 685 Southern\nWillamette Valley.\n\n* WINDS...North 10 to 15 mph with gusts up to 25 mph.\n\n* RELATIVE HUMIDITY...As low as 15-25 percent.\n\n* IMPACTS...Conditions may be favorable for rapid fire spread\nwhich may threaten life and property. Use extra caution with\npotential ignition sources, especially in grassy areas.\nOutdoor burning is not recommended.",
                "instruction": "A Red Flag Warning means that critical fire weather conditions\nare either occurring now, or will shortly. A combination of the\nabove conditions can contribute to extreme fire behavior.",
                "response": "Prepare",
                "parameters": {
                    "AWIPSidentifier": [
                        "RFWPQR"
                    ],
                    "WMOidentifier": [
                        "WWUS86 KPQR 202012"
                    ],
                    "NWSheadline": [
                        "RED FLAG WARNING IN EFFECT FROM 2 PM TO 8 PM PDT THURSDAY FOR WIND AND LOW RELATIVE HUMIDITY FOR FIRE WEATHER ZONE 685"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.KPQR.FW.W.0002.250821T2100Z-250822T0300Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T20:00:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "FWW"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.05653aa90b6a07b770e49421b16b09789490ec3c.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.05653aa90b6a07b770e49421b16b09789490ec3c.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.05653aa90b6a07b770e49421b16b09789490ec3c.001.1",
                "areaDesc": "Southwest Bighorn Basin; Southeast Bighorn Basin; Owl Creek and Bridger Mountains; Wind River Basin",
                "geocode": {
                    "SAME": [
                        "056017",
                        "056043",
                        "056013",
                        "056025"
                    ],
                    "UGC": [
                        "WYZ005",
                        "WYZ006",
                        "WYZ007",
                        "WYZ017"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/WYZ005",
                    "https://api.weather.gov/zones/forecast/WYZ006",
                    "https://api.weather.gov/zones/forecast/WYZ007",
                    "https://api.weather.gov/zones/forecast/WYZ017"
                ],
                "references": [],
                "sent": "2025-08-20T12:58:00-06:00",
                "effective": "2025-08-20T12:58:00-06:00",
                "onset": "2025-08-20T12:58:00-06:00",
                "expires": "2025-08-21T13:00:00-06:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Riverton WY",
                "headline": "Air Quality Alert issued August 20 at 12:58PM MDT by NWS Riverton WY",
                "description": "The following message is transmitted on behalf of the Wyoming\nDepartment of Environmental Quality, Air Quality Division, and the\nWyoming Department of Health.\n\n* WHAT...Air Quality Alert for Wildfire Smoke.\n\n* WHERE...Portions of the Bighorn Basin, Owl Creek and Bridger\nMountains, and the Wind River Basin.\n\n* WHEN...Through 1 PM Thursday, August 21.\n\n* IMPACTS...Smoke from various wildfires across the region, including\nthe Red Canyon Fire, will continue to spread across the region\ntoday and overnight tonight.\n\nHEALTH INFORMATION...The Wyoming Department of Health recommends\nthat the elderly, young children, and individuals with respiratory\nproblems avoid excessive physical exertion and minimize outdoor\nactivities during this time. Wildfire smoke is made up of a variety\nof pollutants, including particulate matter and ozone, which can\ncause respiratory health effects. Although these people are most\nsusceptible to health impacts, the Department of Health also advises\nthat everyone should avoid prolonged exposure to poor air quality\nconditions.\n\nCURRENT CONDITIONS...The Wyoming Department of Environmental\nQuality, Air Quality Division offers near real-time air quality data\nfor Wyoming's monitoring stations and health effects information to\nhelp the public interpret current conditions. Current air quality\nconditions across the state of Wyoming can be found at\nhttp://www.wyvisnet.com/.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQARIW"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KRIW 201858"
                    ],
                    "NWSheadline": [
                        "AIR QUALITY ALERT IN EFFECT UNTIL 1 PM MDT THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7a7b9c3c27f52423b35e7577eef18c921ffc8f98.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.7a7b9c3c27f52423b35e7577eef18c921ffc8f98.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.7a7b9c3c27f52423b35e7577eef18c921ffc8f98.001.1",
                "areaDesc": "Maricopa, AZ",
                "geocode": {
                    "SAME": [
                        "004013"
                    ],
                    "UGC": [
                        "AZC013"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/county/AZC013"
                ],
                "references": [],
                "sent": "2025-08-20T08:35:00-07:00",
                "effective": "2025-08-20T08:35:00-07:00",
                "onset": "2025-08-20T08:35:00-07:00",
                "expires": "2025-08-21T21:00:00-07:00",
                "ends": null,
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Unknown",
                "certainty": "Unknown",
                "urgency": "Unknown",
                "event": "Air Quality Alert",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Phoenix AZ",
                "headline": "Air Quality Alert issued August 20 at 8:35AM MST by NWS Phoenix AZ",
                "description": "AQAPSR\n\nThe Arizona Department of Environmental Quality (ADEQ) has issued an\nOzone High Pollution Advisory for the Phoenix Metro Area on\nThursday.\n\nThis means that forecast weather conditions combined with existing\nozone levels are expected to result in local maximum 8-hour ozone\nconcentrations that pose a health risk. Adverse health effects\nincrease as air quality deteriorates.\n\nOzone is an air contaminant which can cause breathing difficulties\nfor children, older adults, as well as persons with respiratory\nproblems. A decrease in physical activity is recommended.\n\nYou are urged to car pool, telecommute or use mass transit.\nThe use of gasoline-powered equipment should be reduced or done late\nin the day.\n\nFor details on this High Pollution Advisory, visit the ADEQ internet\nsite at www.azdeq.gov/forecast/phoenix or call 602-771-2300.",
                "instruction": null,
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "AQAPSR"
                    ],
                    "WMOidentifier": [
                        "AEUS75 KPSR 201535"
                    ],
                    "NWSheadline": [
                        "OZONE HIGH POLLUTION ADVISORY FOR MARICOPA COUNTY INCLUDING THE PHOENIX METRO AREA THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "AQA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.370f0391c63b53cd23bcbfcc12fb0309de56406d.019.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.370f0391c63b53cd23bcbfcc12fb0309de56406d.019.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.370f0391c63b53cd23bcbfcc12fb0309de56406d.019.1",
                "areaDesc": "Marmot Island To Sitkinak from 15 to 85 NM",
                "geocode": {
                    "SAME": [
                        "058734"
                    ],
                    "UGC": [
                        "PKZ734"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ734"
                ],
                "references": [],
                "sent": "2025-08-20T03:54:00-08:00",
                "effective": "2025-08-20T03:54:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-20T16:30:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 3:54AM AKDT until August 21 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for the Northern Gulf of Alaska Coast\nup to 100 nm out including Kodiak Island and Cook Inlet.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...NE wind 15 kt. Seas 4 ft.\n.TONIGHT...NE wind 20 kt. Seas 5 ft.\n.THU...NE wind 25 kt. Seas 7 ft.\n.THU NIGHT...NE wind 20 kt. Seas 8 ft.\n.FRI...N wind 25 kt. Seas 8 ft.\n.SAT...Variable wind 10 kt. Seas 5 ft.\n.SUN...SW wind 15 kt. Seas 4 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFAER"
                    ],
                    "WMOidentifier": [
                        "FZAK51 PAFC 201154"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.2506.250821T1300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.022.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.022.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.022.1",
                "areaDesc": "Seguam to Adak Bering Side from 15 to 85 NM",
                "geocode": {
                    "SAME": [
                        "058781"
                    ],
                    "UGC": [
                        "PKZ781"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ781"
                ],
                "references": [],
                "sent": "2025-08-20T03:31:00-08:00",
                "effective": "2025-08-20T03:31:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-20T16:30:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 3:31AM AKDT until August 21 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...S wind 15 kt. Seas 3 ft. Areas of fog.\n.TONIGHT...S wind 20 kt. Seas 6 ft. Areas of fog. Rain.\n.THU...SW wind 25 kt. Seas 6 ft. Areas of fog.\n.THU NIGHT...SW wind 20 kt. Seas 6 ft.\n.FRI...SW wind 25 kt. Seas 7 ft.\n.SAT THROUGH SUN...S wind 25 kt. Seas 7 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 201131"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.3164.250821T1300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.028.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.028.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.028.1",
                "areaDesc": "Kiska to Attu Pacific Side",
                "geocode": {
                    "SAME": [
                        "058787"
                    ],
                    "UGC": [
                        "PKZ787"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ787"
                ],
                "references": [],
                "sent": "2025-08-20T03:31:00-08:00",
                "effective": "2025-08-20T03:31:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-20T16:30:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 3:31AM AKDT until August 21 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...SE wind 15 kt. Seas 4 ft. Areas of fog.\n.TONIGHT...S wind 20 kt. Seas 6 ft. Areas of fog.\n.THU...S wind 25 kt. Seas 10 ft. Areas of fog.\n.THU NIGHT...S wind 35 kt. Seas 13 ft.\n.FRI...S wind 35 kt. Seas 14 ft.\n.SAT...S wind 25 kt. Seas 10 ft.\n.SUN...W wind 15 kt. Seas 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 201131"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.3168.250821T1300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.026.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.026.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.026.1",
                "areaDesc": "Adak to Kiska Pacific Side",
                "geocode": {
                    "SAME": [
                        "058785"
                    ],
                    "UGC": [
                        "PKZ785"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ785"
                ],
                "references": [],
                "sent": "2025-08-20T03:31:00-08:00",
                "effective": "2025-08-20T03:31:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-20T16:30:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 3:31AM AKDT until August 21 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...S wind 20 kt. Seas 4 ft. Areas of fog.\n.TONIGHT...S wind 20 kt. Seas 6 ft. Areas of fog.\n.THU...SW wind 25 kt. Seas 8 ft. Areas of fog.\n.THU NIGHT...SW wind 25 kt. Seas 8 ft.\n.FRI...S wind 30 kt. Seas 9 ft.\n.SAT THROUGH SUN...S wind 25 kt. Seas 9 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 201131"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.3166.250821T1300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.027.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.027.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.027.1",
                "areaDesc": "Kiska to Attu Bering Side",
                "geocode": {
                    "SAME": [
                        "058786"
                    ],
                    "UGC": [
                        "PKZ786"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ786"
                ],
                "references": [],
                "sent": "2025-08-20T03:31:00-08:00",
                "effective": "2025-08-20T03:31:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-20T16:30:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 3:31AM AKDT until August 21 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...S wind 15 kt. Seas 3 ft. Areas of fog.\n.TONIGHT...S wind 15 kt. Seas 4 ft. Areas of fog.\n.THU...S wind 25 kt. Seas 8 ft. Areas of fog.\n.THU NIGHT...S wind 35 kt. Seas 12 ft.\n.FRI...S wind 35 kt. Seas 15 ft.\n.SAT...S wind 25 kt. Seas 9 ft.\n.SUN...W wind 15 kt. Seas 5 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 201131"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.3167.250821T1300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.025.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.025.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.3c1186aa8e871aaca286b4c56462b046d6704d8d.025.1",
                "areaDesc": "Adak to Kiska Bering Side",
                "geocode": {
                    "SAME": [
                        "058784"
                    ],
                    "UGC": [
                        "PKZ784"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/PKZ784"
                ],
                "references": [],
                "sent": "2025-08-20T03:31:00-08:00",
                "effective": "2025-08-20T03:31:00-08:00",
                "onset": "2025-08-21T05:00:00-08:00",
                "expires": "2025-08-20T16:30:00-08:00",
                "ends": "2025-08-21T17:00:00-08:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Anchorage AK",
                "headline": "Small Craft Advisory issued August 20 at 3:31AM AKDT until August 21 at 5:00PM AKDT by NWS Anchorage AK",
                "description": "Coastal Waters Forecast for Southwest Alaska+Bristol Bay+The\nAlaska Peninsula Waters and the Aleutian Islands up to 100 nm out.\n\nWind forecasts reflect the predominant speed and direction\nexpected. Sea forecasts represent an average of the highest\none-third of the combined wind wave and swell height.\n\n.TODAY...S wind 15 kt. Seas 3 ft. Areas of fog.\n.TONIGHT...S wind 20 kt. Seas 6 ft. Areas of fog. Rain.\n.THU...SW wind 25 kt. Seas 7 ft. Areas of fog.\n.THU NIGHT...SW wind 25 kt. Seas 8 ft.\n.FRI...S wind 30 kt. Seas 9 ft.\n.SAT...S wind 25 kt. Seas 8 ft.\n.SUN...S wind 20 kt. Seas 6 ft.",
                "instruction": null,
                "response": "Avoid",
                "parameters": {
                    "AWIPSidentifier": [
                        "CWFALU"
                    ],
                    "WMOidentifier": [
                        "FZAK52 PAFC 201131"
                    ],
                    "NWSheadline": [
                        "SMALL CRAFT ADVISORY THURSDAY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.NEW.PAFC.SC.Y.3165.250821T1300Z-250822T0100Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-21T17:00:00-08:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9fd5c7ae98cdfa39376038fcc1771488cbd0cbe6.001.1",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.9fd5c7ae98cdfa39376038fcc1771488cbd0cbe6.001.1",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.9fd5c7ae98cdfa39376038fcc1771488cbd0cbe6.001.1",
                "areaDesc": "Fort Tejon",
                "geocode": {
                    "SAME": [
                        "006029"
                    ],
                    "UGC": [
                        "CAZ597"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/fire/CAZ597"
                ],
                "references": [],
                "sent": "2025-08-19T14:44:00-07:00",
                "effective": "2025-08-19T14:44:00-07:00",
                "onset": "2025-08-20T09:00:00-07:00",
                "expires": "2025-08-19T14:59:33-07:00",
                "ends": "2025-08-23T21:00:00-07:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Severe",
                "certainty": "Observed",
                "urgency": "Past",
                "event": "Fire Weather Watch",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Hanford CA",
                "headline": "The Fire Weather Watch has been replaced. Please see the latest information from NWS Hanford CA on this developing situation.",
                "description": "The Fire Weather Watch has been replaced. Please see the latest information from NWS Hanford CA on this developing situation.",
                "instruction": "A Red Flag Warning means that critical fire weather conditions\nare either occurring now, or will shortly. A combination of\nstrong winds, low relative humidity, and warm temperatures can\ncontribute to extreme fire behavior.",
                "response": "Monitor",
                "parameters": {
                    "AWIPSidentifier": [
                        "RFWHNX"
                    ],
                    "WMOidentifier": [
                        "WWUS86 KHNX 192144"
                    ],
                    "NWSheadline": [
                        "RED FLAG WARNING IN EFFECT FROM 9 AM WEDNESDAY TO 9 PM PDT SATURDAY FOR LOW HUMIDITY AND LOCALLY BREEZY WINDS FOR THE FRAZIER PARK AND GRAPEVINE AREAS IN KERN COUNTY"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.UPG.KHNX.FW.A.0002.250820T1600Z-250824T0400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T21:00:00-07:00"
                    ],
                    "expiredReferences": [
                        "w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.f7cabc320ba93086acbcd7e60eac583eeb367c2e.001.1,2025-08-19T06:41:00-07:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.92f10d39d836b2e06605b163e7a4d62dde85f791.001.1,2025-08-18T19:50:00-07:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.2a855483be86f420ba34f58eaac40af6121286c7.001.1,2025-08-18T11:52:00-07:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "FWA"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2eb6ebb0475bff4b47a0884b1fdfcf393044705e.001.2",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2eb6ebb0475bff4b47a0884b1fdfcf393044705e.001.2",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.2eb6ebb0475bff4b47a0884b1fdfcf393044705e.001.2",
                "areaDesc": "S of Currituck Beach Light NC to Oregon Inlet NC out to 20 nm",
                "geocode": {
                    "SAME": [
                        "075150"
                    ],
                    "UGC": [
                        "AMZ150"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/AMZ150"
                ],
                "references": [],
                "sent": "2025-08-18T16:52:00-04:00",
                "effective": "2025-08-18T16:52:00-04:00",
                "onset": "2025-08-19T02:00:00-04:00",
                "expires": "2025-08-18T17:08:10-04:00",
                "ends": "2025-08-23T00:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Observed",
                "urgency": "Past",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Newport/Morehead City NC",
                "headline": "The Small Craft Advisory has been cancelled.",
                "description": "The Small Craft Advisory has been cancelled and is no longer in effect.",
                "instruction": "Mariners should consider altering plans to avoid possible\nhazardous conditions. Remain in port, seek safe harbor, alter\ncourse, and/or secure the vessel for severe wind and seas.",
                "response": "AllClear",
                "parameters": {
                    "AWIPSidentifier": [
                        "MWWMHX"
                    ],
                    "WMOidentifier": [
                        "WHUS72 KMHX 182052"
                    ],
                    "NWSheadline": [
                        "TROPICAL STORM WATCH IN EFFECT... ...SMALL CRAFT ADVISORY IS CANCELLED"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.CAN.KMHX.SC.Y.0066.250819T0600Z-250823T0400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T00:00:00-04:00"
                    ],
                    "expiredReferences": [
                        "w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5f13937d2bfd0c5375ed12a1f114b70e73d0be7e.003.1,2025-08-18T03:26:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7644815c67ec23799f8f5930f06149959251009f.003.1,2025-08-17T20:12:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.262c493f6a373f7906ef4c94c4ac3269a9da0c3c.003.1,2025-08-17T14:03:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2eb6ebb0475bff4b47a0884b1fdfcf393044705e.002.2",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/urn:oid:2.49.0.1.840.0.2eb6ebb0475bff4b47a0884b1fdfcf393044705e.002.2",
                "@type": "wx:Alert",
                "id": "urn:oid:2.49.0.1.840.0.2eb6ebb0475bff4b47a0884b1fdfcf393044705e.002.2",
                "areaDesc": "S of Oregon Inlet NC to Cape Hatteras NC out to 20 nm; S of Cape Hatteras NC to Ocracoke Inlet NC out to 20 nm; S of Ocracoke Inlet NC to Cape Lookout NC out to 20 nm; S of Cape Lookout NC to Surf City NC out to 20 nm",
                "geocode": {
                    "SAME": [
                        "075152",
                        "075154",
                        "075156",
                        "075158"
                    ],
                    "UGC": [
                        "AMZ152",
                        "AMZ154",
                        "AMZ156",
                        "AMZ158"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/AMZ152",
                    "https://api.weather.gov/zones/forecast/AMZ154",
                    "https://api.weather.gov/zones/forecast/AMZ156",
                    "https://api.weather.gov/zones/forecast/AMZ158"
                ],
                "references": [],
                "sent": "2025-08-18T16:52:00-04:00",
                "effective": "2025-08-18T16:52:00-04:00",
                "onset": "2025-08-18T20:00:00-04:00",
                "expires": "2025-08-18T17:08:10-04:00",
                "ends": "2025-08-23T00:00:00-04:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Minor",
                "certainty": "Observed",
                "urgency": "Past",
                "event": "Small Craft Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Newport/Morehead City NC",
                "headline": "The Small Craft Advisory has been cancelled.",
                "description": "The Small Craft Advisory has been cancelled and is no longer in effect.",
                "instruction": "Mariners should consider altering plans to avoid possible\nhazardous conditions. Remain in port, seek safe harbor, alter\ncourse, and/or secure the vessel for severe wind and seas.",
                "response": "AllClear",
                "parameters": {
                    "AWIPSidentifier": [
                        "MWWMHX"
                    ],
                    "WMOidentifier": [
                        "WHUS72 KMHX 182052"
                    ],
                    "NWSheadline": [
                        "TROPICAL STORM WATCH IN EFFECT... ...SMALL CRAFT ADVISORY IS CANCELLED"
                    ],
                    "BLOCKCHANNEL": [
                        "EAS",
                        "NWEM",
                        "CMAS"
                    ],
                    "VTEC": [
                        "/O.CAN.KMHX.SC.Y.0066.250819T0000Z-250823T0400Z/"
                    ],
                    "eventEndingTime": [
                        "2025-08-23T00:00:00-04:00"
                    ],
                    "expiredReferences": [
                        "w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5f13937d2bfd0c5375ed12a1f114b70e73d0be7e.002.1,2025-08-18T03:26:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.5f13937d2bfd0c5375ed12a1f114b70e73d0be7e.001.1,2025-08-18T03:26:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7644815c67ec23799f8f5930f06149959251009f.002.1,2025-08-17T20:12:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.7644815c67ec23799f8f5930f06149959251009f.001.1,2025-08-17T20:12:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.262c493f6a373f7906ef4c94c4ac3269a9da0c3c.002.1,2025-08-17T14:03:00-04:00 w-nws.webmaster@noaa.gov,urn:oid:2.49.0.1.840.0.262c493f6a373f7906ef4c94c4ac3269a9da0c3c.001.1,2025-08-17T14:03:00-04:00"
                    ]
                },
                "scope": "Public",
                "code": "IPAWSv1.0",
                "language": "en-US",
                "web": "http://www.weather.gov",
                "eventCode": {
                    "SAME": [
                        "NWS"
                    ],
                    "NationalWeatherService": [
                        "SCY"
                    ]
                }
            }
        }
    ],
    "title": "Current watches, warnings, and advisories",
    "updated": "2025-08-21T18:11:15+00:00"
};

export async function insertMockAlert() {
  await db.datasets.put({
    name: "flood-alerts",
    updatedAt: Date.now(),
    payload: mockFloodAlert,
  });
}
