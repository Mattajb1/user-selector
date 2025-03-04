{
	// USER: Change this to the shortcut you are using to open FireHawk Team Selector
	let shortcutKey = 'ctrl+j';

	// USER: Change this to the Google user number you are using
	let googleUserNumber = 0;

	// Convert key concaternation from + to -
	shortcutKey = shortcutKey.replace(/\+(?!$)/g, '-');

	let teams = [
		{
			"id": "-ODdaHCEEKICM1tJq2qS",
			"slug": "aohare",
			"teamName": "A. O'Hare Funeral Directors Pty Ltd ",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MP2w3H_tBLMFeIjrcM_",
			"slug": "acchiggins",
			"teamName": "ACC Higgins",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-LALIUNjwrm1kDC2hUo8",
			"slug": "pool",
			"teamName": "ACME Pools",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-KoouJm1s74CrZBZqhul",
			"slug": "afb",
			"teamName": "AFB",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MtjtbtraaPaT8Q3n4tm",
			"slug": "ahmrc",
			"teamName": "Aboriginal Health & Medical Research Council of NSW",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MO9o4OmBTuNT9VoqKWI",
			"slug": "agency",
			"teamName": "Agency",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MlDpOk3LzeKXP5nKiPi",
			"slug": "ajax",
			"teamName": "Ajax Crematorium & Visitation Center",
			"teamType": "Regular",
			"addressState": "Ontario",
			"addressCountry": "Canada"
		},
		{
			"id": "-Nrm7frdaGFKoZCtOuOL",
			"slug": "alfredjames",
			"teamName": "Alfred James",
			"teamType": "Regular",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-LgR1WsMMvuRzBHgOAuI",
			"slug": "monkhouse",
			"teamName": "Allison Monkhouse Funeral Directors",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-Mn-j2m2qbNLTrlP3_yY",
			"slug": "allswell",
			"teamName": "All’s Well",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "Australia"
		},
		{
			"id": "-NOsZ7jU57xpXOB8HxsC",
			"slug": "appletree",
			"teamName": "Apple Tree Catering",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NQBSadiKqicD2PvyukF",
			"slug": "athos",
			"teamName": "Athos",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NQBSZr_-XNWkG76NKhJ",
			"slug": "ap",
			"teamName": "Athos Project",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LElVhUEMz4RrHz65hSw",
			"slug": "afs",
			"teamName": "Australian Friendly Society",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-L5vWs7VZ01KJjN23Boj",
			"slug": "afda",
			"teamName": "Australian Funeral Directors Association",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-KnbtC9zg0BzXxjxzNOt",
			"slug": "azure",
			"teamName": "Azure Pools Mid North Coast Pty Ltd",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-L3Q2VBga3HTyEIs8fPu",
			"slug": "bgs",
			"teamName": "BG's Pools & Spas",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-L9lqN8_hkCOBaj9oCt3",
			"slug": "johnbanceandson",
			"teamName": "Bance Funeral Services",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LOPl3hj492M0R7S5FrB",
			"slug": "batemansbayfunerals",
			"teamName": "Batemans Bay and Moruya District Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-McmX5amcOsN0G0Puhla",
			"slug": "elite",
			"teamName": "Beautiful Farewells",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MATeCWMZx5pEH7I4BnB",
			"slug": "becker",
			"teamName": "Becker Family Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-KkmLiJkm7GmRf0gr6XC",
			"slug": "bka",
			"teamName": "Bee Kind Always",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Mm1L3rfdYlI64zYbvlG",
			"slug": "beetham",
			"teamName": "Beetham Hall Crematorium",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NtpgXRTBF2HSVgbHm0L",
			"slug": "beockandvisser",
			"teamName": "Beock and Visser",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LnLln0Qyn1UZTjK6J4D",
			"slug": "bethany",
			"teamName": "Bethany Funeral Home",
			"teamType": "Regular",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-MhkKdJG8PMBobb2OD_x",
			"slug": "betts",
			"teamName": "Betts Plumbing and Gas",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-NfHJ7AcqsBKBqTQ5NEE",
			"slug": "bibartis",
			"teamName": "Bibartis",
			"teamType": "UK",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-NrnD39-_KKgSsuGgd2r",
			"slug": "binney",
			"teamName": "Binney Family Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-L0g2aRiSV2AV5mSAhBi",
			"slug": "bluemountainfunerals",
			"teamName": "Blue Mountain Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NZAKrmH0xxoD_UsL39H",
			"slug": "botanical",
			"teamName": "Botanical Funerals",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nl0aLQOkX1TVVVuq-z6",
			"slug": "bod",
			"teamName": "Bowra & O'Dea",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LLh8f4L4z7T_4nX1RSe",
			"slug": "bodmusic",
			"teamName": "Bowra & O'Dea",
			"teamType": "Regular",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-MjgE6fGtnG6hrPypheP",
			"slug": "brampton",
			"teamName": "Brampton Crematorium & Visitation Center",
			"teamType": "LTS",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-NzizRytxzMmpuSK6V4P",
			"slug": "bramptoncrematoriumvisitationcentre",
			"teamName": "Brampton Crematorium & Visitation Centre",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nxzj46ed06HbJSiGQY-",
			"slug": "brianwalsh",
			"teamName": "Brian Walsh Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-LocJd3QTLZx62fs2Ztv",
			"slug": "bfc",
			"teamName": "Brisbane Funeral Care",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-NZV3YvRF-m1Io1wBs81",
			"slug": "brockvisser",
			"teamName": "Brock & Visser Funeral Home Burial & Cremation Services Ltd",
			"teamType": "LTS",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-NiWMsRHePH7lqTwJQcd",
			"slug": "buffam",
			"teamName": "Buffam Leveille Funeral Home",
			"teamType": "LTS",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-MW28pa8vKKMP123IR32",
			"slug": "bd",
			"teamName": "Burke & Douglas Funerals",
			"teamType": "Propel",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-Nl07bocQ4Nu43UVcZvg",
			"slug": "burstowstest",
			"teamName": "Burstows Testing",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-O24d7HB39fUXMC2HXJZ",
			"slug": "crsmyth",
			"teamName": "C.R. Smyth & Son",
			"teamType": "",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LvnlXtYd0z8RNQNuJMM",
			"slug": "chg",
			"teamName": "CHG Intergrated Wealth",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Mdoshp3RNdgPVZ_mtOr",
			"slug": "fhcpr",
			"teamName": "CPR Business Advisory Pty Ltd",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-N-_RCTe9Tqix1k8DkFh",
			"slug": "cairnscfh",
			"teamName": "Cairns Crematorium and Funeral Home and Memorial Gardens",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-M1OZHR8mWO0uNAHSLF6",
			"slug": "cg",
			"teamName": "Caldon Group",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-OC0GtWnzLYUy5sEbkVX",
			"slug": "candour",
			"teamName": "Candour",
			"teamType": "",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-NkXqApXkA7QOeZXh2p2",
			"slug": "cardinal",
			"teamName": "Cardinal Funeral Homes Ltd",
			"teamType": "LTS",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-N49BsNo_FbqgH6OwExC",
			"slug": "carolina",
			"teamName": "Carolina Southern Funeral Supply",
			"teamType": "USA",
			"addressState": "SC",
			"addressCountry": "United States"
		},
		{
			"id": "-NufazJpZ0MQWSwjioqI",
			"slug": "cfc",
			"teamName": "Carter Family Crematorium",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-N3HqVXtv0rFPr_XQfJX",
			"slug": "cartmell",
			"teamName": "Cartmell-Davis Funeral  & Cremation Service Inc",
			"teamType": "USA",
			"addressState": "MA",
			"addressCountry": "United States"
		},
		{
			"id": "-MMIVg2xDIv5FBqr86dh",
			"slug": "tt",
			"teamName": "Cashmere & Co",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nc5e-pm-Ru9KQy4i9i8",
			"slug": "cc",
			"teamName": "Central Co-op Funeral",
			"teamType": "Regular",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-Nwb_sO2nqs4rxtwukqf",
			"slug": "cct",
			"teamName": "Central Co-op Funeral UAT",
			"teamType": "Regular",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-KMmLiJkm7GmFV0gr7SX",
			"slug": "ccp",
			"teamName": "Central Co-op Project Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-L-nNaHhHfYPfKMf1xAo",
			"slug": "cwf",
			"teamName": "Central West Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NN-9U-cHVxbG15MwaES",
			"slug": "berryfunerals",
			"teamName": "Charles Berry & Son",
			"teamType": "Regular",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-MphasqylncPXEola4IB",
			"slug": "chc",
			"teamName": "Christchurch Crematorium",
			"teamType": "Regular",
			"addressState": "Canterbury",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-O0wXJjLS-aWlTX90Mlu",
			"slug": "chct",
			"teamName": "Christchurch Crematorium Test",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-N-TBGWyWyE_LD6shEkk",
			"slug": "commercialideas",
			"teamName": "Commercial Ideas, LLC",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-L436KVVVV1UvYuUDI8s",
			"slug": "compasspools",
			"teamName": "Compass Pools",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MC4_dDA0dgZsH3Nxmen",
			"slug": "cpnew",
			"teamName": "Compass Pools Newcastle",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-M9LfOfvmzhBOw6g9hzY",
			"slug": "composite",
			"teamName": "Composite Pool Solutions",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-KyTV-ZKdQjZKoCVg37H",
			"slug": "ccb",
			"teamName": "Conway Cahill Brodeur Funeral Home",
			"teamType": "Regular",
			"addressState": "MA",
			"addressCountry": "United States"
		},
		{
			"id": "-NprIZYT5EdAFJjbPevA",
			"slug": "countrycremations",
			"teamName": "Country Cremations",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NS4kwTr3LRZ9eg_vXe4",
			"slug": "cribbgroup",
			"teamName": "Cribb Group",
			"teamType": "UK",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-KmicWKp_DOu3K8LSqnv",
			"slug": "croker",
			"teamName": "Croker Oars ",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MhkLSZD_GmjPP1-4TFf",
			"slug": "cms",
			"teamName": "Crossingham Maintenance Services",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-BNcd9IWrCVwAijMUBv1",
			"slug": "dm",
			"teamName": "Dahlborg-MacNevin",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "United States of America"
		},
		{
			"id": "-NR1Qevi-nMUTYCLSOx0",
			"slug": "davis",
			"teamName": "Davis Funeral Services Limited",
			"teamType": "Propel",
			"addressState": "Auckland",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-LbME-tWNChyiyOQQRva",
			"slug": "dawsons",
			"teamName": "Dawsons Funeral Home",
			"teamType": "Regular",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-MPBg2WlsAOtvJmWDlRN",
			"slug": "devito",
			"teamName": "DeVito Funeral Home",
			"teamType": "USA",
			"addressState": "MA",
			"addressCountry": "United States"
		},
		{
			"id": "-MLAJuP4t3WSghlGNgTN",
			"slug": "dl",
			"teamName": "Debbie Latham",
			"teamType": "Regular",
			"addressState": "Cheshire",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-LFQHYvh82kZ8q46RlsA",
			"slug": "thedeepblue",
			"teamName": "Deep Blue",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-NiWMsRHePH7lqTwJQcdg",
			"slug": "denning",
			"teamName": "Denning",
			"teamType": "LTS",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-ME1KSb3QDHGLhORk9n2",
			"slug": "desallen",
			"teamName": "Des Allen & Co Funerals",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": ""
		},
		{
			"id": "-ODdvM7h1m3F4w4i8RoZ",
			"slug": "desert",
			"teamName": "Desert Funerals",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OCb-Nhx-YVUTNWP23KH",
			"slug": "desertfunerals",
			"teamName": "Desert Funerals",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MDTMMre7m5Pig8deDRR",
			"slug": "dignity",
			"teamName": "Dignity Funeral Directors",
			"teamType": "UK",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-KMmLiJkm7GmFV0gr7Dm",
			"slug": "dignityp",
			"teamName": "Dignity Project Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NR2-p2-4Ij8AnTQKwFA",
			"slug": "dils",
			"teamName": "Dil's Funeral Services",
			"teamType": "Propel",
			"addressState": "Auckland",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-LLS3timdqv33TWCPDGD",
			"slug": "dmt",
			"teamName": "Direct Mortuary Transfers",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-LcUZpgFA_AKD_f7XwkC",
			"slug": "dff",
			"teamName": "Dooley Family Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-O-k5qesepUL-oRVDbnP",
			"slug": "dukesroad",
			"teamName": "Dukes Road Crematorium",
			"teamType": "InvocareNZ",
			"addressState": "Otago",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-NR1j8MLZMCuWAdKzbh4",
			"slug": "eagars",
			"teamName": "Eagars Funerals Limited",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MidxQKbene9pNtD8fyT",
			"slug": "edenvalley",
			"teamName": "Eden Valley Crematorium",
			"teamType": "Regular",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-MjYV58PNgUULfA8Q5iL",
			"slug": "elitefunerals",
			"teamName": "Elite",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Myx3y17I4I35W9pUnl4",
			"slug": "eav",
			"teamName": "Eminence AV",
			"teamType": "USA",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MtAU-RhLYcxvAjeQKxy",
			"slug": "envoi",
			"teamName": "Envoi Cremation",
			"teamType": "LTS",
			"addressState": "CA",
			"addressCountry": "United States"
		},
		{
			"id": "-MgEqZuXHga8LocAzl0l",
			"slug": "ercegmcintyre",
			"teamName": "Erceg McIntyre",
			"teamType": "Propel",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-NMkBfF85zpJHy1F7j3n",
			"slug": "efbox",
			"teamName": "Eric F. Box Funeral Directors Ltd",
			"teamType": "Regular",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-M2p1BdhOtXl16a5VQm2",
			"slug": "jensen",
			"teamName": "Ern Jensen Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-MQA7gXeBJT1YNgLLwUi",
			"slug": "emf",
			"teamName": "Events Made Fabulous",
			"teamType": "Regular",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-MieCSnVqJ22G1gbsyUu",
			"slug": "everett",
			"teamName": "Everett Funeral Home",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "United States"
		},
		{
			"id": "-MhQQnuz_u6nY9jUigvA",
			"slug": "evergreen",
			"teamName": "Evergreen ",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NZitCLiUjMKui0jmYQG",
			"slug": "extras",
			"teamName": "Extras",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MaAugvkC5YBrk5rJokR",
			"slug": "fwb",
			"teamName": "F.W Barnes & Son Funeral Directors",
			"teamType": "Propel",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-O4yR_HSM3taPS_dofv3",
			"slug": "fhfcoreau",
			"teamName": "FHF Core AU",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OCfAAzrHBHQUfU1EOmE",
			"slug": "fhfcremcemplayground",
			"teamName": "FHF Crem / Cem Playground",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NxBwtxQeuMVYOMVNP7_",
			"slug": "fhfplayground",
			"teamName": "FHF Playground",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MnYPTGWabOv_nqwh2lJ",
			"slug": "fhfspanishdemo",
			"teamName": "FHF Spanish Demo",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MLk0oBoBwleNhUYXfUF",
			"slug": "fss",
			"teamName": "FUNERA",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-OAG2-nVXUVkBs4o1VLc",
			"slug": "farrelloneill",
			"teamName": "Farrell & O'Neill Funerals",
			"teamType": "",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-LbaNxU1OLIXtGyYJkvE",
			"slug": "fta",
			"teamName": "Final Touch Australia",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-NWF4wUJCfseVLCF8fU9",
			"slug": "bldemo",
			"teamName": "FireHawk Body Lab",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NOsZ7jU57xpXOB8H2hp",
			"slug": "fhfevents",
			"teamName": "FireHawk Events",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NFffPNxUXb1MZ2wD2CX",
			"slug": "fhfca",
			"teamName": "FireHawk Funerals Corp",
			"teamType": "CA",
			"addressState": "BC",
			"addressCountry": "Canada"
		},
		{
			"id": "-NFffPNxUXb1MZ2wD2Rk",
			"slug": "fhfusa",
			"teamName": "FireHawk Funerals Inc",
			"teamType": "USA",
			"addressState": "DE",
			"addressCountry": "United States"
		},
		{
			"id": "-MHtn5a3pCQa1ZToIlAh",
			"slug": "fhfuk",
			"teamName": "FireHawk Funerals Ltd",
			"teamType": "UK",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-N9Te0wRoWqkscS6Lp-R",
			"slug": "fhfnzdemo",
			"teamName": "FireHawk Funerals NZ Demo",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MDTBOwTO0BMkCakdAki",
			"slug": "fhfnzold",
			"teamName": "FireHawk Funerals NZ Old",
			"teamType": "Regular",
			"addressState": "MidCoast Council",
			"addressCountry": "Australia"
		},
		{
			"id": "-Mg9U1nHtHhbhwmwMrnu",
			"slug": "fhfpet",
			"teamName": "FireHawk Funerals Pet Demo",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NSPSYVBwfXVvRyo6pD8",
			"slug": "fhg",
			"teamName": "FireHawk Group",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MOdcb_Xvu1bAWFgqSS1",
			"slug": "fhtest",
			"teamName": "FireHawk Organisation Testing",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-L9gftt65xyhopR0N3IT",
			"slug": "resources",
			"teamName": "FireHawk Resources",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-KkmLiJkm7GmRf0gr7z9",
			"slug": "fh",
			"teamName": "FireHawkCRM",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MncpXzjQkabDpP7hcPd",
			"slug": "donations",
			"teamName": "Firehawk Donations",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MHtwQZjrJI5morFgGKc",
			"slug": "fhf",
			"teamName": "Firehawk Funerals Pty Ltd",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MHtwQZjrJI5morFgGKF",
			"slug": "fhfnz",
			"teamName": "Firehawk Funerals Pty Ltd",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-M_d6z09xdM4x23uKfw7",
			"slug": "fn",
			"teamName": "First Nations Charles Sturt University",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MhVXs9N_HGMmpn1IFTW",
			"slug": "fishwicks",
			"teamName": "Fishwicks",
			"teamType": "Regular",
			"addressState": "Cumbria",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-Lv7l1Mmwdw_IeU01d8G",
			"slug": "fitzroy",
			"teamName": "Fitzroy Funerals QLD",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-LWNuSCtOOUETaxweeeR",
			"slug": "flamindesign",
			"teamName": "Flamin Design",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LY1Ar3HchLUV6Chz8_-",
			"slug": "foi",
			"teamName": "Foi",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MOEvDaiXPUss0ytwo9W",
			"slug": "foible",
			"teamName": "Foible Enterprises Pty Ltd",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nz7UeRlmck0LY0aUqDC",
			"slug": "foresters",
			"teamName": "Foresters Financial",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-KrcK9oxppZQr6EdCNYM",
			"slug": "forestersorg",
			"teamName": "Foresters Financial",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-NCxrAT8dfjRkZn9KJdW",
			"slug": "fragment",
			"teamName": "Fragment",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "Australia"
		},
		{
			"id": "-M1TPdp9fRZD64Btz9Lf",
			"slug": "france",
			"teamName": "France Family Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NRXc4rvxpfBM_PXfZUu",
			"slug": "rivett",
			"teamName": "Frank Rivett & Sons Ltd",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MlOLF0eSRDb4MmrdNOL",
			"slug": "fjp",
			"teamName": "Fred J Potter",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NU6_I7a0iCG1u3SDvmP",
			"slug": "fred",
			"teamName": "Fred Starr",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-L5k7qgKR38dVU2-GqHx",
			"slug": "frybrosfunerals",
			"teamName": "Fry Bros",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NMkA7VQ_FC9At52X7lP",
			"slug": "fulham",
			"teamName": "Fulham Funerals",
			"teamType": "Regular",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-NApFS2lVnqHNzuAk0N0",
			"slug": "fs",
			"teamName": "Funeral Success",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-KlbNa0anwo8I3hUoIwG",
			"slug": "funerals",
			"teamName": "Funeral Testing Team",
			"teamType": "Black",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LgRDHEQOHkUpNVeAyrl",
			"slug": "beavans",
			"teamName": "G. Beavan Funerals of Bowral",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-O3aQ9GkgPLXPQvbvJHC",
			"slug": "gallagher",
			"teamName": "Gallagher Family Funeral Directors",
			"teamType": "UK",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-NFludJQ4iChXeyXS3V-",
			"slug": "galzerano",
			"teamName": "Galzerano Funeral Home Inc",
			"teamType": [
				"USA",
				"LTS"
			],
			"addressState": "",
			"addressCountry": "United States of America"
		},
		{
			"id": "-MtuhM_AeRB8fCmkGEin",
			"slug": "gardenia",
			"teamName": "Gardenia Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-LgR7k5M2DSQG8sg9EzY",
			"slug": "gateway",
			"teamName": "Gateway Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-LdNFyebssLWjS2B9usV",
			"slug": "gap",
			"teamName": "Gather + Place",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LuA7lv7PPnCjapCCNIe",
			"slug": "gen",
			"teamName": "Generation Funerals",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-MhkQlxdHlemMzC4b_R6",
			"slug": "generationfunerals",
			"teamName": "Generation Funerals",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MCKtNaulHLNTO7vLULs",
			"slug": "geraldton",
			"teamName": "Geraldton Funeral Services",
			"teamType": "Regular",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-MyimpKuokRFiRQeqpdq",
			"slug": "glenelg",
			"teamName": "Glenelg Funerals",
			"teamType": "Propel",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-NhA9Wqfzv7gtXK2CsCp",
			"slug": "gocremation",
			"teamName": "Go Cremation",
			"teamType": "LTS",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-L0fpheVgdHO_ykwIn2u",
			"slug": "gracefunerals",
			"teamName": "Grace Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NSFA68f8Sufe-Lcc7VN",
			"slug": "glf",
			"teamName": "Great Lakes Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NkYeoqTNawiU5tOxwmv",
			"slug": "funeraldiy",
			"teamName": "Green Heaven Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NBFSAT6vXlB6f5HfRTW",
			"slug": "greenhaven",
			"teamName": "Greenhaven Funerals",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LLCWhD14jzILDB9sHzk",
			"slug": "gregsonweight",
			"teamName": "Gregson & Weight",
			"teamType": "Propel",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-MuT-T4AysBKkbozqSGm",
			"slug": "hp",
			"teamName": "H. Parsons Funeral Directors",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-Ljo0p49T9GhhSaHWBUj",
			"slug": "hth",
			"teamName": "HOWSTHATHOUSE",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NOHCjhaHzojO0bWenTA",
			"slug": "hall",
			"teamName": "Hall Funerals",
			"teamType": "Propel",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-MLAjhFBk3NLlYji6DdM",
			"slug": "handley",
			"teamName": "Handley Funeral Services",
			"teamType": "Propel",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-O23hH_6zUnORBpuCRa5",
			"slug": "harmony",
			"teamName": "Harmony Asian Funeral Directors ",
			"teamType": "UK",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-MecXmY1MjNKakkckick",
			"slug": "harrison",
			"teamName": "Harrison Funerals",
			"teamType": "Regular",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-NbD2YkF-3nWQ-ab0T_C",
			"slug": "harts",
			"teamName": "Harts Family Funerals",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-NBWgeFGcgj3iABwz2TR",
			"slug": "heald",
			"teamName": "Heald Funeral Home",
			"teamType": "LTS",
			"addressState": "VT",
			"addressCountry": "United States"
		},
		{
			"id": "-N65W4pdWbpgJ86Ap03Z",
			"slug": "heaven",
			"teamName": "Heaven Funerals",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-LR9EpUwAT-NQu69sCwp",
			"slug": "heritage",
			"teamName": "Heritage & Heritage Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-MFELQ6LRLuEm4bPs3yz",
			"slug": "heritagebrothers",
			"teamName": "Heritage Brothers Funeral Services",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-Nm8suJNnFzQ0X3FPNCV",
			"slug": "hetherington",
			"teamName": "Hetherington Funerals",
			"teamType": "Regular",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-Mx74L8p5x8XSW0V5OkS",
			"slug": "hed",
			"teamName": "Higher Education",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-N4Vv4bGK4KnnPH-2UkC",
			"slug": "hillier",
			"teamName": "Hillier Funeral Service",
			"teamType": "UK",
			"addressState": "",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-MoLSW1Bq4a9mbv3rhII",
			"slug": "hinkle",
			"teamName": "Hinkle",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LXc0o6pxB3815LQQPlh",
			"slug": "hookd",
			"teamName": "Hookd",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nysh0SVsehr2z5Qc1F4",
			"slug": "hopeandsons",
			"teamName": "Hope and Sons Funeral Directors",
			"teamType": "InvocareNZ",
			"addressState": "Otago",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-OBNWa4q-PHObrn2MA7_",
			"slug": "humbercollege",
			"teamName": "Humber Memorial Chapel Funeral Home",
			"teamType": "CA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-MgmVYMzfjCaM_lr2Wm0",
			"slug": "hyqual",
			"teamName": "Hyqual",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-KtybCRY2r4ZPGFsD_KV",
			"slug": "ironwood",
			"teamName": "IRONWOOD TAREE PTY LTD",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NwxCGQF7pDTX6NNoCcG",
			"slug": "ivcautest",
			"teamName": "IVC AU TEST",
			"teamType": "InvocareAU",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NxCj6spiGB9WvCvsSum",
			"slug": "ivcnztest",
			"teamName": "IVC NZ TEST",
			"teamType": "InvoCare",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LNN4WRBo_69Vs-Wbss_",
			"slug": "immensus",
			"teamName": "Immensus Capital",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-MlmnnJi7I8F-hT36hpr",
			"slug": "integrity",
			"teamName": "Integrity Funeral Services Pty Ltd",
			"teamType": "Propel",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-O7QwjY0JRxYHwUydprT",
			"slug": "invocarenz",
			"teamName": "InvoCare New Zealand",
			"teamType": "InvocareNZ",
			"addressState": "",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-NS98FThTL2piIHB5vtQ",
			"slug": "markfield",
			"teamName": "J Markfield",
			"teamType": "Regular",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-NHXV7AlN7_-tNukvl3g",
			"slug": "jnd613286631",
			"teamName": "JND扶莉宋613286631",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-L_GFFVzjwFePrf_0Rjj",
			"slug": "jackandco",
			"teamName": "Jack and Co",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NL_bZRxpGzCkEJn5gr4",
			"slug": "janfield",
			"teamName": "Jan Field",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NCVAVnHZ0kHUHerTj7v",
			"slug": "jmp",
			"teamName": "Jen Mason Photography",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MtppVM5Bn7jwsjzZoHl",
			"slug": "glencross",
			"teamName": "Jill Glencross Independent Funeral Directors Ltd",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-OBiEPtUf3Ed93jWK21K",
			"slug": "jwfs",
			"teamName": "John Wheatley Funeral Services",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-N5D-dwGR80MLA8rLg7g",
			"slug": "unused",
			"teamName": "John Wheatley Funeral Services",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-M_YmHgwxW9Irnyvdoad",
			"slug": "jh",
			"teamName": "Julie Harwood Funerals",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-M0zf4k9eMNDS3OGB3KP",
			"slug": "kl",
			"teamName": "Karen Lister",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MfBlhN9y8iYJb7aEnVi",
			"slug": "keatings",
			"teamName": "Keatings Funerals",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": ""
		},
		{
			"id": "-MFd93AFs13NMN5ULktX",
			"slug": "kentonross",
			"teamName": "Kenton Ross Funerals",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-ODdnkDSuiV8DpMht8Qx",
			"slug": "kleemann",
			"teamName": "Kleemann Funerals",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NPuqAlGjyc5HJf56Hul",
			"slug": "lhtest",
			"teamName": "LH Test",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-KqeO7YKwBXL-xecRh4D",
			"slug": "ltsca",
			"teamName": "LT Solutions for FireHawk Funerals Corp.",
			"teamType": "USA",
			"addressState": "BC",
			"addressCountry": "Canada"
		},
		{
			"id": "-KqeO7YKwBXL-xecRh3z",
			"slug": "lts",
			"teamName": "LT Solutions for FireHawk Funerals Inc",
			"teamType": "USA",
			"addressState": "CO",
			"addressCountry": "United States"
		},
		{
			"id": "-NJriM3E79pYxHj-ihJ3",
			"slug": "laf",
			"teamName": "Lady Anne Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-OBNGhNZ_i0HkNxc873t",
			"slug": "lakeview",
			"teamName": "Lakeview Crematorium",
			"teamType": "CA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-M1hfngNLrE4vhzFyDBM",
			"slug": "lh",
			"teamName": "Lamb & Hayward",
			"teamType": "Regular",
			"addressState": "Canterbury",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-O0wWhvHY5eJruF-rkeg",
			"slug": "lht",
			"teamName": "Lamb & Hayward Testing",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Lz-sCs2FYYuHqSq8DNX",
			"slug": "lvfs",
			"teamName": "Latrobe Valley Funeral Services",
			"teamType": "Propel",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-N4I3LoOECc8TbcdW-EL",
			"slug": "ltsuk",
			"teamName": "Legacy Tribute UK",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-MVPTSIhr2aL0pabapbU",
			"slug": "reen",
			"teamName": "Lehman, Reen, & McNamara Funeral Home",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "United States of America"
		},
		{
			"id": "-Mi40wZWirSWRNJPpOCJ",
			"slug": "lemex",
			"teamName": "Lemex",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-MmLIwU3XiZeA_0dWSlJ",
			"slug": "lwf",
			"teamName": "Les Watkins Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-L5lXZnr3Bn-guYU1flU",
			"slug": "lesterandson",
			"teamName": "Lester & Son",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-ODdowdFNHqt0xjo-Psh",
			"slug": "lethborg",
			"teamName": "Lethborg Family Funerals",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MZApDCmCFbOKLwJXZ2O",
			"slug": "lightfoot",
			"teamName": "Lightfoot Funerals",
			"teamType": "Propel",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LqE7LGT9QOtflAPGUKm",
			"slug": "lilleywhite",
			"teamName": "Lilleywhite Funeral Service",
			"teamType": "Regular",
			"addressState": "Greater Manchester",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-LM6LLcznY8h8yLA_XYe",
			"slug": "lfg",
			"teamName": "Logan Funerals (Goondiwindi)",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-LGTRLY9ECpLif8fhAVI",
			"slug": "lfm",
			"teamName": "Logan Funerals (Moree)",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-L5k7cL0orrb4AkpykHB",
			"slug": "lfn",
			"teamName": "Logan Funerals (Narrabri)",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LMLqP1FcFzAsnlniMUd",
			"slug": "lfa",
			"teamName": "Logan Funerals Admin",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-Nn6uTRGSjvPtYjI51PW",
			"slug": "lrf",
			"teamName": "Lonergan & Raven Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-Nl0nTiZYCti7GUUsYEk",
			"slug": "ravens",
			"teamName": "Lonergan and Raven",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nl0iV0_AflEKLkgtqLu",
			"slug": "ravensfunerals",
			"teamName": "Lonergan and Raven",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NFzXEd7LKR4D72XtBk-",
			"slug": "fhfcremations",
			"teamName": "Lorem Cremations",
			"teamType": "UK",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-N65SQQZNT1PSih1l0Aw",
			"slug": "fhfcademo",
			"teamName": "Lorem Funeral Home",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "Canada"
		},
		{
			"id": "-KyTV-ZKdQjZKoMCOf8X",
			"slug": "fhfdemo",
			"teamName": "Lorem Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-KyTV-ZKdQjZKoMCOf8Y",
			"slug": "fhfusademo",
			"teamName": "Lorem Funerals",
			"teamType": "Regular",
			"addressState": "MA",
			"addressCountry": "United States"
		},
		{
			"id": "-MDTMMre7m5Pig8dPuKu",
			"slug": "fhfukdemo",
			"teamName": "Lorem Funerals UK",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-MDTMMre7m5Pig8deDc3",
			"slug": "fhfukdioc",
			"teamName": "Lorem Funerals UK",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-NCcbxndQv2gTVmJX2lG",
			"slug": "fhfusasdemo",
			"teamName": "Lorem Suppliers",
			"teamType": "USA",
			"addressState": "MA",
			"addressCountry": "United States"
		},
		{
			"id": "-M564YvZryLvyydnh_f5",
			"slug": "lmf",
			"teamName": "Lovell Meizer Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NrCquBZKncNPGrqjsn0",
			"slug": "mfghumeregion",
			"teamName": "MFG Hume Region",
			"teamType": "Propel",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-Mi4AdGSDTcmdVME_jot",
			"slug": "meadow",
			"teamName": "MFG Northern Rivers",
			"teamType": "Propel",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-M-IdkCRkA1U3kE2fgd7",
			"slug": "mackay",
			"teamName": "Mackay Family Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-M6DTD4hpLjN4YnvcDW8",
			"slug": "macqueens",
			"teamName": "Macqueens Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-MVP1RIWrmOwAijMz5XS",
			"slug": "magoun",
			"teamName": "Magoun-Biggins Funeral Home",
			"teamType": "LTS",
			"addressState": "MA",
			"addressCountry": "United States"
		},
		{
			"id": "-LnzAuyb9ael641eOrU8",
			"slug": "mglmg",
			"teamName": "Manning Great Lakes Memorial Gardens",
			"teamType": "Propel",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MQpJmR-_mYoBSF51Ga_",
			"slug": "marcfoi",
			"teamName": "Marc Foi",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LbfoL1sJsNPcMqz5SwA",
			"slug": "mp",
			"teamName": "Mason Park Funerals",
			"teamType": "Propel",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-NWG-TwsoFx3yevarUl0",
			"slug": "mauricermoroney",
			"teamName": "Maurice R. Moroney & Co",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NS5vEOdOxpHPD_gE3R5",
			"slug": "mazar",
			"teamName": "Mazar Partners",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MzxATz8o-eX_QHwdzIH",
			"slug": "mmlfh",
			"teamName": "McCarthy, McKinney & Lawler Funeral Home & Cremation Services",
			"teamType": "Regular",
			"addressState": "MA",
			"addressCountry": "United States"
		},
		{
			"id": "-M0ubBLlJwuiCCyHmwcv",
			"slug": "mhf",
			"teamName": "McGlynn Hunt Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-Mid3nUJqd5ae6-V2mBZ",
			"slug": "merindajayne",
			"teamName": "MerindaJayne",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NIUHgE7dyPa17gtwww0",
			"slug": "michaelcrawford",
			"teamName": "Michael Crawford Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-LMljNWyHBRC3LaYuqDS",
			"slug": "midwest",
			"teamName": "Mid West Funerals",
			"teamType": "Regular",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-LmqdNV43sJEBVwm24Om",
			"slug": "millingtons",
			"teamName": "Millingtons Funeral Service Pty Ltd",
			"teamType": "Propel",
			"addressState": "TAS",
			"addressCountry": "Australia"
		},
		{
			"id": "-KuSaH7_raHC36rHuros",
			"slug": "miltonulladulla",
			"teamName": "Milton Ulladulla Funeral Services",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LqYTCE4uK8GLi_Ah3Ec",
			"slug": "zalycomau",
			"teamName": "Monkhouse",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MhqNvEnaUfhiK4lo3yx",
			"slug": "morleystest",
			"teamName": "Morleys Funeral Home",
			"teamType": "Propel",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NxqsznUTl-EFme_WwpJ",
			"slug": "morleys",
			"teamName": "Morleys Funerals",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-N1BaRyp__9Xe7pnZW9f",
			"slug": "mvc",
			"teamName": "Mountain View Crematoria",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-L6E3mIoEVzl8Cz24D82",
			"slug": "mulqueenfamilyfunerals",
			"teamName": "Mulqueen Family Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-KksUYmotvGfajMHd8n2",
			"slug": "murphyff",
			"teamName": "Murphy Family Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MzwEypAcbR5bAn5dCg7",
			"slug": "mrfh",
			"teamName": "Murphy Ruffenach Brian W. Donnelly Funeral Home",
			"teamType": "LTS",
			"addressState": "Pennsylvania",
			"addressCountry": "United States"
		},
		{
			"id": "-O6xWTeDkmZQUqOa7QBD",
			"slug": "nkharvey",
			"teamName": "N & K Harvey Funerals",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OClBKlvpkMZ-QkJ8UhK",
			"slug": "nafd",
			"teamName": "NAFD",
			"teamType": "",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-LupM2IwsTDKVBRBv5P1",
			"slug": "ndis",
			"teamName": "NDIS",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-L6E4oKvnMHrUiEQ1pGe",
			"slug": "napierparkfunerals",
			"teamName": "Napier Park Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-ME6jVyo57nPTEjp6xfP",
			"slug": "naturalgrace",
			"teamName": "Natural Grace",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-O0NaYIt7oGKrCkMQdcY",
			"slug": "naturalgracehcc",
			"teamName": "Natural Grace Hunter Central Coast Pty Ltd",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-O0NatsKXoa4KoAhM0Hb",
			"slug": "naturalgracewarrnambool",
			"teamName": "Natural Grace Warrnambool Pty Ltd",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-NHh0qbLBrCv3vzaTp-F",
			"slug": "nepean",
			"teamName": "Nepean Valley Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NOm9aKtVz3apf2MnPxL",
			"slug": "funeraltesting",
			"teamName": "New Funeral Testing",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MjDJBsozEyUfhsr50qP",
			"slug": "newhaven",
			"teamName": "Newhaven Funerals NQ",
			"teamType": "Propel",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-NQ7_IuRgnvN91GDkwaq",
			"slug": "newy",
			"teamName": "Newy Event Collective",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LSveVDymqibufAgLGCi",
			"slug": "nielsenfunerals",
			"teamName": "Nielsen Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-L07UUXajiwzqpz1G_bK",
			"slug": "nielsenkellerman",
			"teamName": "Nielsen Kellerman",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MQV1NSx7rTxI8JWRQOV",
			"slug": "ninness",
			"teamName": "Ninness Funeral Home",
			"teamType": "Regular",
			"addressState": "Wellington",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-L9D1R62yix0P1OD1hrK",
			"slug": "northeastfunerals",
			"teamName": "North East Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-MCB8mQzGNP5PvQDhBoo",
			"slug": "nwf",
			"teamName": "North West Funerals",
			"teamType": "Propel",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-O97tI7rmkawG-fTErm2",
			"slug": "norton",
			"teamName": "Norton McKinney & Lawler",
			"teamType": "",
			"addressState": "MA",
			"addressCountry": "United States"
		},
		{
			"id": "-LuALCtWpG4R98c2kemn",
			"slug": "nova",
			"teamName": "Nova Women",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MuwbmUdWb76TfkrxgYB",
			"slug": "obrien",
			"teamName": "O'Brien Funeral Home",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NWhSjM0Apm9hqhWRM6F",
			"slug": "olgapiehler",
			"teamName": "Olga Piehler",
			"teamType": "Regular",
			"addressState": "OH",
			"addressCountry": "United States"
		},
		{
			"id": "-NqzY4HJIrYRg4rBaO86",
			"slug": "olsens",
			"teamName": "Olsens Farewells",
			"teamType": "Propel",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NQMhznhgonRicAx-V5W",
			"slug": "onboardtest",
			"teamName": "Onboard Test",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NQMjCFpqWQKLu-3zORu",
			"slug": "onboardtest2",
			"teamName": "Onboard Test",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NQYLvLRntEVe3i5zG0G",
			"slug": "onboardtest3",
			"teamName": "Onboard Test",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-KyrXNzwMWc4fXM-5-Rk",
			"slug": "od",
			"teamName": "Organisation Demo",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "Australia"
		},
		{
			"id": "-KknmlVeYyrCyqpfbpgw",
			"slug": "organisation",
			"teamName": "Organisation Testing Team",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NsL0Hbd3DGaJ_7i9Ibt",
			"slug": "outback",
			"teamName": "Outback Funerals",
			"teamType": "Regular",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-NQsXHyyhwcfcyI1U-Np",
			"slug": "pfpnz",
			"teamName": "PFP (NZ) Limited",
			"teamType": "Propel",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NW5XY6VVWnRpYQRj_En",
			"slug": "pfpdemo",
			"teamName": "PFP Demo",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nai_8020yW0bG15PpJM",
			"slug": "patersons",
			"teamName": "Paterson's Funeral Services",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-MpOnbpOJMMqMIX_5MTw",
			"slug": "plfs",
			"teamName": "Paul Lahood Funeral Services",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MkoBC67RUN4BFv5VkbU",
			"slug": "petheaven",
			"teamName": "Pet Heaven NQ",
			"teamType": "Propel",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-LLbCqqfH06sMz80tf7r",
			"slug": "petercoxandson",
			"teamName": "Peter Cox & Son Funeral Directors",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-Lnj3e1ExgpAOkXPUvQF",
			"slug": "elberg",
			"teamName": "Peter Elberg Funerals",
			"teamType": "Regular",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-N2ty_4e7_Ec4ufuC-9b",
			"slug": "petsrip",
			"teamName": "Pets RIP",
			"teamType": "Propel",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-L5B4EbQwCTieA9l1InD",
			"slug": "pettigrewff",
			"teamName": "Pettigrew Family Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-Lce1vH7Zf1KXxCwP6cc",
			"slug": "piddingtons",
			"teamName": "Piddington's Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MixFZZfrev6tIcWUhxr",
			"slug": "pinegrove",
			"teamName": "Pinegrove Funerals",
			"teamType": "Propel",
			"addressState": "TAS",
			"addressCountry": "Australia"
		},
		{
			"id": "-NklS-d3IEraOHrknH4S",
			"slug": "poolconsult",
			"teamName": "Pool Consult",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MtGFbY7VikehWji-M4c",
			"slug": "premier",
			"teamName": "Premier Funeral Group",
			"teamType": "Propel",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-Lcj59Qn6AafJ5p_qDi2",
			"slug": "pg",
			"teamName": "Prime Graphix",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-MW7dsPJ3VQjKuoAggaX",
			"slug": "pfp",
			"teamName": "Propel Funeral Partners",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NpAh3OYjV0yNy8VsBu9",
			"slug": "reelestatephotography",
			"teamName": "ReelEstate Photography",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MhlclKCtsXHP7ZhoERi",
			"slug": "rou",
			"teamName": "Rely On Us Services",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LLS3timdqv33TWCPDGC",
			"slug": "riverlandfunerals",
			"teamName": "Riverland Funerals",
			"teamType": "Regular",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-MyGAcWODs0O7etaTEUA",
			"slug": "rnf",
			"teamName": "Robert Nelson Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-MXVjqRspvpVAEvCTBqB",
			"slug": "zaya",
			"teamName": "Roberts",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LwAayqzEohZne6LxZqV",
			"slug": "roccstar",
			"teamName": "RoccStar PR",
			"teamType": "Regular",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-LR9q6hddaquNlfx72JJ",
			"slug": "rossfunerals",
			"teamName": "Ross Funerals",
			"teamType": "Propel",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-NuQvOz5dQW2z2YVzi2L",
			"slug": "rowland",
			"teamName": "Rowland Brothers International",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NtJilDPR4oLeMiduWxs",
			"slug": "rushnellcrematoriums",
			"teamName": "Rushnell Crematoriums Inc.",
			"teamType": "USA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-NOm9M5RUtrhJ94A7d-G",
			"slug": "rushnellbelleville",
			"teamName": "Rushnell Funeral Homes Inc. Belleville",
			"teamType": "USA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-NtJg2oeQqCkhJKSv6W-",
			"slug": "rushnellbrighton",
			"teamName": "Rushnell Funeral Homes Inc. Brighton",
			"teamType": "USA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-NtJhe7-HpzF-IL5Vo6g",
			"slug": "rushnellmadoc",
			"teamName": "Rushnell Funeral Homes Inc. Madoc",
			"teamType": "USA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-NtJiBvW_FfkVwydNYpQ",
			"slug": "rushnellmarmora",
			"teamName": "Rushnell Funeral Homes Inc. Marmora",
			"teamType": "USA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-NtJgbp0BXuSTdSuCI_Z",
			"slug": "rushnellpicton",
			"teamName": "Rushnell Funeral Homes Inc. Picton",
			"teamType": "USA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-NtJetqlTAt4LoDWKKRf",
			"slug": "rushnelltrenton",
			"teamName": "Rushnell Funeral Homes Inc. Trenton",
			"teamType": "USA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-NtJh9DPaxgo_plh2sAC",
			"slug": "rushnelltweed",
			"teamName": "Rushnell Funeral Homes Inc. Tweed",
			"teamType": "USA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-N_X1SyC6wikXoGEoG5e",
			"slug": "sacremation",
			"teamName": "SA Cremation Services",
			"teamType": "Regular",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-O9O2J26R5RycD4yBA8M",
			"slug": "spgay",
			"teamName": "SPGAY",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Lbg3DDB1NBcA4GCqk3b",
			"slug": "semmens",
			"teamName": "Semmens Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-NJHw7QAvIWCoNhdmM9T",
			"slug": "shf",
			"teamName": "Shaun Hamilton Funerals Pty Ltd",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MO3QGGexOI280FH3I1u",
			"slug": "silva",
			"teamName": "Silva Funeral Home",
			"teamType": "LTS",
			"addressState": "MA",
			"addressCountry": "United States"
		},
		{
			"id": "-MO4VwTxc5EJxKjYt2a9",
			"slug": "smith",
			"teamName": "Smith Funeral & Memorial Services",
			"teamType": "LTS",
			"addressState": "RI",
			"addressCountry": "United States"
		},
		{
			"id": "-LiulcCKHzDIGCZMPCDZ",
			"slug": "sro",
			"teamName": "Smokerite Ovens",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NVdjOrTXs3I-jcsrN7B",
			"slug": "southern",
			"teamName": "Southern Co-operative Funerals",
			"teamType": "Regular",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-NVdjOrTXs3I-jcsrN7X",
			"slug": "sct",
			"teamName": "Southern Test",
			"teamType": "Regular",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-NTujXMwefPWAzfh2zN2",
			"slug": "southwest",
			"teamName": "Southwest Crematoriums",
			"teamType": "USA",
			"addressState": "ON",
			"addressCountry": "Canada"
		},
		{
			"id": "-NCaAbcIyhFW2uDZCPqW",
			"slug": "squeaky",
			"teamName": "Squeaky Cleaners",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-NCa8W-YnKRmrhCdLXTg",
			"slug": "sqyclnrs",
			"teamName": "Squeaky Cleaners",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NGtuMZRnOfQ4cxpFUn2",
			"slug": "sfg",
			"teamName": "Sustainable Funerals Group",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-LCX0MgYJQCabhfNTvsB",
			"slug": "swanhillanddistrictfunerals",
			"teamName": "Swan Hill & District Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-L3Q2VBDC3HTyEIs8fXS",
			"slug": "swanhillpools",
			"teamName": "Swan Hill Pools & Spas",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-N7KkywfyXb4iUJ4I943",
			"slug": "swindonmemorials",
			"teamName": "Swindon Memorials",
			"teamType": "UK",
			"addressState": "",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-MS1BKNVoBSf2jS_roO1",
			"slug": "sf",
			"teamName": "Sylvan Funerals",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-NRVGm7WIGX65R5744Hr",
			"slug": "cribb",
			"teamName": "T Cribb & Sons",
			"teamType": "Cribb",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-M_rrammjYjsmwG1GjH3",
			"slug": "delete",
			"teamName": "T J Scott and Son",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LgRBAKWs8JF9GYBRTMz",
			"slug": "tjandrews",
			"teamName": "T.J Andrews Funeral Services",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LFa9R6MhoPYdl3U_PFR",
			"slug": "burstows",
			"teamName": "T.S. Burstow Funerals",
			"teamType": "Regular",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-NkSdFCSla1PJ5nBFFEG",
			"slug": "tsb",
			"teamName": "T.S. Burstows Testing Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NS4Mal6eV6EcN5jUwEJ",
			"slug": "tcs",
			"teamName": "TCS Exhumation Services Ltd",
			"teamType": "UK",
			"addressState": "England",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-LCgq3tY3Z5vxOhG4a2x",
			"slug": "tjscottandson",
			"teamName": "TJ Scott and Son",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-NGtzGkowH6WkFsElr1v",
			"slug": "taylord",
			"teamName": "Taylor'd Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MvaD7d204H2odzpY1Au",
			"slug": "teamtaree",
			"teamName": "Team Taree",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LoxdoE7YvHGpaRMwZhA",
			"slug": "territory",
			"teamName": "Territory Funerals",
			"teamType": "Regular",
			"addressState": "NT",
			"addressCountry": "Australia"
		},
		{
			"id": "-Ncar0_6HwxLJ1nPxZX-",
			"slug": "localtest",
			"teamName": "Test",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NY_-eBFG-czDWYah-cZ",
			"slug": "luke",
			"teamName": "Test",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NK7_TKZwBDeDVZZj_y_",
			"slug": "test245",
			"teamName": "Test 2",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NP-ty-QIxbHP2PN1V4z",
			"slug": "testfuneral",
			"teamName": "Test Funeral",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NP-dSIARHpXsOwW0Gvc",
			"slug": "testonboard",
			"teamName": "Test Onboard",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nice_tgaU_ZLsn6wMxr",
			"slug": "newtest",
			"teamName": "Test Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nicei4-DF4GQGuUst0C",
			"slug": "newtests",
			"teamName": "Test Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nibs4AxMJfTHnP7T3Dc",
			"slug": "ttesting",
			"teamName": "Test Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nibs7aoDL64O2t5VkbP",
			"slug": "ttestings",
			"teamName": "Test Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Nicagec99TBOyPnDy61",
			"slug": "tttestings",
			"teamName": "Test Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NicaqHKZ71UzWDpzCRs",
			"slug": "ttttestings",
			"teamName": "Test Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NicazZRe-uCZHlcGNnc",
			"slug": "tttttestings",
			"teamName": "Test Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LyafAvhUR7XeVa0AdvQ",
			"slug": "tester",
			"teamName": "Tester",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4Qi6jXzczpbbT7NBH",
			"slug": "tfhome",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4VCFSesQWgFhBAIgq",
			"slug": "tfhome10",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4RMyagGHXJIcLinf_",
			"slug": "tfhome2",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4Ros3yrc5hHIwekTy",
			"slug": "tfhome3",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4S1QSyLVAkXSi93jE",
			"slug": "tfhome4",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4SV4LXihKgkbADng7",
			"slug": "tfhome5",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4SoAoKy8J0WbjUyk9",
			"slug": "tfhome6",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4TyFAUuwIbnk938fA",
			"slug": "tfhome7",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4U8Cmwe6mchadI4co",
			"slug": "tfhome8",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4Ul2J-j2YX-aLcRt3",
			"slug": "tfhome9",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-OB4UwT1XbLwI2gWmZJb",
			"slug": "tfhome9",
			"teamName": "Testing Funeral Home",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-Ldh0m53XXJ3RJaTDygG",
			"slug": "testing",
			"teamName": "Testing Team",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NRm607eaf2Jhrq3jZYx",
			"slug": "thdb",
			"teamName": "Thdb",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-M4HFELB_1N1Q0taZnDb",
			"slug": "aie",
			"teamName": "The Australian Institute of Embalming",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-NtqzPVhdAc0tohw-SoY",
			"slug": "tbhc",
			"teamName": "The Beautiful Home Company",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NGVZoaGjnAgcGuiy4xa",
			"slug": "brenan",
			"teamName": "The Brenan Group Ltd.",
			"teamType": "LTS",
			"addressState": "NB",
			"addressCountry": "Canada"
		},
		{
			"id": "-Nj4xjstlowbs-TzPjeS",
			"slug": "carter",
			"teamName": "The Carter Family Trust",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NSpNXpb0mn7FdFrBWv8",
			"slug": "lasthurrah",
			"teamName": "The Last Hurrah",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-KqeO7YKwCXL-xecRh8o",
			"slug": "mw",
			"teamName": "The MazWell Group",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-KqeO7YKwCXL-xecRh8Z",
			"slug": "mwuk",
			"teamName": "The MazWell Group UK",
			"teamType": "Regular",
			"addressState": "Hampshire",
			"addressCountry": "United Kingdom of Great Britain and Northern Ireland"
		},
		{
			"id": "-NOSZrAe0NXqWIl6otuo",
			"slug": "thephatwag",
			"teamName": "The Phat Wag",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LhY7vqM_rHsSM7PeASK",
			"slug": "tsl",
			"teamName": "The Shed Luxe",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LhJWvs8hoBkFgnEWXhZ",
			"slug": "walkergroup",
			"teamName": "The Walker Group",
			"teamType": "Regular",
			"addressState": "CHANGE THIS",
			"addressCountry": "Australia"
		},
		{
			"id": "-NTy2E_Hs4REDCPr0O80",
			"slug": "wilbert",
			"teamName": "The Wilbert Group",
			"teamType": "USA",
			"addressState": "KS",
			"addressCountry": "United States"
		},
		{
			"id": "-KwCTSKoHgV_gdX0kveL",
			"slug": "thefeedbackteam",
			"teamName": "TheFeedbackTeam",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MZBaYngnpbmLwXpxCcb",
			"slug": "thompson",
			"teamName": "Thompson Family Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-MOnImdKf8kUAM4nC01P",
			"slug": "timeless",
			"teamName": "Timeless Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-N_qzE5U1XcNYoLdG5Oh",
			"slug": "tobin",
			"teamName": "Tobin Brothers Funerals",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MpFNgGKoMauzyeHWbEw",
			"slug": "tmf",
			"teamName": "Tony Monte Funerals",
			"teamType": "Regular",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-Mqzw3sX7QLsusyspJlH",
			"slug": "trenerry",
			"teamName": "Trenerry Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MKCfGkmny6pDWhzyPOM",
			"slug": "tribute",
			"teamName": "Tribute Funeral Services",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-MFcJ0Moc4uBDsyRY3vx",
			"slug": "ultimatepools",
			"teamName": "Ultimate Pools Ltd",
			"teamType": "Regular",
			"addressState": "Auckland",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-Nxqp5tNcN05eLnY-AyK",
			"slug": "unity",
			"teamName": "Unity Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NdEuB3Wh_Q4MQPJl3e3",
			"slug": "adelaideuni",
			"teamName": "University of Adelaide",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NSKjkOrQYQQyIRdUJ2E",
			"slug": "vtfcs",
			"teamName": "Valley Funeral and Cremation Center",
			"teamType": "LTS",
			"addressState": "CA",
			"addressCountry": "United States"
		},
		{
			"id": "-NLXoNx8-aM6oyENZ75v",
			"slug": "victoriaville",
			"teamName": "Victoriaville & Co",
			"teamType": "USA",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-L5vWs7VZ01KJjN23Boz",
			"slug": "victousa",
			"teamName": "Victoriaville & Co USA",
			"teamType": "Regular",
			"addressState": "NY",
			"addressCountry": "United States"
		},
		{
			"id": "-LsnkCiWACwzKa_VBN4G",
			"slug": "vincent",
			"teamName": "Vincent Funerals",
			"teamType": "Regular",
			"addressState": "TAS",
			"addressCountry": "Australia"
		},
		{
			"id": "-NEYHj_j0mQ2SzC8dvic",
			"slug": "virgo",
			"teamName": "Virgo Funeral Services",
			"teamType": "Propel",
			"addressState": "QLD",
			"addressCountry": "Australia"
		},
		{
			"id": "-NYMNm-gryUZ_EVK-_4Z",
			"slug": "wtdennis",
			"teamName": "W T Dennis & Son",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-L9N2_xqPSw-kdl5GErf",
			"slug": "wbstest",
			"teamName": "WBS Test",
			"teamType": "Regular",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-LXpVHZgmb4uWqcpRyke",
			"slug": "wth",
			"teamName": "WT Howard Funerals",
			"teamType": "Propel",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MaBysLDD26LNm3nvZUc",
			"slug": "unique",
			"teamName": "Walkden Funerals LTD",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-NzX1tA4baw-cnmqMwUM",
			"slug": "waltercarterfunerals",
			"teamName": "Walter Carter Funerals",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MKlVcsaMhGwOj4z_jxd",
			"slug": "watercocomm",
			"teamName": "WaterCo Commercial",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-LaSnUsvtux2PVfEUDT6",
			"slug": "waterco",
			"teamName": "Waterco",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-NKTZZ67ef6nVRk3rx7F",
			"slug": "westmach",
			"teamName": "Westmach Ltd",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NzgWFkyGTzCvglFq2wd",
			"slug": "westview",
			"teamName": "Westview Crematorium",
			"teamType": "InvocareNZ",
			"addressState": "",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-NysxpF3cVn4QGaox5fx",
			"slug": "whitestone",
			"teamName": "Whitestone Funerals",
			"teamType": "InvocareNZ",
			"addressState": "Otago",
			"addressCountry": "New Zealand"
		},
		{
			"id": "-O69faDMUqHES9WbMVsh",
			"slug": "whitsunday",
			"teamName": "Whitsunday Funerals & Crematorium",
			"teamType": "",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NcfjFkJxlvDRxQ7GAaS",
			"slug": "willed",
			"teamName": "Willed Funerals",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-NgGbe_wf0HioY3qiy55",
			"slug": "wbtest",
			"teamName": "William Barrett Testing",
			"teamType": "Regular",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-L9N2_xqPSw-kdl5Ggf0",
			"slug": "williambarrettandsons",
			"teamName": "William Barrett and Sons",
			"teamType": "Regular",
			"addressState": "WA",
			"addressCountry": "Australia"
		},
		{
			"id": "-LCbVbvQAlzFKDKtpKrZ",
			"slug": "williamfarmer",
			"teamName": "William Farmer Funeral Directors",
			"teamType": "Regular",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-Nyt1iYASbLLUpYpqY-k",
			"slug": "williammatthews",
			"teamName": "William Matthews Funerals",
			"teamType": "InvocareAU",
			"addressState": "VIC",
			"addressCountry": "Australia"
		},
		{
			"id": "-LCbUsJwNFA7KRUniuuY",
			"slug": "williamsfunerals",
			"teamName": "Williams Funeral Services",
			"teamType": "Propel",
			"addressState": "SA",
			"addressCountry": "Australia"
		},
		{
			"id": "-NRaPXezM8iRmA4EGCrB",
			"slug": "willows",
			"teamName": "Willows",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": "United Kingdom"
		},
		{
			"id": "-N35t1rxd-QpJeuIfCZ4",
			"slug": "wise",
			"teamName": "Wise Products Inc",
			"teamType": "USA",
			"addressState": "",
			"addressCountry": "United States of America"
		},
		{
			"id": "-LFtEUZaFlkyststwpBD",
			"slug": "word",
			"teamName": "Word Investments",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LT5bHuba46HfHfLTNzI",
			"slug": "wrayowen",
			"teamName": "Wray Owen Funerals",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MoaFzz6rMM5zC4gwyb1",
			"slug": "man",
			"teamName": "Zackary Banks",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MFZ_G8w_vvafRV5wgZi",
			"slug": "bevbomb",
			"teamName": "bevbomb",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LXcC19C9Evq-F5JtkNa",
			"slug": "bevbombs",
			"teamName": "bevbombs",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-M2Dr9pHxub_XzkcN-WI",
			"slug": "williams",
			"teamName": "caitlin",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-NK11D8MBEPvyy3bcL6F",
			"slug": "hummerit",
			"teamName": "ewrty",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-N2KjQJoaFQnoCoFOnYs",
			"slug": "htgeraldton",
			"teamName": "geraldton funeral services",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-N2Kpc8ec-P_tPT54iei",
			"slug": "httpgeraldton",
			"teamName": "geraldton funeral services",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-N2KZ6vcFELXXanYN5Oi",
			"slug": "geraldtonfuneralservices",
			"teamName": "geraldtonfuneralservices",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-N2KqF_EOZTXHO-amF8h",
			"slug": "http",
			"teamName": "http geraldton ",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-KubcTDQCmTDGj1Lyg26",
			"slug": "ichallenge",
			"teamName": "iChallenge Finance",
			"teamType": "Regular",
			"addressState": "NSW",
			"addressCountry": "Australia"
		},
		{
			"id": "-MVRFKT8Imaq2qkFuj-8",
			"slug": "me",
			"teamName": "me",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LmmZX9-8J4dnQ7EXaQ4",
			"slug": "mulqueenff",
			"teamName": "mulqueenfamilyfunerals",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MxkKzssEZgzTdEToieR",
			"slug": "sandra",
			"teamName": "sandra",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-M1eicgvKUPjfRtXIl9W",
			"slug": "test",
			"teamName": "test",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LXpysybHpNvM9gxMmLQ",
			"slug": "test2",
			"teamName": "test2",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MVT2QGoiPwFTDQdoWHP",
			"slug": "testingbooks",
			"teamName": "testingbooks",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-LdkMONwvYodE-z7DJ_i",
			"slug": "ee",
			"teamName": "tt",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		},
		{
			"id": "-MFbdYHg8j-BpTfrp7kn",
			"slug": "diana",
			"teamName": "white",
			"teamType": "Regular",
			"addressState": "",
			"addressCountry": ""
		}
	];

	teams.forEach((team) => {
		if (Array.isArray(team.teamType)) {
			team.teamType_lower = team.teamType.forEach((teamType) => teamType = teamType.toLowerCase());
		} else {
			team.teamType_lower = team.teamType.toLowerCase();
		}
		team.addressState_lower = team.addressState.toLowerCase();
		team.addressCountry_lower = team.addressCountry.toLowerCase();
	});

	teams = teams.sort((a, b) => {
		if (a.teamName < b.teamName) return -1;
		if (a.teamName > b.teamName) return 1;
		return 0;
	});

	let filteredTeams = Object.assign([], teams);

	let jaro_distance = (s1, s2) => {
		// If the strings are equal
		if (s1 == s2) return 1.0;

		// Length of two strings
		let len1 = s1.length;
		let len2 = s2.length;

		// Maximum distance upto which matching
		// is allowed
		var max_dist = Math.floor(Math.max(len1, len2) / 2) - 1;

		// Count of matches
		var match = 0;

		// Hash for matches
		var hash_s1 = Array(s1.length).fill(0);
		var hash_s2 = Array(s1.length).fill(0);

		// Traverse through the first string
		for (var i = 0; i < len1; i++) {

			// Check if there is any matches
			for (var j = Math.max(0, i - max_dist); j < Math.min(len2, i + max_dist + 1); j++) {

				// If there is a match
				if (s1[i] == s2[j] && hash_s2[j] == 0) {
					hash_s1[i] = 1;
					hash_s2[j] = 1;
					match++;
					break;
				}
			}
		}

		// If there is no match
		if (match == 0) return 0.0;

		// Number of transpositions
		let t = 0;
		let point = 0;

		// Count number of occurrences
		// where two characters match but
		// there is a third matched character
		// in between the indices
		for (var i = 0; i < len1; i++) {
			if (hash_s1[i]) {

				// Find the next matched character
				// in second string
				while (hash_s2[point] == 0) point++;

				if (s1[i] != s2[point++]) t++;
			}
		}

		t /= 2;

		// Return the Jaro Similarity
		return ((match) / (len1) + (match) / (len2) + (match - t) / (match)) / 3.0;
	}

	let closeModel = () => {
		removeEventListeners();

		if (adminPanelContainer) {
			body.removeChild(adminPanelContainer);
		}

		if (adminPanel) {
			body.removeChild(adminPanel);
		}

		if (style) {
			head.removeChild(style);
		}
	};

	let removeEventListeners = () => {
		body.removeEventListener('keydown', handleKeydown);
	}

	let search = (event) => {
		if (!event || !event.target || !event.target.value) {
			if (teamListElements.length) teamListElements[selectedTeam].classList.remove('roh-fhts-selected');
			clearTeamList();
			filteredTeams = Object.assign([], teams);
			buildTeamList(filteredTeams);
			selectedTeam = 0;
			if (teamListElements.length) teamListElements[selectedTeam].classList.add('roh-fhts-selected');
			return;
		}

		// Catch for Firebase and Firestore
		if (event.target.value.slice(0, 2) === 'f/' || event.target.value.slice(0, 3) === 'fs/') {
			if (teamListElements.length) teamListElements[selectedTeam].classList.remove('roh-fhts-selected');
			clearTeamList();

			return;
		}

		let query = event.target.value;
		let queryLower = query.toLowerCase();
		let queryWords = queryLower.split(' ').length;

		filteredTeams = teams.reduce((accumulator, team) => {
			let teamNameWords = team.teamName.split(' ').length;

			if (team.slug == queryLower) {
				team.score = 3;
			} else if (team.id == query) {
				team.score = 3;
			} else if (Array.isArray(team.teamType_lower)) {
				for (let teamType of team.teamType_lower) {
					if (teamType == queryLower) {
						team.score = 2.9;
						break;
					}
				}
			} else if (team.teamType_lower == queryLower) {
				team.score = 2.9;
			} else if (team.addressState_lower == queryLower || team.addressCountry_lower == queryLower) {
				team.score = 2.8;
			} else if (teamNameWords < queryWords) {
				team.score = 0;
			} else {
				let teamName = team.teamName.toLowerCase();
				team.score = jaro_distance(queryLower, teamName);

				// Increase score if query exists in teamName
				{
					let weight = 2;

					if (teamName.includes(queryLower)) {
						team.score += queryLower.length / teamName.length * weight;
					}
				}
			}

			if (team.score > 0.6) accumulator.push(team);

			return accumulator;
		}, []);

		filteredTeams = filteredTeams.sort((a, b) => b.score - a.score);

		// filteredTeams = teams.filter(team => {
		//   let dist = levenshteinDistance(queryLower, team.teamName.toLowerCase());

		//   console.log(queryLower, team.teamName.toLowerCase(), dist);

		//   return team.teamName.toLowerCase().includes(queryLower) || team.slug.toLowerCase().includes(queryLower);
		// })

		if (teamListElements.length) teamListElements[selectedTeam].classList.remove('roh-fhts-selected');
		clearTeamList();
		buildTeamList(filteredTeams);
		selectedTeam = 0;
		if (teamListElements.length) teamListElements[selectedTeam].classList.add('roh-fhts-selected');
	};

	let  = (teamItems) => {
		for (let team of teamItems) {
			if (!team.slug) team.slug = 'app';

			let link = `https://${team.slug}.firehawkcrm.com/#/`;

			let row = document.createElement('div');
			row.className = 'roh-fhts-team-item';
			teamList.appendChild(row);
			teamListElements.push(row);

			let label = document.createElement('label');
			label.className = 'roh-fhts-label';
			row.appendChild(label);

			let teamDetailsContainer = document.createElement('label');
			teamDetailsContainer.className = 'roh-fhts-team-details-container';
			label.appendChild(teamDetailsContainer);

			let teamName = document.createElement('p');
			teamName.appendChild(document.createTextNode(team.teamName));
			teamName.className = 'roh-fhts-team-name';
			teamDetailsContainer.appendChild(teamName);

			let slug = document.createElement('p');
			slug.appendChild(document.createTextNode(team.slug));
			slug.className = 'roh-fhts-team-details';
			teamDetailsContainer.appendChild(slug);

			let teamType = document.createElement('p');
			teamType.appendChild(document.createTextNode(team.teamType));
			teamType.className = 'roh-fhts-team-details';
			teamDetailsContainer.appendChild(teamType);

			let addressState = document.createElement('p');
			addressState.appendChild(document.createTextNode(formatState(team.addressState)));
			addressState.className = 'roh-fhts-team-details';
			teamDetailsContainer.appendChild(addressState);

			let addressCountry = document.createElement('p');
			addressCountry.appendChild(document.createTextNode(formatState(team.addressCountry)));
			addressCountry.className = 'roh-fhts-team-details';
			teamDetailsContainer.appendChild(addressCountry);

			let input = document.createElement('input');
			input.className = 'roh-fhts-team-id';
			input.type = 'text';
			input.value = team.id;
			input.disabled = true;
			row.appendChild(input);

			let jumpLink = document.createElement('a');
			jumpLink.className = 'roh-fhts-team-jump-link';
			jumpLink.href = link;
			jumpLink.addEventListener('click', (event) => {
				if (!event.metaKey || event.shiftKey) {
					closeModel();
				}
			});
			row.appendChild(jumpLink);

			let jumpLink_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			jumpLink_svg.setAttribute('width', '18px');
			jumpLink_svg.setAttribute('height', '18px');
			jumpLink_svg.setAttribute('viewBox', '3 2 19 19');
			jumpLink_svg.setAttribute('fill', 'none');
			jumpLink_svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
			jumpLink_svg.style.verticalAlign = 'bottom';

			let jumpLink_g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
			jumpLink_g.id = 'Interface / External_Link';

			let jumpLink_g_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			jumpLink_g_path.id = 'Vector';
			jumpLink_g_path.setAttribute('d', 'M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11');
			jumpLink_g_path.setAttribute('stroke', '#000000');
			jumpLink_g_path.setAttribute('stroke-width', '1');
			jumpLink_g_path.setAttribute('stroke-linecap', 'round');
			jumpLink_g_path.setAttribute('stroke-linejoin', 'round');

			jumpLink_g.appendChild(jumpLink_g_path);
			jumpLink_svg.appendChild(jumpLink_g);
			jumpLink.appendChild(jumpLink_svg);
		}
	};

	let clearTeamList = () => {
		for (let element of teamListElements) {
			teamList.removeChild(element);
		}

		teamListElements = [];
	};

	let openItem = (event, searchBar) => {
		if (event.key !== 'Enter') return;

		const firebaseRoute = googleUserNumber ? `https://console.firebase.google.com/u/${googleUserNumber}/project/fcrm-e17b0` : 'https://console.firebase.google.com/project/fcrm-e17b0';
		const realtimeDatabase = '/database/fcrm-e17b0/data';
		const firestoreDatabase = '/firestore/data';
		let osType = getOsType();
		let key = getKey(event);
		let teamItem = filteredTeams[selectedTeam];
		let link = '';

		// Handling for Firebase and Firestore
		console.log(key);
		// alt-enter

		if (searchBar.value.slice(0, 2) === 'f/' || searchBar.value.slice(0, 3) === 'fs/') {
			let route = firebaseRoute;
			let location = '';

			if (searchBar.value.slice(0, 2) === 'f/') {
				route += realtimeDatabase;
				location = searchBar.value.slice(1);
			} else if (searchBar.value.slice(0, 3) === 'fs/') {
				route += firestoreDatabase;
				location = searchBar.value.slice(2);
			}

			link = route += location;

		// Set link to team in Firebase
		} else if (
			key === 'alt-enter' ||
			key === 'ctrl-alt-enter' ||
			key === 'alt-shift-enter' ||
			key === 'ctrl-alt-shift-enter' ||
			key === 'cmd-alt-enter' ||
			key === 'alt-shift-enter' ||
			key === 'cmd-alt-shift-enter'
		) {
			link = firebaseRoute + realtimeDatabase + '/teams/' + teamItem.id;

		// Set link to team slug
		} else if (teamItem && teamItem.slug) {
			link = `https://${teamItem.slug}.firehawkcrm.com/#/`;
		}

		// Break out of function if no link exists
		if (!link) return;

		if (osType === 'windows' || osType === 'linux') {

			// Open team in FireHawk
			if (key === 'enter') {
				window.location.href = link;
				closeModel();
			}

			if (key === 'ctrl-enter') openNewBackgroundTab(link);

			if (key === 'shift-enter') {
				window.open(link, '_blank');
				closeModel();
			}

			if (key === 'ctrl-shift-enter') {
				window.open(link);
				closeModel();
			}

			// Open team in Firebase
			if (key === 'alt-enter') {
				window.location.href = link;
				closeModel();
			}

			if (key === 'ctrl-alt-enter') openNewBackgroundTab(link);

			if (key === 'alt-shift-enter') {
				window.open(link, '_blank');
				closeModel();
			}

			if (key === 'ctrl-alt-shift-enter') {
				window.open(link);
				closeModel();
			}
		} else if (osType == 'macintosh') {

			// Open team in FireHawk
			if (key === 'enter') {
				window.location.href = link;
				closeModel();
			}

			if (key === 'cmd-enter') openNewBackgroundTab(link);

			if (key === 'shift-enter') {
				window.open(link, '_blank');
				closeModel();
			}

			if (key === 'cmd-shift-enter') {
				window.open(link);
				closeModel();
			}

			// Open team in Firebase
			if (key === 'alt-enter') {
				window.location.href = link;
				closeModel();
			}

			if (key === 'cmd-alt-enter') openNewBackgroundTab(link);

			if (key === 'alt-shift-enter') {
				window.open(link, '_blank');
				closeModel();
			}

			if (key === 'cmd-alt-shift-enter') {
				window.open(link);
				closeModel();
			}
		}
	}

	let openNewBackgroundTab = (link) => {
		const a = document.createElement('a');

		a.href = link;
		a.target = '_blank';

		const e = new MouseEvent('click', {
			ctrlKey: true, // for Windows or Linux
			metaKey: true, // for MacOS
		});

		a.dispatchEvent(e);
	};

	let getKey = (event) => {
		let characterMap = {
			'œ': 'q',
			'∑': 'w',
			'´': 'e',
			'®': 'r',
			'†': 't',
			'¥': 'y',
			'¨': 'u',
			'ˆ': 'i',
			'ø': 'o',
			'π': 'p',
			'å': 'a',
			'ß': 's',
			'∂': 'd',
			'ƒ': 'f',
			'©': 'g',
			'˙': 'h',
			'∆': 'j',
			'˚': 'k',
			'¬': 'l',
			'Ω': 'z',
			'≈': 'x',
			'ç': 'c',
			'√': 'v',
			'∫': 'b',
			'˜': 'n',
			'µ': 'm',
			'Œ': 'q',
			'„': 'w',
			'´': 'e',
			'‰': 'r',
			'ˇ': 't',
			'Á': 'y',
			'¨': 'u',
			'ˆ': 'i',
			'Ø': 'o',
			'∏': 'p',
			'Å': 'a',
			'Í': 's',
			'Î': 'd',
			'Ï': 'f',
			'˝': 'g',
			'Ó': 'h',
			'Ô': 'j',
			'': 'k',
			'Ò': 'l',
			'¸': 'z',
			'˛': 'x',
			'Ç': 'c',
			'◊': 'v',
			'ı': 'b',
			'˜': 'n',
			'Â': 'm',
			'¡': '1',
			'™': '2',
			'£': '3',
			'¢': '4',
			'∞': '5',
			'§': '6',
			'¶': '7',
			'•': '8',
			'ª': '9',
			'º': '0',
			'⁄': '1',
			'€': '2',
			'‹': '3',
			'›': '4',
			'ﬁ': '5',
			'ﬂ': '6',
			'‡': '7',
			'°': '8',
			'·': '9',
			'‚': '0',
			'`': '`',
			'–': '-',
			'≠': '=',
			'“': '[',
			'‘': ']',
			'«': '\\',
			'…': ';',
			'æ': '\'',
			'≤': ',',
			'≥': '.',
			'÷': '/',
			'`': '`',
			'—': '-',
			'±': '=',
			'”': '[',
			'’': ']',
			'»': '\\',
			'Ú': ';',
			'Æ': '\'',
			'¯': ',',
			'˘': '.',
			'¿': '/'
		};

		let key = event.key.toLowerCase();

		if (characterMap[key]) key = characterMap[key];

		if (event.shiftKey) key = 'shift-' + key;
		if (event.altKey) key = 'alt-' + key;
		if (event.metaKey) key = 'cmd-' + key;
		if (event.ctrlKey) key = 'ctrl-' + key;

		return key;
	};

	let getOsType = () => {
		var userAgent = window.navigator.userAgent;

		if (userAgent) {
			if (userAgent.includes('Macintosh')) return 'macintosh';
			if (userAgent.includes('Linux')) return 'linux';
		}

		return 'windows';
	};

	let teamList = null;
	let teamListElements = [];
	let selectedTeam = 0;

	let head = document.getElementsByTagName('head')[0];
	let body = document.getElementsByTagName('body')[0];

	let handleKeydown = (event) => {
		let key = getKey(event);

		if (key === shortcutKey) {
			event.preventDefault();
			event.stopPropagation();
			closeModel();
		} else if (key === 'escape') {
			closeModel();
		} else if (key === 'tab') {
			event.preventDefault();
		} else if (key === 'arrowdown' || key === 'arrowup') {
			event.preventDefault();

			if (!teamListElements.length) return;

			teamListElements[selectedTeam].classList.remove('roh-fhts-selected');

			if (key === 'arrowdown') {
				selectedTeam++;
				if (selectedTeam > filteredTeams.length - 1) selectedTeam = 0;
			}

			if (key === 'arrowup') {
				selectedTeam--;
				if (selectedTeam < 0) selectedTeam = filteredTeams.length - 1;
			}

			// Focus on search bar to fix scroll issues with team list
			document.getElementById('roh-fhts-search-bar').focus();

			// Add selected class to item
			teamListElements[selectedTeam].classList.add('roh-fhts-selected');
			teamListElements[selectedTeam].scrollIntoView({ block: "nearest" });
		}
	}

	let adminPanelContainer = document.getElementById('roh-fhts-admin-panel-container');
	let adminPanel = document.getElementById('roh-fhts-admin-panel');
	let style = document.getElementById('roh-fhts-style');

	if (adminPanelContainer || adminPanel || style) {
		closeModel();
	} else {
		style = document.createElement('style');
		style.id = 'roh-fhts-style';
		style.innerHTML = `
			#roh-fhts-admin-panel-container {
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: #000;
				opacity: 0.7;
				z-index: 100000000;
			}

			#roh-fhts-admin-panel {
				width: 900px;
				height: 600px;
				top: calc(100vh / 2 - 300px);
				left: calc(100vw / 2 - 450px);
				background-color: #fff;
				position: fixed;
				padding: 15px;
				z-index: 100000000;
				box-sizing: border-box;
			}

			#roh-fhts-close-button {
				font-family: sans-serif;
				font-size: 14pt;
				color: #000;
				position: absolute;
				top: 0px;
				right: 0px;
				margin: 1px 1px;
				padding: 1px 7px;
				font-weight: 100;
				border: none;
				background-color: transparent;
				appearance: none;
				cursor: pointer;
				line-height: normal;
			}

			#roh-fhts-close-button:hover {
				border: 1px solid #ccc;
				padding: 0px 6px 2px 6px;
			}

			#roh-fhts-title {
				font-family: sans-serif;
				font-weight: 700;
				color: #000;
				text-align: center;
				margin: revert;
				box-sizing: content-box;
				line-height: normal;
			}

			#roh-fhts-search-bar {
				width: 100%;
				font-family: sans-serif;
				font-size: 11pt;
				box-sizing: border-box;
				color: #000;
				background-color: #fff;
				line-height: 20px;
				border: 1px solid #aaa;
				border-radius: 5px;
				margin-top: 2px;
				margin-bottom: 2px;
			}

			input#roh-fhts-search-bar:focus,
			input#roh-fhts-search-bar:focus-visible {
				outline: revert;
			}

			input#roh-fhts-search-bar:focus-visible {
				outline-style: none !important;
				border-color: #005fcc;
				border-width: 2px;
				margin-top: 1px;
				margin-bottom: 1px;
			}

			#roh-fhts-team-list {
				overflow-y: scroll;
				height: calc(100% - 89.84px);
				margin-right: -15px;
				padding-right: 15px;
			}

			.roh-fhts-team-item {
				padding: 3px 3px;
				border-left: 3px solid transparent;
			}

			.roh-fhts-team-item.roh-fhts-selected {
				border-color: #005fcc;
			}

			.roh-fhts-team-item:nth-of-type(2n) {
				background-color: #f5f5f5;
			}

			.roh-fhts-label {
				width: calc(60% - 30px);
				margin-right: 3px;
				margin-bottom: 0px;
				display: inline-block;
				box-sizing: border-box;
			}

			.roh-fhts-team-details-container {
				display: flex;
				align-items: baseline;
			}

			.roh-fhts-team-name {
				font-family: sans-serif;
				font-size: 11pt;
				font-weight: normal;
				line-height: normal;
				color: #545454;
				margin: 0;
			}

			.roh-fhts-team-details {
				font-family: sans-serif;
				font-size: 8pt;
				font-weight: normal;
				line-height: normal;
				color: #545454;
				margin: 0;
				padding-left: 3px;
			}

			.roh-fhts-team-id {
				width: 40%;
				font-family: sans-serif;
				font-size: 11pt;
				color: #545454;
				background-color: #fff;
				margin-left: 3px;
				margin-right: 3px;
				box-sizing: border-box;
				line-height: normal;
				border: 1px solid #aaa;
				border-radius: 5px;
			}

			input.roh-fhts-team-id {
				appearance: auto;
				vertical-align: top;
			}

			.roh-fhts-team-jump-link {
				font-family: sans-serif;
				font-size: 11pt;
				display: inline-block;
				margin-left: 3px;
				box-sizing: border-box;
				line-height: normal;
			}

			.roh-fhts-team-jump-link:hover {
				border: 1px solid #ccc;
				margin: -5px -5px -5px -2px;
				padding: 4px;
			}

			@media screen and ( max-height: 768px ) {
				#roh-fhts-admin-panel {
					height: calc(100vh - 20px);
					top: calc(100vh / 2 - (50vh - 10px));
				}
			}
		`;
		head.appendChild(style);

		body.addEventListener('keydown', handleKeydown);

		adminPanelContainer = document.createElement('div');
		adminPanelContainer.id = 'roh-fhts-admin-panel-container';
		adminPanelContainer.addEventListener('click', () => closeModel());

		adminPanel = document.createElement('div');
		adminPanel.id = 'roh-fhts-admin-panel';

		let closeButton = document.createElement('button');
		closeButton.appendChild(document.createTextNode('x'));
		closeButton.id = 'roh-fhts-close-button';
		closeButton.addEventListener('click', () => closeModel());
		adminPanel.appendChild(closeButton);

		let title = document.createElement('h2');
		title.appendChild(document.createTextNode('FireHawk Team Selector'));
		title.id = 'roh-fhts-title';
		adminPanel.appendChild(title);

		let searchBar = document.createElement('input');
		searchBar.id = 'roh-fhts-search-bar';
		searchBar.placeholder = 'Search...';
		searchBar.value = getFireHawkSlug();
		searchBar.addEventListener('input', (event) => search(event));
		searchBar.addEventListener('keydown', (event) => openItem(event, searchBar));
		adminPanel.appendChild(searchBar);
		setTimeout(() => {
			searchBar.focus();

			if (searchBar.value) {
				searchBar.dispatchEvent(new Event('input'));
				searchBar.selectionStart = 0;
				searchBar.selectionEnd = searchBar.value.length;
			}
		}, 0);

		teamList = document.createElement('div');
		teamList.id = 'roh-fhts-team-list';
		adminPanel.appendChild(teamList);

		buildTeamList(filteredTeams);
		if (teamListElements.length) teamListElements[selectedTeam].classList.remove('roh-fhts-selected');
		selectedTeam = 0;
		if (teamListElements.length) teamListElements[selectedTeam].classList.add('roh-fhts-selected');

		body.appendChild(adminPanelContainer);
		body.appendChild(adminPanel);
	}

	function formatState(state) {
		let states = {
			'australia capital territory': 'ACT',
			'australian capital territory': 'ACT',
			'new south wales': 'NSW',
			'northern territory': 'NT',
			'queensland': 'QLD',
			'south australia': 'SA',
			'tasmainia': 'TAS',
			'victoria': 'VIC',
			'western australia': 'WA'
		};

		if (states[state.toLowerCase()]) {
			return states[state.toLowerCase()];
		}

		return state;
	}

	function getFireHawkSlug() {
		var location = window.location.href;
		var slug = location.match(/(\w+)\.firehawkcrm\./, '$1')?.[1] || '';

		return slug;
	}
}