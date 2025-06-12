/*
	This script is used to get users/teams list for arrays on user-selector.js

	Elastic request:
	GET /users/_search
	{
		"size": 9999,
		"_source": ["name", "teamId"],
		"query": {
			"match_all": {}
		}
	}
*/

const response = {
  "took": 19,
  "timed_out": false,
  "_shards": {
    "total": 1,
    "successful": 1,
    "skipped": 0,
    "failed": 0
  },
  "hits": {
    "total": {
      "value": 439,
      "relation": "eq"
    },
    "max_score": 1,
    "hits": [
      {
        "_index": "teams",
        "_id": "-NS4Mal6eV6EcN5jUwEJ",
        "_score": 1,
        "_source": {
          "name": "TCS Exhumation Services Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-MvaD7d204H2odzpY1Au",
        "_score": 1,
        "_source": {
          "name": "Team Taree"
        }
      },
      {
        "_index": "teams",
        "_id": "-Myx3y17I4I35W9pUnl4",
        "_score": 1,
        "_source": {
          "name": "Eminence AV"
        }
      },
      {
        "_index": "teams",
        "_id": "-NfHJ7AcqsBKBqTQ5NEE",
        "_score": 1,
        "_source": {
          "name": "Bibartis"
        }
      },
      {
        "_index": "teams",
        "_id": "-NLXoNx8-aM6oyENZ75v",
        "_score": 1,
        "_source": {
          "name": "Victoriaville & Co"
        }
      },
      {
        "_index": "teams",
        "_id": "-N7KkywfyXb4iUJ4I943",
        "_score": 1,
        "_source": {
          "name": "Swindon Memorials"
        }
      },
      {
        "_index": "teams",
        "_id": "-NklS-d3IEraOHrknH4S",
        "_score": 1,
        "_source": {
          "name": "Pool Consult"
        }
      },
      {
        "_index": "teams",
        "_id": "-KqeO7YKwBXL-xecRh4D",
        "_score": 1,
        "_source": {
          "name": "LT Solutions for FireHawk Funerals Corp."
        }
      },
      {
        "_index": "teams",
        "_id": "-MKnqNh1CV5t52ra0RfO",
        "_score": 1,
        "_source": {
          "name": "MOMENT"
        }
      },
      {
        "_index": "teams",
        "_id": "-Ldh0m53XXJ3RJaTDygG",
        "_score": 1,
        "_source": {
          "name": "Testing Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-LdkMONwvYodE-z7DJ_i",
        "_score": 1,
        "_source": {
          "name": "tt"
        }
      },
      {
        "_index": "teams",
        "_id": "-M1OZHR8mWO0uNAHSLF6",
        "_score": 1,
        "_source": {
          "name": "Caldon Group"
        }
      },
      {
        "_index": "teams",
        "_id": "-NK11D8MBEPvyy3bcL6F",
        "_score": 1,
        "_source": {
          "name": "ewrty"
        }
      },
      {
        "_index": "teams",
        "_id": "-LWNuSCtOOUETaxweeeR",
        "_score": 1,
        "_source": {
          "name": "Flamin Design"
        }
      },
      {
        "_index": "teams",
        "_id": "-Mdoshp3RNdgPVZ_mtOr",
        "_score": 1,
        "_source": {
          "name": "CPR Business Advisory Pty Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-Mn-j2m2qbNLTrlP3_yY",
        "_score": 1,
        "_source": {
          "name": "All’s Well"
        }
      },
      {
        "_index": "teams",
        "_id": "-MhlclKCtsXHP7ZhoERi",
        "_score": 1,
        "_source": {
          "name": "Rely On Us Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-NKTZZ67ef6nVRk3rx7F",
        "_score": 1,
        "_source": {
          "name": "Westmach Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-Ljo0p49T9GhhSaHWBUj",
        "_score": 1,
        "_source": {
          "name": "HOWSTHATHOUSE"
        }
      },
      {
        "_index": "teams",
        "_id": "-N2Kpc8ec-P_tPT54iei",
        "_score": 1,
        "_source": {
          "name": "geraldton funeral services"
        }
      },
      {
        "_index": "teams",
        "_id": "-N2KqF_EOZTXHO-amF8h",
        "_score": 1,
        "_source": {
          "name": "http geraldton "
        }
      },
      {
        "_index": "teams",
        "_id": "-NHXV7AlN7_-tNukvl3g",
        "_score": 1,
        "_source": {
          "name": "JND扶莉宋613286631"
        }
      },
      {
        "_index": "teams",
        "_id": "-MhkLSZD_GmjPP1-4TFf",
        "_score": 1,
        "_source": {
          "name": "Crossingham Maintenance Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-MhQQnuz_u6nY9jUigvA",
        "_score": 1,
        "_source": {
          "name": "Evergreen "
        }
      },
      {
        "_index": "teams",
        "_id": "-NCVAVnHZ0kHUHerTj7v",
        "_score": 1,
        "_source": {
          "name": "Jen Mason Photography"
        }
      },
      {
        "_index": "teams",
        "_id": "-MgmVYMzfjCaM_lr2Wm0",
        "_score": 1,
        "_source": {
          "name": "Hyqual"
        }
      },
      {
        "_index": "teams",
        "_id": "-NCaAbcIyhFW2uDZCPqW",
        "_score": 1,
        "_source": {
          "name": "Squeaky Cleaners"
        }
      },
      {
        "_index": "teams",
        "_id": "-NCa8W-YnKRmrhCdLXTg",
        "_score": 1,
        "_source": {
          "name": "Squeaky Cleaners"
        }
      },
      {
        "_index": "teams",
        "_id": "-LvnlXtYd0z8RNQNuJMM",
        "_score": 1,
        "_source": {
          "name": "CHG Intergrated Wealth"
        }
      },
      {
        "_index": "teams",
        "_id": "-NU6_I7a0iCG1u3SDvmP",
        "_score": 1,
        "_source": {
          "name": "Fred Starr"
        }
      },
      {
        "_index": "teams",
        "_id": "-LmmZX9-8J4dnQ7EXaQ4",
        "_score": 1,
        "_source": {
          "name": "mulqueenfamilyfunerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-L_GFFVzjwFePrf_0Rjj",
        "_score": 1,
        "_source": {
          "name": "Jack and Co"
        }
      },
      {
        "_index": "teams",
        "_id": "-LiulcCKHzDIGCZMPCDZ",
        "_score": 1,
        "_source": {
          "name": "Smokerite Ovens"
        }
      },
      {
        "_index": "teams",
        "_id": "-LXc0o6pxB3815LQQPlh",
        "_score": 1,
        "_source": {
          "name": "Hookd"
        }
      },
      {
        "_index": "teams",
        "_id": "-N2KZ6vcFELXXanYN5Oi",
        "_score": 1,
        "_source": {
          "name": "geraldtonfuneralservices"
        }
      },
      {
        "_index": "teams",
        "_id": "-NK7_TKZwBDeDVZZj_y_",
        "_score": 1,
        "_source": {
          "name": "Test 2"
        }
      },
      {
        "_index": "teams",
        "_id": "-NY_-eBFG-czDWYah-cZ",
        "_score": 1,
        "_source": {
          "name": "Test"
        }
      },
      {
        "_index": "teams",
        "_id": "-NcfjFkJxlvDRxQ7GAa",
        "_score": 1,
        "_source": {
          "name": null
        }
      },
      {
        "_index": "teams",
        "_id": "-NS5vEOdOxpHPD_gE3R5",
        "_score": 1,
        "_source": {
          "name": "Mazar Partners"
        }
      },
      {
        "_index": "teams",
        "_id": "-MhkKdJG8PMBobb2OD_x",
        "_score": 1,
        "_source": {
          "name": "Betts Plumbing and Gas"
        }
      },
      {
        "_index": "teams",
        "_id": "-N-TBGWyWyE_LD6shEkk",
        "_score": 1,
        "_source": {
          "name": "Commercial Ideas, LLC"
        }
      },
      {
        "_index": "teams",
        "_id": "-NWhSjM0Apm9hqhWRM6F",
        "_score": 1,
        "_source": {
          "name": "Olga Piehler"
        }
      },
      {
        "_index": "teams",
        "_id": "-NL_bZRxpGzCkEJn5gr4",
        "_score": 1,
        "_source": {
          "name": "Jan Field"
        }
      },
      {
        "_index": "teams",
        "_id": "-LdNFyebssLWjS2B9usV",
        "_score": 1,
        "_source": {
          "name": "Gather + Place"
        }
      },
      {
        "_index": "teams",
        "_id": "-MQpJmR-_mYoBSF51Ga_",
        "_score": 1,
        "_source": {
          "name": "Marc Foi"
        }
      },
      {
        "_index": "teams",
        "_id": "-KkmLiJkm7GmRf0gr6XC",
        "_score": 1,
        "_source": {
          "name": "Bee Kind Always"
        }
      },
      {
        "_index": "teams",
        "_id": "-NApFS2lVnqHNzuAk0N0",
        "_score": 1,
        "_source": {
          "name": "Funeral Success"
        }
      },
      {
        "_index": "teams",
        "_id": "-MFZ_G8w_vvafRV5wgZi",
        "_score": 1,
        "_source": {
          "name": "bevbomb"
        }
      },
      {
        "_index": "teams",
        "_id": "-N2KjQJoaFQnoCoFOnYs",
        "_score": 1,
        "_source": {
          "name": "geraldton funeral services"
        }
      },
      {
        "_index": "teams",
        "_id": "-MMIVg2xDIv5FBqr86dh",
        "_score": 1,
        "_source": {
          "name": "Cashmere & Co"
        }
      },
      {
        "_index": "teams",
        "_id": "-NRm607eaf2Jhrq3jZYx",
        "_score": 1,
        "_source": {
          "name": "Thdb"
        }
      },
      {
        "_index": "teams",
        "_id": "-NOSZrAe0NXqWIl6otuo",
        "_score": 1,
        "_source": {
          "name": "The Phat Wag"
        }
      },
      {
        "_index": "teams",
        "_id": "-MhkQlxdHlemMzC4b_R6",
        "_score": 1,
        "_source": {
          "name": "Generation Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-M_rrammjYjsmwG1GjH3",
        "_score": 1,
        "_source": {
          "name": "T J Scott and Son"
        }
      },
      {
        "_index": "teams",
        "_id": "-Ncar0_6HwxLJ1nPxZX-",
        "_score": 1,
        "_source": {
          "name": "Test"
        }
      },
      {
        "_index": "teams",
        "_id": "-NpAh3OYjV0yNy8VsBu9",
        "_score": 1,
        "_source": {
          "name": "ReelEstate Photography"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nl0nTiZYCti7GUUsYEk",
        "_score": 1,
        "_source": {
          "name": "Lonergan and Raven"
        }
      },
      {
        "_index": "teams",
        "_id": "-MKlVcsaMhGwOj4z_jxd",
        "_score": 1,
        "_source": {
          "name": "WaterCo Commercial"
        }
      },
      {
        "_index": "teams",
        "_id": "-M_d6z09xdM4x23uKfw7",
        "_score": 1,
        "_source": {
          "name": "First Nations Charles Sturt University"
        }
      },
      {
        "_index": "teams",
        "_id": "-MtjtbtraaPaT8Q3n4tm",
        "_score": 1,
        "_source": {
          "name": "Aboriginal Health & Medical Research Council of NSW"
        }
      },
      {
        "_index": "teams",
        "_id": "-NRaPXezM8iRmA4EGCrB",
        "_score": 1,
        "_source": {
          "name": "Willows"
        }
      },
      {
        "_index": "teams",
        "_id": "-M9LfOfvmzhBOw6g9hzY",
        "_score": 1,
        "_source": {
          "name": "Composite Pool Solutions"
        }
      },
      {
        "_index": "teams",
        "_id": "-MC4_dDA0dgZsH3Nxmen",
        "_score": 1,
        "_source": {
          "name": "Compass Pools Newcastle"
        }
      },
      {
        "_index": "teams",
        "_id": "-NQ7_IuRgnvN91GDkwaq",
        "_score": 1,
        "_source": {
          "name": "Newy Event Collective"
        }
      },
      {
        "_index": "teams",
        "_id": "-LhY7vqM_rHsSM7PeASK",
        "_score": 1,
        "_source": {
          "name": "The Shed Luxe"
        }
      },
      {
        "_index": "teams",
        "_id": "-LqYTCE4uK8GLi_Ah3Ec",
        "_score": 1,
        "_source": {
          "name": "Monkhouse"
        }
      },
      {
        "_index": "teams",
        "_id": "-MOEvDaiXPUss0ytwo9W",
        "_score": 1,
        "_source": {
          "name": "Foible Enterprises Pty Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-NtpgXRTBF2HSVgbHm0L",
        "_score": 1,
        "_source": {
          "name": "Beock and Visser"
        }
      },
      {
        "_index": "teams",
        "_id": "-NtqzPVhdAc0tohw-SoY",
        "_score": 1,
        "_source": {
          "name": "The Beautiful Home Company"
        }
      },
      {
        "_index": "teams",
        "_id": "-Mx74L8p5x8XSW0V5OkS",
        "_score": 1,
        "_source": {
          "name": "Higher Education"
        }
      },
      {
        "_index": "teams",
        "_id": "-M0zf4k9eMNDS3OGB3KP",
        "_score": 1,
        "_source": {
          "name": "Karen Lister"
        }
      },
      {
        "_index": "teams",
        "_id": "-KrcK9oxppZQr6EdCNYM",
        "_score": 1,
        "_source": {
          "name": "Foresters Financial"
        }
      },
      {
        "_index": "teams",
        "_id": "-MOdcb_Xvu1bAWFgqSS1",
        "_score": 1,
        "_source": {
          "name": "FireHawk Organisation Testing"
        }
      },
      {
        "_index": "teams",
        "_id": "-MncpXzjQkabDpP7hcPd",
        "_score": 1,
        "_source": {
          "name": "Firehawk Donations"
        }
      },
      {
        "_index": "teams",
        "_id": "-Mid3nUJqd5ae6-V2mBZ",
        "_score": 1,
        "_source": {
          "name": "MerindaJayne"
        }
      },
      {
        "_index": "teams",
        "_id": "-LALIUNjwrm1kDC2hUo8",
        "_score": 1,
        "_source": {
          "name": "ACME Pools"
        }
      },
      {
        "_index": "teams",
        "_id": "-NzizRytxzMmpuSK6V4P",
        "_score": 1,
        "_source": {
          "name": "Brampton Crematorium & Visitation Centre"
        }
      },
      {
        "_index": "teams",
        "_id": "-MjYV58PNgUULfA8Q5iL",
        "_score": 1,
        "_source": {
          "name": "Elite"
        }
      },
      {
        "_index": "teams",
        "_id": "-LyafAvhUR7XeVa0AdvQ",
        "_score": 1,
        "_source": {
          "name": "Tester"
        }
      },
      {
        "_index": "teams",
        "_id": "-M2eWpl9M_fvXo6V8ybb",
        "_score": 1,
        "_source": {
          "name": null
        }
      },
      {
        "_index": "teams",
        "_id": "-LXpysybHpNvM9gxMmLQ",
        "_score": 1,
        "_source": {
          "name": "test2"
        }
      },
      {
        "_index": "teams",
        "_id": "-LXcC19C9Evq-F5JtkNa",
        "_score": 1,
        "_source": {
          "name": "bevbombs"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nl0iV0_AflEKLkgtqLu",
        "_score": 1,
        "_source": {
          "name": "Lonergan and Raven"
        }
      },
      {
        "_index": "teams",
        "_id": "-NRVGm7WIGX65R5744Hr",
        "_score": 1,
        "_source": {
          "name": "T Cribb & Sons"
        }
      },
      {
        "_index": "teams",
        "_id": "-NCxrAT8dfjRkZn9KJdW",
        "_score": 1,
        "_source": {
          "name": "Fragment"
        }
      },
      {
        "_index": "teams",
        "_id": "list",
        "_score": 1,
        "_source": {
          "name": null
        }
      },
      {
        "_index": "teams",
        "_id": "-KyrXNzwMWc4fXM-5-Rk",
        "_score": 1,
        "_source": {
          "name": "Organisation Demo"
        }
      },
      {
        "_index": "teams",
        "_id": "versions",
        "_score": 1,
        "_source": {
          "name": null
        }
      },
      {
        "_index": "teams",
        "_id": "-LY1Ar3HchLUV6Chz8_-",
        "_score": 1,
        "_source": {
          "name": "Foi"
        }
      },
      {
        "_index": "teams",
        "_id": "-NSKjkOrQYQQyIRdUJ2E",
        "_score": 1,
        "_source": {
          "name": "Valley Funeral and Cremation Center"
        }
      },
      {
        "_index": "teams",
        "_id": "-NS98FThTL2piIHB5vtQ",
        "_score": 1,
        "_source": {
          "name": "J Markfield"
        }
      },
      {
        "_index": "teams",
        "_id": "-NCcbxndQv2gTVmJX2lG",
        "_score": 1,
        "_source": {
          "name": "Lorem Suppliers"
        }
      },
      {
        "_index": "teams",
        "_id": "-NTy2E_Hs4REDCPr0O80",
        "_score": 1,
        "_source": {
          "name": "The Wilbert Group"
        }
      },
      {
        "_index": "teams",
        "_id": "-NOsZ7jU57xpXOB8H2hp",
        "_score": 1,
        "_source": {
          "name": "FireHawk Events"
        }
      },
      {
        "_index": "teams",
        "_id": "-NFzXEd7LKR4D72XtBk-",
        "_score": 1,
        "_source": {
          "name": "Lorem Cremations"
        }
      },
      {
        "_index": "teams",
        "_id": "-L3Q2VBDC3HTyEIs8fXS",
        "_score": 1,
        "_source": {
          "name": "Swan Hill Pools & Spas"
        }
      },
      {
        "_index": "teams",
        "_id": "-MVRFKT8Imaq2qkFuj-8",
        "_score": 1,
        "_source": {
          "name": "me"
        }
      },
      {
        "_index": "teams",
        "_id": "-M1eicgvKUPjfRtXIl9W",
        "_score": 1,
        "_source": {
          "name": "test"
        }
      },
      {
        "_index": "teams",
        "_id": "-MVT2QGoiPwFTDQdoWHP",
        "_score": 1,
        "_source": {
          "name": "testingbooks"
        }
      },
      {
        "_index": "teams",
        "_id": "-LElVhUEMz4RrHz65hSw",
        "_score": 1,
        "_source": {
          "name": "Australian Friendly Society"
        }
      },
      {
        "_index": "teams",
        "_id": "-Lcj59Qn6AafJ5p_qDi2",
        "_score": 1,
        "_source": {
          "name": "Prime Graphix"
        }
      },
      {
        "_index": "teams",
        "_id": "-LFQHYvh82kZ8q46RlsA",
        "_score": 1,
        "_source": {
          "name": "Deep Blue"
        }
      },
      {
        "_index": "teams",
        "_id": "-LNN4WRBo_69Vs-Wbss_",
        "_score": 1,
        "_source": {
          "name": "Immensus Capital"
        }
      },
      {
        "_index": "teams",
        "_id": "-KwCTSKoHgV_gdX0kveL",
        "_score": 1,
        "_source": {
          "name": "TheFeedbackTeam"
        }
      },
      {
        "_index": "teams",
        "_id": "-M2Dr9pHxub_XzkcN-WI",
        "_score": 1,
        "_source": {
          "name": "caitlin"
        }
      },
      {
        "_index": "teams",
        "_id": "-MXVjqRspvpVAEvCTBqB",
        "_score": 1,
        "_source": {
          "name": "Roberts"
        }
      },
      {
        "_index": "teams",
        "_id": "-MFbdYHg8j-BpTfrp7kn",
        "_score": 1,
        "_source": {
          "name": "white"
        }
      },
      {
        "_index": "teams",
        "_id": "-L07UUXajiwzqpz1G_bK",
        "_score": 1,
        "_source": {
          "name": "Nielsen Kellerman"
        }
      },
      {
        "_index": "teams",
        "_id": "-MoLSW1Bq4a9mbv3rhII",
        "_score": 1,
        "_source": {
          "name": "Hinkle"
        }
      },
      {
        "_index": "teams",
        "_id": "-MoaFzz6rMM5zC4gwyb1",
        "_score": 1,
        "_source": {
          "name": "Zackary Banks"
        }
      },
      {
        "_index": "teams",
        "_id": "-LupM2IwsTDKVBRBv5P1",
        "_score": 1,
        "_source": {
          "name": "NDIS"
        }
      },
      {
        "_index": "teams",
        "_id": "-KmicWKp_DOu3K8LSqnv",
        "_score": 1,
        "_source": {
          "name": "Croker Oars "
        }
      },
      {
        "_index": "teams",
        "_id": "-LuALCtWpG4R98c2kemn",
        "_score": 1,
        "_source": {
          "name": "Nova Women"
        }
      },
      {
        "_index": "teams",
        "_id": "-MtppVM5Bn7jwsjzZoHl",
        "_score": 1,
        "_source": {
          "name": "Jill Glencross Independent Funeral Directors Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-KyTV-ZKdQjZKoCVg37H",
        "_score": 1,
        "_source": {
          "name": "Conway Cahill Brodeur Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-Mi40wZWirSWRNJPpOCJ",
        "_score": 1,
        "_source": {
          "name": "Lemex"
        }
      },
      {
        "_index": "teams",
        "_id": "-BNcd9IWrCVwAijMUBv1",
        "_score": 1,
        "_source": {
          "name": "Dahlborg-MacNevin"
        }
      },
      {
        "_index": "teams",
        "_id": "-MzwEypAcbR5bAn5dCg7",
        "_score": 1,
        "_source": {
          "name": "Murphy Ruffenach Brian W. Donnelly Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-MtAU-RhLYcxvAjeQKxy",
        "_score": 1,
        "_source": {
          "name": "Envoi Cremation"
        }
      },
      {
        "_index": "teams",
        "_id": "-N3HqVXtv0rFPr_XQfJX",
        "_score": 1,
        "_source": {
          "name": "Cartmell-Davis Funeral  & Cremation Service Inc"
        }
      },
      {
        "_index": "teams",
        "_id": "-NBWgeFGcgj3iABwz2TR",
        "_score": 1,
        "_source": {
          "name": "Heald Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-MPBg2WlsAOtvJmWDlRN",
        "_score": 1,
        "_source": {
          "name": "DeVito Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-MDTMMre7m5Pig8deDc3",
        "_score": 1,
        "_source": {
          "name": "Lorem Funerals UK"
        }
      },
      {
        "_index": "teams",
        "_id": "-OBNGhNZ_i0HkNxc873t",
        "_score": 1,
        "_source": {
          "name": "Lakeview Crematorium"
        }
      },
      {
        "_index": "teams",
        "_id": "-MieCSnVqJ22G1gbsyUu",
        "_score": 1,
        "_source": {
          "name": "Everett Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-MVPTSIhr2aL0pabapbU",
        "_score": 1,
        "_source": {
          "name": "Lehman, Reen, & McNamara Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-MxkKzssEZgzTdEToieR",
        "_score": 1,
        "_source": {
          "name": "sandra"
        }
      },
      {
        "_index": "teams",
        "_id": "-KubcTDQCmTDGj1Lyg26",
        "_score": 1,
        "_source": {
          "name": "iChallenge Finance"
        }
      },
      {
        "_index": "teams",
        "_id": "-OBNWa4q-PHObrn2MA7_",
        "_score": 1,
        "_source": {
          "name": "Humber Memorial Chapel Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-MO9o4OmBTuNT9VoqKWI",
        "_score": 1,
        "_source": {
          "name": "Agency"
        }
      },
      {
        "_index": "teams",
        "_id": "-LaSnUsvtux2PVfEUDT6",
        "_score": 1,
        "_source": {
          "name": "Waterco"
        }
      },
      {
        "_index": "teams",
        "_id": "KlbNa0anwo8I3hUoIwG",
        "_score": 1,
        "_source": {
          "name": null
        }
      },
      {
        "_index": "teams",
        "_id": "-NtJgbp0BXuSTdSuCI_Z",
        "_score": 1,
        "_source": {
          "name": "Rushnell Funeral Homes Inc. Picton"
        }
      },
      {
        "_index": "teams",
        "_id": "-NtJhe7-HpzF-IL5Vo6g",
        "_score": 1,
        "_source": {
          "name": "Rushnell Funeral Homes Inc. Madoc"
        }
      },
      {
        "_index": "teams",
        "_id": "-NtJh9DPaxgo_plh2sAC",
        "_score": 1,
        "_source": {
          "name": "Rushnell Funeral Homes Inc. Tweed"
        }
      },
      {
        "_index": "teams",
        "_id": "-NtJg2oeQqCkhJKSv6W-",
        "_score": 1,
        "_source": {
          "name": "Rushnell Funeral Homes Inc. Brighton"
        }
      },
      {
        "_index": "teams",
        "_id": "-NtJiBvW_FfkVwydNYpQ",
        "_score": 1,
        "_source": {
          "name": "Rushnell Funeral Homes Inc. Marmora"
        }
      },
      {
        "_index": "teams",
        "_id": "-NtJetqlTAt4LoDWKKRf",
        "_score": 1,
        "_source": {
          "name": "Rushnell Funeral Homes Inc. Trenton"
        }
      },
      {
        "_index": "teams",
        "_id": "-MP2w3H_tBLMFeIjrcM_",
        "_score": 1,
        "_source": {
          "name": "ACC Higgins"
        }
      },
      {
        "_index": "teams",
        "_id": "-MQA7gXeBJT1YNgLLwUi",
        "_score": 1,
        "_source": {
          "name": "Events Made Fabulous"
        }
      },
      {
        "_index": "teams",
        "_id": "-KqeO7YKwBXL-xecRh3z",
        "_score": 1,
        "_source": {
          "name": "LT Solutions for FireHawk Funerals Inc"
        }
      },
      {
        "_index": "teams",
        "_id": "-NtJilDPR4oLeMiduWxs",
        "_score": 1,
        "_source": {
          "name": "Rushnell Crematoriums Inc."
        }
      },
      {
        "_index": "teams",
        "_id": "-MlDpOk3LzeKXP5nKiPi",
        "_score": 1,
        "_source": {
          "name": "Ajax Crematorium & Visitation Center"
        }
      },
      {
        "_index": "teams",
        "_id": "-NFludJQ4iChXeyXS3V-",
        "_score": 1,
        "_source": {
          "name": "Galzerano Funeral Home Inc"
        }
      },
      {
        "_index": "teams",
        "_id": "-KoouJm1s74CrZBZqhul",
        "_score": 1,
        "_source": {
          "name": "AFB"
        }
      },
      {
        "_index": "teams",
        "_id": "-KqeO7YKwCXL-xecRh8o",
        "_score": 1,
        "_source": {
          "name": "The MazWell Group"
        }
      },
      {
        "_index": "teams",
        "_id": "-MDTMMre7m5Pig8deDRR",
        "_score": 1,
        "_source": {
          "name": "OLD DG"
        }
      },
      {
        "_index": "teams",
        "_id": "-NMkBfF85zpJHy1F7j3n",
        "_score": 1,
        "_source": {
          "name": "Eric F. Box Funeral Directors Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-NOm9M5RUtrhJ94A7d-G",
        "_score": 1,
        "_source": {
          "name": "Rushnell Funeral Homes Inc. Belleville"
        }
      },
      {
        "_index": "teams",
        "_id": "-O97tI7rmkawG-fTErm2",
        "_score": 1,
        "_source": {
          "name": "Norton McKinney & Lawler"
        }
      },
      {
        "_index": "teams",
        "_id": "-NZitCLiUjMKui0jmYQG",
        "_score": 1,
        "_source": {
          "name": "Extras"
        }
      },
      {
        "_index": "teams",
        "_id": "-NOsZ7jU57xpXOB8HxsC",
        "_score": 1,
        "_source": {
          "name": "Apple Tree Catering"
        }
      },
      {
        "_index": "teams",
        "_id": "-NS4kwTr3LRZ9eg_vXe4",
        "_score": 1,
        "_source": {
          "name": "Cribb Group"
        }
      },
      {
        "_index": "teams",
        "_id": "-NOm9aKtVz3apf2MnPxL",
        "_score": 1,
        "_source": {
          "name": "New Funeral Testing"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nibs7aoDL64O2t5VkbP",
        "_score": 1,
        "_source": {
          "name": "Test Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nibs4AxMJfTHnP7T3Dc",
        "_score": 1,
        "_source": {
          "name": "Test Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-NQMhznhgonRicAx-V5W",
        "_score": 1,
        "_source": {
          "name": "Onboard Test"
        }
      },
      {
        "_index": "teams",
        "_id": "-NWF4wUJCfseVLCF8fU9",
        "_score": 1,
        "_source": {
          "name": "FireHawk Body Lab"
        }
      },
      {
        "_index": "teams",
        "_id": "-NSPSYVBwfXVvRyo6pD8",
        "_score": 1,
        "_source": {
          "name": "FireHawk Group"
        }
      },
      {
        "_index": "teams",
        "_id": "-NQMjCFpqWQKLu-3zORu",
        "_score": 1,
        "_source": {
          "name": "Onboard Test"
        }
      },
      {
        "_index": "teams",
        "_id": "-NP-dSIARHpXsOwW0Gvc",
        "_score": 1,
        "_source": {
          "name": "Test Onboard"
        }
      },
      {
        "_index": "teams",
        "_id": "-NP-ty-QIxbHP2PN1V4z",
        "_score": 1,
        "_source": {
          "name": "Test Funeral"
        }
      },
      {
        "_index": "teams",
        "_id": "-NicaqHKZ71UzWDpzCRs",
        "_score": 1,
        "_source": {
          "name": "Test Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nicagec99TBOyPnDy61",
        "_score": 1,
        "_source": {
          "name": "Test Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-NicazZRe-uCZHlcGNnc",
        "_score": 1,
        "_source": {
          "name": "Test Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-NdEuB3Wh_Q4MQPJl3e3",
        "_score": 1,
        "_source": {
          "name": "University of Adelaide"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nicei4-DF4GQGuUst0C",
        "_score": 1,
        "_source": {
          "name": "Test Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-NQBSZr_-XNWkG76NKhJ",
        "_score": 1,
        "_source": {
          "name": "Athos Project"
        }
      },
      {
        "_index": "teams",
        "_id": "-NQBSadiKqicD2PvyukF",
        "_score": 1,
        "_source": {
          "name": "Athos"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nice_tgaU_ZLsn6wMxr",
        "_score": 1,
        "_source": {
          "name": "Test Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-NQYLvLRntEVe3i5zG0G",
        "_score": 1,
        "_source": {
          "name": "Onboard Test"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4S1QSyLVAkXSi93jE",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4Ros3yrc5hHIwekTy",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4SoAoKy8J0WbjUyk9",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4SV4LXihKgkbADng7",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4U8Cmwe6mchadI4co",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4TyFAUuwIbnk938fA",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4UwT1XbLwI2gWmZJb",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4Ul2J-j2YX-aLcRt3",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4VCFSesQWgFhBAIgq",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4Qi6jXzczpbbT7NBH",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OB4RMyagGHXJIcLinf_",
        "_score": 1,
        "_source": {
          "name": "Testing Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-O4yR_HSM3taPS_dofv3",
        "_score": 1,
        "_source": {
          "name": "FHF Core AU"
        }
      },
      {
        "_index": "teams",
        "_id": "-OMsPbP1ZvFRYfoBGtOM",
        "_score": 1,
        "_source": {
          "name": "FireHawk Pay"
        }
      },
      {
        "_index": "teams",
        "_id": "-MzxATz8o-eX_QHwdzIH",
        "_score": 1,
        "_source": {
          "name": "McCarthy, McKinney & Lawler Funeral Home & Cremation Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-N65SQQZNT1PSih1l0Aw",
        "_score": 1,
        "_source": {
          "name": "Lorem Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-N4I3LoOECc8TbcdW-EL",
        "_score": 1,
        "_source": {
          "name": "Legacy Tribute UK"
        }
      },
      {
        "_index": "teams",
        "_id": "-NkXqApXkA7QOeZXh2p2",
        "_score": 1,
        "_source": {
          "name": "Cardinal Funeral Homes Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-LwAayqzEohZne6LxZqV",
        "_score": 1,
        "_source": {
          "name": "RoccStar PR"
        }
      },
      {
        "_index": "teams",
        "_id": "-L-nNaHhHfYPfKMf1xAo",
        "_score": 1,
        "_source": {
          "name": "Central West Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-L9N2_xqPSw-kdl5GErf",
        "_score": 1,
        "_source": {
          "name": "WBS DELETE"
        }
      },
      {
        "_index": "teams",
        "_id": "-Lbg3DDB1NBcA4GCqk3b",
        "_score": 1,
        "_source": {
          "name": "Semmens Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LbME-tWNChyiyOQQRva",
        "_score": 1,
        "_source": {
          "name": "Dawsons Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-L0fpheVgdHO_ykwIn2u",
        "_score": 1,
        "_source": {
          "name": "Grace Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-L0g2aRiSV2AV5mSAhBi",
        "_score": 1,
        "_source": {
          "name": "Blue Mountain Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-L5k7cL0orrb4AkpykHB",
        "_score": 1,
        "_source": {
          "name": "Logan Funerals (Narrabri)"
        }
      },
      {
        "_index": "teams",
        "_id": "-L5lXZnr3Bn-guYU1flU",
        "_score": 1,
        "_source": {
          "name": "Lester & Son"
        }
      },
      {
        "_index": "teams",
        "_id": "-L6E4oKvnMHrUiEQ1pGe",
        "_score": 1,
        "_source": {
          "name": "Napier Park Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-M6DTD4hpLjN4YnvcDW8",
        "_score": 1,
        "_source": {
          "name": "Macqueens Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LgR1WsMMvuRzBHgOAuI",
        "_score": 1,
        "_source": {
          "name": "Allison Monkhouse Funeral Directors"
        }
      },
      {
        "_index": "teams",
        "_id": "-LgR7k5M2DSQG8sg9EzY",
        "_score": 1,
        "_source": {
          "name": "Gateway Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LgRBAKWs8JF9GYBRTMz",
        "_score": 1,
        "_source": {
          "name": "T.J Andrews Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-LocJd3QTLZx62fs2Ztv",
        "_score": 1,
        "_source": {
          "name": "Brisbane Funeral Care"
        }
      },
      {
        "_index": "teams",
        "_id": "-LOPl3hj492M0R7S5FrB",
        "_score": 1,
        "_source": {
          "name": "Batemans Bay and Moruya District Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LsnkCiWACwzKa_VBN4G",
        "_score": 1,
        "_source": {
          "name": "Vincent Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LLS3timdqv33TWCPDGD",
        "_score": 1,
        "_source": {
          "name": "Direct Mortuary Transfers"
        }
      },
      {
        "_index": "teams",
        "_id": "-LM6LLcznY8h8yLA_XYe",
        "_score": 1,
        "_source": {
          "name": "Logan Funerals (Goondiwindi)"
        }
      },
      {
        "_index": "teams",
        "_id": "-LMljNWyHBRC3LaYuqDS",
        "_score": 1,
        "_source": {
          "name": "Mid West Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LMLqP1FcFzAsnlniMUd",
        "_score": 1,
        "_source": {
          "name": "Logan Funerals Admin"
        }
      },
      {
        "_index": "teams",
        "_id": "-LT5bHuba46HfHfLTNzI",
        "_score": 1,
        "_source": {
          "name": "Wray Owen Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LcUZpgFA_AKD_f7XwkC",
        "_score": 1,
        "_source": {
          "name": "Dooley Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LCX0MgYJQCabhfNTvsB",
        "_score": 1,
        "_source": {
          "name": "Swan Hill & District Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LgRDHEQOHkUpNVeAyrl",
        "_score": 1,
        "_source": {
          "name": "G. Beavan Funerals of Bowral"
        }
      },
      {
        "_index": "teams",
        "_id": "-LGTRLY9ECpLif8fhAVI",
        "_score": 1,
        "_source": {
          "name": "Logan Funerals (Moree)"
        }
      },
      {
        "_index": "teams",
        "_id": "-LhJWvs8hoBkFgnEWXhZ",
        "_score": 1,
        "_source": {
          "name": "The Walker Group"
        }
      },
      {
        "_index": "teams",
        "_id": "-LLbCqqfH06sMz80tf7r",
        "_score": 1,
        "_source": {
          "name": "Peter Cox & Son Funeral Directors"
        }
      },
      {
        "_index": "teams",
        "_id": "-M_YmHgwxW9Irnyvdoad",
        "_score": 1,
        "_source": {
          "name": "Julie Harwood Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-M-IdkCRkA1U3kE2fgd7",
        "_score": 1,
        "_source": {
          "name": "Mackay Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-M0ubBLlJwuiCCyHmwcv",
        "_score": 1,
        "_source": {
          "name": "McGlynn Hunt Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MnYPTGWabOv_nqwh2lJ",
        "_score": 1,
        "_source": {
          "name": "FHF Spanish Demo"
        }
      },
      {
        "_index": "teams",
        "_id": "-MOnImdKf8kUAM4nC01P",
        "_score": 1,
        "_source": {
          "name": "Timeless Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MpFNgGKoMauzyeHWbEw",
        "_score": 1,
        "_source": {
          "name": "Tony Monte Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MKCfGkmny6pDWhzyPOM",
        "_score": 1,
        "_source": {
          "name": "Tribute Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-MuwbmUdWb76TfkrxgYB",
        "_score": 1,
        "_source": {
          "name": "O'Brien Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-MecXmY1MjNKakkckick",
        "_score": 1,
        "_source": {
          "name": "Harrison Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MQV1NSx7rTxI8JWRQOV",
        "_score": 1,
        "_source": {
          "name": "Ninness Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-MDTBOwTO0BMkCakdAki",
        "_score": 1,
        "_source": {
          "name": "FireHawk Funerals NZ Old"
        }
      },
      {
        "_index": "teams",
        "_id": "-ME1KSb3QDHGLhORk9n2",
        "_score": 1,
        "_source": {
          "name": "Des Allen & Co Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MyimpKuokRFiRQeqpdq",
        "_score": 1,
        "_source": {
          "name": "Glenelg Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MZApDCmCFbOKLwJXZ2O",
        "_score": 1,
        "_source": {
          "name": "Lightfoot Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MZBaYngnpbmLwXpxCcb",
        "_score": 1,
        "_source": {
          "name": "Thompson Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-N_X1SyC6wikXoGEoG5e",
        "_score": 1,
        "_source": {
          "name": "SA Cremation Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-N-_RCTe9Tqix1k8DkFh",
        "_score": 1,
        "_source": {
          "name": "Cairns Crematorium and Funeral Home and Memorial Gardens"
        }
      },
      {
        "_index": "teams",
        "_id": "-MLk0oBoBwleNhUYXfUF",
        "_score": 1,
        "_source": {
          "name": "FUNERA"
        }
      },
      {
        "_index": "teams",
        "_id": "-MlmnnJi7I8F-hT36hpr",
        "_score": 1,
        "_source": {
          "name": "Integrity Funeral Services Pty Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-MlOLF0eSRDb4MmrdNOL",
        "_score": 1,
        "_source": {
          "name": "Fred J Potter"
        }
      },
      {
        "_index": "teams",
        "_id": "-MmLIwU3XiZeA_0dWSlJ",
        "_score": 1,
        "_source": {
          "name": "Les Watkins Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Mg9U1nHtHhbhwmwMrnu",
        "_score": 1,
        "_source": {
          "name": "FireHawk Funerals Pet Demo"
        }
      },
      {
        "_index": "teams",
        "_id": "-MhqNvEnaUfhiK4lo3yx",
        "_score": 1,
        "_source": {
          "name": "Morleys Funeral Home Test"
        }
      },
      {
        "_index": "teams",
        "_id": "-MHtwQZjrJI5morFgGKF",
        "_score": 1,
        "_source": {
          "name": "Firehawk Funerals Pty Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-NgGbe_wf0HioY3qiy55",
        "_score": 1,
        "_source": {
          "name": "William Barrett Testing (OLD)"
        }
      },
      {
        "_index": "teams",
        "_id": "-NR1Qevi-nMUTYCLSOx0",
        "_score": 1,
        "_source": {
          "name": "Davis Funeral Services Limited"
        }
      },
      {
        "_index": "teams",
        "_id": "-NR2-p2-4Ij8AnTQKwFA",
        "_score": 1,
        "_source": {
          "name": "Dil's Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-NMkA7VQ_FC9At52X7lP",
        "_score": 1,
        "_source": {
          "name": "Fulham Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-NN-9U-cHVxbG15MwaES",
        "_score": 1,
        "_source": {
          "name": "Charles Berry & Son"
        }
      },
      {
        "_index": "teams",
        "_id": "-NPuqAlGjyc5HJf56Hul",
        "_score": 1,
        "_source": {
          "name": "LH Test"
        }
      },
      {
        "_index": "teams",
        "_id": "-NQsXHyyhwcfcyI1U-Np",
        "_score": 1,
        "_source": {
          "name": "PFP (NZ) Limited"
        }
      },
      {
        "_index": "teams",
        "_id": "-NR1j8MLZMCuWAdKzbh4",
        "_score": 1,
        "_source": {
          "name": "Eagars Funerals Limited"
        }
      },
      {
        "_index": "teams",
        "_id": "-N1BaRyp__9Xe7pnZW9f",
        "_score": 1,
        "_source": {
          "name": "Mountain View Crematoria"
        }
      },
      {
        "_index": "teams",
        "_id": "-N5D-dwGR80MLA8rLg7g",
        "_score": 1,
        "_source": {
          "name": "John Wheatley Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-N65W4pdWbpgJ86Ap03Z",
        "_score": 1,
        "_source": {
          "name": "Heaven Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-N9Te0wRoWqkscS6Lp-R",
        "_score": 1,
        "_source": {
          "name": "FireHawk Funerals NZ Demo"
        }
      },
      {
        "_index": "teams",
        "_id": "-NbD2YkF-3nWQ-ab0T_C",
        "_score": 1,
        "_source": {
          "name": "Harts Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-NBFSAT6vXlB6f5HfRTW",
        "_score": 1,
        "_source": {
          "name": "Greenhaven Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-NRXc4rvxpfBM_PXfZUu",
        "_score": 1,
        "_source": {
          "name": "Frank Rivett & Sons Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-NSpNXpb0mn7FdFrBWv8",
        "_score": 1,
        "_source": {
          "name": "The Last Hurrah"
        }
      },
      {
        "_index": "teams",
        "_id": "-NJriM3E79pYxHj-ihJ3",
        "_score": 1,
        "_source": {
          "name": "Lady Anne Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-NkSdFCSla1PJ5nBFFEG",
        "_score": 1,
        "_source": {
          "name": "T.S. Burstows Testing Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-NkYeoqTNawiU5tOxwmv",
        "_score": 1,
        "_source": {
          "name": "Green Heaven Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nl07bocQ4Nu43UVcZvg",
        "_score": 1,
        "_source": {
          "name": "Burstows Testing"
        }
      },
      {
        "_index": "teams",
        "_id": "-OQBKkEG45SxtU0pAzR7",
        "_score": 1,
        "_source": {
          "name": "Crawfords Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-O24d7HB39fUXMC2HXJZ",
        "_score": 1,
        "_source": {
          "name": "C.R. Smyth & Son"
        }
      },
      {
        "_index": "teams",
        "_id": "-O6xWTeDkmZQUqOa7QBD",
        "_score": 1,
        "_source": {
          "name": "N & K Harvey Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-O9O2J26R5RycD4yBA8M",
        "_score": 1,
        "_source": {
          "name": "Stephen P. Gay Funeral Service"
        }
      },
      {
        "_index": "teams",
        "_id": "-OHe1rALmeS4MLAbvvzw",
        "_score": 1,
        "_source": {
          "name": "William Barrett Testing"
        }
      },
      {
        "_index": "teams",
        "_id": "-NzgWFkyGTzCvglFq2wd",
        "_score": 1,
        "_source": {
          "name": "Westview Crematorium"
        }
      },
      {
        "_index": "teams",
        "_id": "-NzX1tA4baw-cnmqMwUM",
        "_score": 1,
        "_source": {
          "name": "Walter Carter Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-O-k5qesepUL-oRVDbnP",
        "_score": 1,
        "_source": {
          "name": "Dukes Road Crematorium"
        }
      },
      {
        "_index": "teams",
        "_id": "-O0NaYIt7oGKrCkMQdcY",
        "_score": 1,
        "_source": {
          "name": "Natural Grace Hunter Central Coast Pty Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-NufazJpZ0MQWSwjioqI",
        "_score": 1,
        "_source": {
          "name": "Carter Family Crematorium"
        }
      },
      {
        "_index": "teams",
        "_id": "-NuQvOz5dQW2z2YVzi2L",
        "_score": 1,
        "_source": {
          "name": "Rowland Brothers International"
        }
      },
      {
        "_index": "teams",
        "_id": "-NxCj6spiGB9WvCvsSum",
        "_score": 1,
        "_source": {
          "name": "IVC NZ TEST"
        }
      },
      {
        "_index": "teams",
        "_id": "-OAG2-nVXUVkBs4o1VLc",
        "_score": 1,
        "_source": {
          "name": "Farrell & O'Neill Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-OBiEPtUf3Ed93jWK21K",
        "_score": 1,
        "_source": {
          "name": "John Wheatley Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-OCfAAzrHBHQUfU1EOmE",
        "_score": 1,
        "_source": {
          "name": "FHF Crem / Cem Playground"
        }
      },
      {
        "_index": "teams",
        "_id": "-ODdaHCEEKICM1tJq2qS",
        "_score": 1,
        "_source": {
          "name": "A. O'Hare Funeral Directors Pty Ltd "
        }
      },
      {
        "_index": "teams",
        "_id": "-KyTV-ZKdQjZKoMCOf8Y",
        "_score": 1,
        "_source": {
          "name": "Lorem Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LLh8f4L4z7T_4nX1RSe",
        "_score": 1,
        "_source": {
          "name": "Bowra & O'Dea Music"
        }
      },
      {
        "_index": "teams",
        "_id": "-NqzY4HJIrYRg4rBaO86",
        "_score": 1,
        "_source": {
          "name": "Olsens Farewells"
        }
      },
      {
        "_index": "teams",
        "_id": "-Mqzw3sX7QLsusyspJlH",
        "_score": 1,
        "_source": {
          "name": "Trenerry Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MjDJBsozEyUfhsr50qP",
        "_score": 1,
        "_source": {
          "name": "Newhaven Funerals NQ"
        }
      },
      {
        "_index": "teams",
        "_id": "-L5k7qgKR38dVU2-GqHx",
        "_score": 1,
        "_source": {
          "name": "Fry Bros"
        }
      },
      {
        "_index": "teams",
        "_id": "-O0NatsKXoa4KoAhM0Hb",
        "_score": 1,
        "_source": {
          "name": "Natural Grace Warrnambool Pty Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-NEYHj_j0mQ2SzC8dvic",
        "_score": 1,
        "_source": {
          "name": "Virgo Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-LnLln0Qyn1UZTjK6J4D",
        "_score": 1,
        "_source": {
          "name": "Bethany Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-NxBwtxQeuMVYOMVNP7_",
        "_score": 1,
        "_source": {
          "name": "FHF Playground"
        }
      },
      {
        "_index": "teams",
        "_id": "-MVP1RIWrmOwAijMz5XS",
        "_score": 1,
        "_source": {
          "name": "Magoun-Biggins Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-OHK_a7_Um-NQ_uuktje",
        "_score": 1,
        "_source": {
          "name": "Dignity UAT"
        }
      },
      {
        "_index": "teams",
        "_id": "-NOHCjhaHzojO0bWenTA",
        "_score": 1,
        "_source": {
          "name": "Hall Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-N35t1rxd-QpJeuIfCZ4",
        "_score": 1,
        "_source": {
          "name": "Wise Products Inc"
        }
      },
      {
        "_index": "teams",
        "_id": "-O0wXJjLS-aWlTX90Mlu",
        "_score": 1,
        "_source": {
          "name": "Christchurch Crematorium Test"
        }
      },
      {
        "_index": "teams",
        "_id": "-LSveVDymqibufAgLGCi",
        "_score": 1,
        "_source": {
          "name": "Nielsen Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MDTMMre7m5Pig8dPuKu",
        "_score": 1,
        "_source": {
          "name": "Lorem Funerals UK"
        }
      },
      {
        "_index": "teams",
        "_id": "-MidxQKbene9pNtD8fyT",
        "_score": 1,
        "_source": {
          "name": "Eden Valley Crematorium"
        }
      },
      {
        "_index": "teams",
        "_id": "-NFffPNxUXb1MZ2wD2CX",
        "_score": 1,
        "_source": {
          "name": "FireHawk Funerals Corp"
        }
      },
      {
        "_index": "teams",
        "_id": "-L5vWs7VZ01KJjN23Boz",
        "_score": 1,
        "_source": {
          "name": "Victoriaville & Co USA"
        }
      },
      {
        "_index": "teams",
        "_id": "-MpOnbpOJMMqMIX_5MTw",
        "_score": 1,
        "_source": {
          "name": "Paul Lahood Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-ORjKwCLrVl7wf00WZ0S",
        "_score": 1,
        "_source": {
          "name": "Toscan Dinn Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LCbVbvQAlzFKDKtpKrZ",
        "_score": 1,
        "_source": {
          "name": "William Farmer Funeral Directors"
        }
      },
      {
        "_index": "teams",
        "_id": "-NprIZYT5EdAFJjbPevA",
        "_score": 1,
        "_source": {
          "name": "Country Cremations"
        }
      },
      {
        "_index": "teams",
        "_id": "-N49BsNo_FbqgH6OwExC",
        "_score": 1,
        "_source": {
          "name": "Carolina Southern Funeral Supply"
        }
      },
      {
        "_index": "teams",
        "_id": "-KnbtC9zg0BzXxjxzNOt",
        "_score": 1,
        "_source": {
          "name": "Azure Pools Mid North Coast Pty Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-MLAJuP4t3WSghlGNgTN",
        "_score": 1,
        "_source": {
          "name": "Debbie Latham"
        }
      },
      {
        "_index": "teams",
        "_id": "-Mm1L3rfdYlI64zYbvlG",
        "_score": 1,
        "_source": {
          "name": "Beetham Hall Crematorium"
        }
      },
      {
        "_index": "teams",
        "_id": "-MfBlhN9y8iYJb7aEnVi",
        "_score": 1,
        "_source": {
          "name": "Keatings Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MaAugvkC5YBrk5rJokR",
        "_score": 1,
        "_source": {
          "name": "F.W Barnes & Son Funeral Directors"
        }
      },
      {
        "_index": "teams",
        "_id": "-L6E3mIoEVzl8Cz24D82",
        "_score": 1,
        "_source": {
          "name": "Mulqueen Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MW28pa8vKKMP123IR32",
        "_score": 1,
        "_source": {
          "name": "Burke & Douglas Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-ODdvM7h1m3F4w4i8RoZ",
        "_score": 1,
        "_source": {
          "name": "Desert Funerals Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-LCbUsJwNFA7KRUniuuY",
        "_score": 1,
        "_source": {
          "name": "Williams Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-L9lqN8_hkCOBaj9oCt3",
        "_score": 1,
        "_source": {
          "name": "Bance Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-ORxlleGDj-4WsgCaS4-",
        "_score": 1,
        "_source": {
          "name": "Port Stephens Crematorium"
        }
      },
      {
        "_index": "teams",
        "_id": "-ODdowdFNHqt0xjo-Psh",
        "_score": 1,
        "_source": {
          "name": "Lethborg Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-ODdnkDSuiV8DpMht8Qx",
        "_score": 1,
        "_source": {
          "name": "Kleemann Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nj4xjstlowbs-TzPjeS",
        "_score": 1,
        "_source": {
          "name": "The Carter Family Trust"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nrm7frdaGFKoZCtOuOL",
        "_score": 1,
        "_source": {
          "name": "Alfred James"
        }
      },
      {
        "_index": "teams",
        "_id": "-MHtn5a3pCQa1ZToIlAh",
        "_score": 1,
        "_source": {
          "name": "FireHawk Funerals Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-OLqg_3Zqn6aGeQb3KaO",
        "_score": 1,
        "_source": {
          "name": "Bowra & O'Dea Test"
        }
      },
      {
        "_index": "teams",
        "_id": "-ORtgvVTCZuPYO9cnNNj",
        "_score": 1,
        "_source": {
          "name": "Copland Street Crematorium"
        }
      },
      {
        "_index": "teams",
        "_id": "-NVdjOrTXs3I-jcsrN7X",
        "_score": 1,
        "_source": {
          "name": "Southern Test"
        }
      },
      {
        "_index": "teams",
        "_id": "-MhVXs9N_HGMmpn1IFTW",
        "_score": 1,
        "_source": {
          "name": "Fishwicks"
        }
      },
      {
        "_index": "teams",
        "_id": "-MaBysLDD26LNm3nvZUc",
        "_score": 1,
        "_source": {
          "name": "Walkden Funerals LTD"
        }
      },
      {
        "_index": "teams",
        "_id": "-MO4VwTxc5EJxKjYt2a9",
        "_score": 1,
        "_source": {
          "name": "Smith Funeral & Memorial Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-NZV3YvRF-m1Io1wBs81",
        "_score": 1,
        "_source": {
          "name": "Brock & Visser Funeral Home Burial & Cremation Services Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-NrnD39-_KKgSsuGgd2r",
        "_score": 1,
        "_source": {
          "name": "Binney Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-M564YvZryLvyydnh_f5",
        "_score": 1,
        "_source": {
          "name": "Lovell Meizer Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MyGAcWODs0O7etaTEUA",
        "_score": 1,
        "_source": {
          "name": "Robert Nelson Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nz7UeRlmck0LY0aUqDC",
        "_score": 1,
        "_source": {
          "name": "Foresters Financial"
        }
      },
      {
        "_index": "teams",
        "_id": "-O0wWhvHY5eJruF-rkeg",
        "_score": 1,
        "_source": {
          "name": "Lamb & Hayward Testing"
        }
      },
      {
        "_index": "teams",
        "_id": "-NrCquBZKncNPGrqjsn0",
        "_score": 1,
        "_source": {
          "name": "MFG Hume Region"
        }
      },
      {
        "_index": "teams",
        "_id": "-NSFA68f8Sufe-Lcc7VN",
        "_score": 1,
        "_source": {
          "name": "Great Lakes Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-OQHU-ya-Jt48cXtrcW-",
        "_score": 1,
        "_source": {
          "name": "Willow Tree Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-ORjnc6I3k32RZM9FL4E",
        "_score": 1,
        "_source": {
          "name": "M.H. O'Rourke"
        }
      },
      {
        "_index": "teams",
        "_id": "-McmX5amcOsN0G0Puhla",
        "_score": 1,
        "_source": {
          "name": "Beautiful Farewells"
        }
      },
      {
        "_index": "teams",
        "_id": "-MFd93AFs13NMN5ULktX",
        "_score": 1,
        "_source": {
          "name": "Kenton Ross Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nxzj46ed06HbJSiGQY-",
        "_score": 1,
        "_source": {
          "name": "Brian Walsh Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-OQDE_ZLeCZXiqJKiaGo",
        "_score": 1,
        "_source": {
          "name": "Alan Harris McDonald"
        }
      },
      {
        "_index": "teams",
        "_id": "-OMA1InqlzSD4ia7RqXy",
        "_score": 1,
        "_source": {
          "name": "Wimmera Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MLAjhFBk3NLlYji6DdM",
        "_score": 1,
        "_source": {
          "name": "Handley Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-KksUYmotvGfajMHd8n2",
        "_score": 1,
        "_source": {
          "name": "Murphy Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-M1TPdp9fRZD64Btz9Lf",
        "_score": 1,
        "_source": {
          "name": "France Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-KknmlVeYyrCyqpfbpgw",
        "_score": 1,
        "_source": {
          "name": "Organisation Testing Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-KlbNa0anwo8I3hUoIwG",
        "_score": 1,
        "_source": {
          "name": "Funeral Testing Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-MW7dsPJ3VQjKuoAggaX",
        "_score": 1,
        "_source": {
          "name": "Propel Funeral Partners"
        }
      },
      {
        "_index": "teams",
        "_id": "-ORJXWLqSsX69hRsld01",
        "_score": 1,
        "_source": {
          "name": "BD Funeral Holdings"
        }
      },
      {
        "_index": "teams",
        "_id": "-LnzAuyb9ael641eOrU8",
        "_score": 1,
        "_source": {
          "name": "Manning Great Lakes Memorial Gardens"
        }
      },
      {
        "_index": "teams",
        "_id": "-NxqsznUTl-EFme_WwpJ",
        "_score": 1,
        "_source": {
          "name": "Morleys Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-NsL0Hbd3DGaJ_7i9Ibt",
        "_score": 1,
        "_source": {
          "name": "Outback Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LXpVHZgmb4uWqcpRyke",
        "_score": 1,
        "_source": {
          "name": "WT Howard Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-KqeO7YKwCXL-xecRh8Z",
        "_score": 1,
        "_source": {
          "name": "The MazWell Group UK"
        }
      },
      {
        "_index": "teams",
        "_id": "-NwxCGQF7pDTX6NNoCcG",
        "_score": 1,
        "_source": {
          "name": "IVC AU TEST"
        }
      },
      {
        "_index": "teams",
        "_id": "-KMmLiJkm7GmFV0gr7Dm",
        "_score": 1,
        "_source": {
          "name": "Dignity Project Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-NWG-TwsoFx3yevarUl0",
        "_score": 1,
        "_source": {
          "name": "Maurice R. Moroney & Co"
        }
      },
      {
        "_index": "teams",
        "_id": "-N_qzE5U1XcNYoLdG5Oh",
        "_score": 1,
        "_source": {
          "name": "Tobin Brothers Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LqE7LGT9QOtflAPGUKm",
        "_score": 1,
        "_source": {
          "name": "Lilleywhite Funeral Service"
        }
      },
      {
        "_index": "teams",
        "_id": "-O23hH_6zUnORBpuCRa5",
        "_score": 1,
        "_source": {
          "name": "Harmony Asian Funeral Directors "
        }
      },
      {
        "_index": "teams",
        "_id": "-L5B4EbQwCTieA9l1InD",
        "_score": 1,
        "_source": {
          "name": "Pettigrew Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-OClBKlvpkMZ-QkJ8UhK",
        "_score": 1,
        "_source": {
          "name": "NAFD Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nwb_sO2nqs4rxtwukqf",
        "_score": 1,
        "_source": {
          "name": "Central Co-op Funeral UAT"
        }
      },
      {
        "_index": "teams",
        "_id": "-KMmLiJkm7GmFV0gr7SX",
        "_score": 1,
        "_source": {
          "name": "Central Co-op Project Team"
        }
      },
      {
        "_index": "teams",
        "_id": "-NGVZoaGjnAgcGuiy4xa",
        "_score": 1,
        "_source": {
          "name": "The Brenan Group Ltd."
        }
      },
      {
        "_index": "teams",
        "_id": "-O3aQ9GkgPLXPQvbvJHC",
        "_score": 1,
        "_source": {
          "name": "Gallagher Family Funeral Directors"
        }
      },
      {
        "_index": "teams",
        "_id": "-NiWMsRHePH7lqTwJQcdg",
        "_score": 1,
        "_source": {
          "name": "Denning's Ltd."
        }
      },
      {
        "_index": "teams",
        "_id": "-NiWMsRHePH7lqTwJQcd",
        "_score": 1,
        "_source": {
          "name": "Buffam Leveille Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-MjgE6fGtnG6hrPypheP",
        "_score": 1,
        "_source": {
          "name": "Brampton Crematorium & Visitation Center"
        }
      },
      {
        "_index": "teams",
        "_id": "-N4Vv4bGK4KnnPH-2UkC",
        "_score": 1,
        "_source": {
          "name": "Hillier Funeral Service"
        }
      },
      {
        "_index": "teams",
        "_id": "-NFffPNxUXb1MZ2wD2Rk",
        "_score": 1,
        "_source": {
          "name": "FireHawk Funerals Inc"
        }
      },
      {
        "_index": "teams",
        "_id": "-NhA9Wqfzv7gtXK2CsCp",
        "_score": 1,
        "_source": {
          "name": "Go Cremation"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nc5e-pm-Ru9KQy4i9i8",
        "_score": 1,
        "_source": {
          "name": "Central Co-op Funeral"
        }
      },
      {
        "_index": "teams",
        "_id": "-MuT-T4AysBKkbozqSGm",
        "_score": 1,
        "_source": {
          "name": "H. Parsons Funeral Directors"
        }
      },
      {
        "_index": "teams",
        "_id": "-MphasqylncPXEola4IB",
        "_score": 1,
        "_source": {
          "name": "Christchurch Crematorium"
        }
      },
      {
        "_index": "teams",
        "_id": "-NTujXMwefPWAzfh2zN2",
        "_score": 1,
        "_source": {
          "name": "Southwest Crematoriums Ltd."
        }
      },
      {
        "_index": "teams",
        "_id": "-MO3QGGexOI280FH3I1u",
        "_score": 1,
        "_source": {
          "name": "Silva Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-MFELQ6LRLuEm4bPs3yz",
        "_score": 1,
        "_source": {
          "name": "Heritage Brothers Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-KyTV-ZKdQjZKoMCOf8X",
        "_score": 1,
        "_source": {
          "name": "Lorem Funerals Australia"
        }
      },
      {
        "_index": "teams",
        "_id": "-NVdjOrTXs3I-jcsrN7B",
        "_score": 1,
        "_source": {
          "name": "Southern Co-operative Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nai_8020yW0bG15PpJM",
        "_score": 1,
        "_source": {
          "name": "Paterson's Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-L3Q2VBga3HTyEIs8fPu",
        "_score": 1,
        "_source": {
          "name": "BG's Pools & Spas"
        }
      },
      {
        "_index": "teams",
        "_id": "-KkmLiJkm7GmRf0gr7z9",
        "_score": 1,
        "_source": {
          "name": "FireHawkCRM"
        }
      },
      {
        "_index": "teams",
        "_id": "-NysxpF3cVn4QGaox5fx",
        "_score": 1,
        "_source": {
          "name": "Whitestone Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-OC0GtWnzLYUy5sEbkVX",
        "_score": 1,
        "_source": {
          "name": "Candour"
        }
      },
      {
        "_index": "teams",
        "_id": "-Mi4AdGSDTcmdVME_jot",
        "_score": 1,
        "_source": {
          "name": "MFG Northern Rivers"
        }
      },
      {
        "_index": "teams",
        "_id": "-MFcJ0Moc4uBDsyRY3vx",
        "_score": 1,
        "_source": {
          "name": "Ultimate Pools Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nm8suJNnFzQ0X3FPNCV",
        "_score": 1,
        "_source": {
          "name": "Hetherington Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LFtEUZaFlkyststwpBD",
        "_score": 1,
        "_source": {
          "name": "Word Investments"
        }
      },
      {
        "_index": "teams",
        "_id": "-NJHw7QAvIWCoNhdmM9T",
        "_score": 1,
        "_source": {
          "name": "Shaun Hamilton Funerals Pty Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-MtGFbY7VikehWji-M4c",
        "_score": 1,
        "_source": {
          "name": "Premier Funeral Group"
        }
      },
      {
        "_index": "teams",
        "_id": "-LLS3timdqv33TWCPDGC",
        "_score": 1,
        "_source": {
          "name": "Riverland Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nn6uTRGSjvPtYjI51PW",
        "_score": 1,
        "_source": {
          "name": "Lonergan & Raven Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Lz-sCs2FYYuHqSq8DNX",
        "_score": 1,
        "_source": {
          "name": "Latrobe Valley Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-NGtzGkowH6WkFsElr1v",
        "_score": 1,
        "_source": {
          "name": "Taylor'd Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MS1BKNVoBSf2jS_roO1",
        "_score": 1,
        "_source": {
          "name": "Sylvan Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-L9gftt65xyhopR0N3IT",
        "_score": 1,
        "_source": {
          "name": "FireHawk Resources"
        }
      },
      {
        "_index": "teams",
        "_id": "-LmqdNV43sJEBVwm24Om",
        "_score": 1,
        "_source": {
          "name": "Millingtons Funeral Service Pty Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-MixFZZfrev6tIcWUhxr",
        "_score": 1,
        "_source": {
          "name": "Pinegrove Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LR9EpUwAT-NQu69sCwp",
        "_score": 1,
        "_source": {
          "name": "Heritage & Heritage Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MCB8mQzGNP5PvQDhBoo",
        "_score": 1,
        "_source": {
          "name": "North West Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-L9D1R62yix0P1OD1hrK",
        "_score": 1,
        "_source": {
          "name": "North East Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LLCWhD14jzILDB9sHzk",
        "_score": 1,
        "_source": {
          "name": "Gregson & Weight"
        }
      },
      {
        "_index": "teams",
        "_id": "-NHh0qbLBrCv3vzaTp-F",
        "_score": 1,
        "_source": {
          "name": "Nepean Valley Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MHtwQZjrJI5morFgGKc",
        "_score": 1,
        "_source": {
          "name": "Firehawk Funerals Pty Ltd"
        }
      },
      {
        "_index": "teams",
        "_id": "-KtybCRY2r4ZPGFsD_KV",
        "_score": 1,
        "_source": {
          "name": "IRONWOOD TAREE PTY LTD"
        }
      },
      {
        "_index": "teams",
        "_id": "-N2ty_4e7_Ec4ufuC-9b",
        "_score": 1,
        "_source": {
          "name": "Pets RIP"
        }
      },
      {
        "_index": "teams",
        "_id": "-OSRcjz0xE31Oewr0Ad1",
        "_score": 1,
        "_source": {
          "name": "Beavan's Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-M1hfngNLrE4vhzFyDBM",
        "_score": 1,
        "_source": {
          "name": "Lamb & Hayward"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nyt1iYASbLLUpYpqY-k",
        "_score": 1,
        "_source": {
          "name": "William Matthews Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nxqp5tNcN05eLnY-AyK",
        "_score": 1,
        "_source": {
          "name": "Unity Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MkoBC67RUN4BFv5VkbU",
        "_score": 1,
        "_source": {
          "name": "Pet Heaven NQ"
        }
      },
      {
        "_index": "teams",
        "_id": "-MATeCWMZx5pEH7I4BnB",
        "_score": 1,
        "_source": {
          "name": "Becker Family Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LoxdoE7YvHGpaRMwZhA",
        "_score": 1,
        "_source": {
          "name": "Territory Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-L9N2_xqPSw-kdl5Ggf0",
        "_score": 1,
        "_source": {
          "name": "William Barrett and Sons"
        }
      },
      {
        "_index": "teams",
        "_id": "-L436KVVVV1UvYuUDI8s",
        "_score": 1,
        "_source": {
          "name": "Compass Pools"
        }
      },
      {
        "_index": "teams",
        "_id": "-NW5XY6VVWnRpYQRj_En",
        "_score": 1,
        "_source": {
          "name": "PFP Demo"
        }
      },
      {
        "_index": "teams",
        "_id": "-LbfoL1sJsNPcMqz5SwA",
        "_score": 1,
        "_source": {
          "name": "Mason Park Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Lnj3e1ExgpAOkXPUvQF",
        "_score": 1,
        "_source": {
          "name": "Peter Elberg Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LuA7lv7PPnCjapCCNIe",
        "_score": 1,
        "_source": {
          "name": "Generation Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nysh0SVsehr2z5Qc1F4",
        "_score": 1,
        "_source": {
          "name": "Hope and Sons Funeral Directors"
        }
      },
      {
        "_index": "teams",
        "_id": "-NGtuMZRnOfQ4cxpFUn2",
        "_score": 1,
        "_source": {
          "name": "Sustainable Funerals Group"
        }
      },
      {
        "_index": "teams",
        "_id": "-NYMNm-gryUZ_EVK-_4Z",
        "_score": 1,
        "_source": {
          "name": "W T Dennis & Son"
        }
      },
      {
        "_index": "teams",
        "_id": "-M2p1BdhOtXl16a5VQm2",
        "_score": 1,
        "_source": {
          "name": "Ern Jensen Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-L5vWs7VZ01KJjN23Boj",
        "_score": 1,
        "_source": {
          "name": "Australian Funeral Directors Association"
        }
      },
      {
        "_index": "teams",
        "_id": "-MtuhM_AeRB8fCmkGEin",
        "_score": 1,
        "_source": {
          "name": "Gardenia Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LbaNxU1OLIXtGyYJkvE",
        "_score": 1,
        "_source": {
          "name": "Final Touch Australia"
        }
      },
      {
        "_index": "teams",
        "_id": "-NIUHgE7dyPa17gtwww0",
        "_score": 1,
        "_source": {
          "name": "Michael Crawford Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-MCKtNaulHLNTO7vLULs",
        "_score": 1,
        "_source": {
          "name": "Geraldton Funeral Services at evereve Funeral Home"
        }
      },
      {
        "_index": "teams",
        "_id": "-LR9q6hddaquNlfx72JJ",
        "_score": 1,
        "_source": {
          "name": "Ross Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-Lce1vH7Zf1KXxCwP6cc",
        "_score": 1,
        "_source": {
          "name": "Piddingtons Armidale"
        }
      },
      {
        "_index": "teams",
        "_id": "-LCgq3tY3Z5vxOhG4a2x",
        "_score": 1,
        "_source": {
          "name": "TJ Scott and Son"
        }
      },
      {
        "_index": "teams",
        "_id": "-KuSaH7_raHC36rHuros",
        "_score": 1,
        "_source": {
          "name": "Milton Ulladulla Funeral Services"
        }
      },
      {
        "_index": "teams",
        "_id": "-M4HFELB_1N1Q0taZnDb",
        "_score": 1,
        "_source": {
          "name": "The Australian Institute of Embalming"
        }
      },
      {
        "_index": "teams",
        "_id": "-Lv7l1Mmwdw_IeU01d8G",
        "_score": 1,
        "_source": {
          "name": "Fitzroy Funerals QLD"
        }
      },
      {
        "_index": "teams",
        "_id": "-Nl0aLQOkX1TVVVuq-z6",
        "_score": 1,
        "_source": {
          "name": "Bowra & O'Dea"
        }
      },
      {
        "_index": "teams",
        "_id": "-ME6jVyo57nPTEjp6xfP",
        "_score": 1,
        "_source": {
          "name": "Natural Grace"
        }
      },
      {
        "_index": "teams",
        "_id": "-MgEqZuXHga8LocAzl0l",
        "_score": 1,
        "_source": {
          "name": "Erceg McIntyre"
        }
      },
      {
        "_index": "teams",
        "_id": "-O7QwjY0JRxYHwUydprT",
        "_score": 1,
        "_source": {
          "name": "InvoCare New Zealand"
        }
      },
      {
        "_index": "teams",
        "_id": "-NZAKrmH0xxoD_UsL39H",
        "_score": 1,
        "_source": {
          "name": "Botanical Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-LFa9R6MhoPYdl3U_PFR",
        "_score": 1,
        "_source": {
          "name": "T.S. Burstow Funerals"
        }
      },
      {
        "_index": "teams",
        "_id": "-O69faDMUqHES9WbMVsh",
        "_score": 1,
        "_source": {
          "name": "Whitsunday Funerals & Crematorium"
        }
      },
      {
        "_index": "teams",
        "_id": "-NcfjFkJxlvDRxQ7GAaS",
        "_score": 1,
        "_source": {
          "name": "Willed Funerals"
        }
      }
    ]
  }
}
const fs = require('fs');

const users = response.hits.hits.map(hit => ({
  name: hit._source.name,
  id: hit._id,
  teamid: hit._source.teamId
}));

fs.writeFileSync('response.json', JSON.stringify(users, null, 2), 'utf-8');

console.log('List saved to response.json');

