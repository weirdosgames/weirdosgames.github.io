PlayMarioJas.PlayMarioJas.settings.maps.library["2-3"] = {
    "name": "2-3",
    "time": 300,
    "locations": [
        { "entry": "Plain" }
    ],
    "areas": [
        {
            "setting": "Overworld",
            "blockBoundaries": true,
            "creation": [
                { "macro": "Floor", "width": 56 },
                { "macro": "CastleSmall" },
                { "macro": "Pattern", "pattern": "BackCloud", "y": 4, "repeat": 4 },
                { "macro": "CheepsStart", "x": 64 },
                { "macro": "Tree", "x": 64, "width": 64 },
                { "thing": "Stone", "x": 80, "y": 8 },
                { "thing": "Stone", "x": 88, "y": 16, "height": 16 },
                { "thing": "Stone", "x": 96, "y": 24, "height": 24, "width": 24 },
                { "macro": "Bridge", "x": 120, "y": 24, "width": 136, "end": true },
                { "macro": "Bridge", "x": 256, "y": 24, "width": 128, "end": true },
                { "macro": "Fill", "thing": "Coin", "x": 290, "y": 63, "xnum": 4, "xwidth": 8 },
                { "macro": "Bridge", "x": 384, "y": 24, "width": 128, "end": true },
                { "macro": "Fill", "thing": "Coin", "x": 441, "y": 63, "xnum": 3, "xwidth": 16 },
                { "macro": "Fill", "thing": "Coin", "x": 449, "y": 55, "xnum": 2, "xwidth": 16 },
                { "macro": "Bridge", "x": 544, "y": 24, "width": 96, "begin": true, "end": true },
                { "macro": "Bridge", "x": 672, "y": 24, "width": 96, "begin": true, "end": true },
                { "macro": "Fill", "thing": "Coin", "x": 777, "y": 63, "xnum": 3, "xwidth": 8 },
                { "macro": "Bridge", "x": 792, "y": 32, "width": 56, "begin": true, "end": true },
                { "thing": "Block", "x": 816, "y": 64, "contents": "Mushroom" },
                { "macro": "Fill", "thing": "Coin", "x": 865, "y": 63, "xnum": 3, "xwidth": 8 },
                { "macro": "Tree", "x": 896, "width": 64 },
                { "macro": "Bridge", "x": 976, "y": 24, "width": 24 },
                { "macro": "Bridge", "x": 1016, "y": 24, "width": 136, "begin": true, "end": true },
                { "macro": "Fill", "thing": "Coin", "x": 1064, "y": 63, "xnum": 6, "xwidth": 8 },
                { "macro": "Bridge", "x": 1168, "y": 8, "width": 80, "begin": true, "end": true },
                { "macro": "Fill", "thing": "Coin", "x": 1193, "y": 39, "xnum": 4, "xwidth": 8 },
                { "macro": "Bridge", "x": 1272, "y": 24, "width": 80, "begin": true, "end": true },
                { "macro": "Bridge", "x": 1368, "y": 24, "width": 16 },
                { "macro": "Fill", "thing": "Coin", "x": 1385, "y": 55, "xnum": 6, "xwidth": 8 },
                { "macro": "Bridge", "x": 1400, "y": 24, "width": 16 },
                { "macro": "Bridge", "x": 1432, "y": 24, "width": 16 },
                { "macro": "Bridge", "x": 1464, "y": 24, "width": 80, "begin": true },
                { "macro": "Tree", "x": 1536, "width": 104 },
                { "macro": "Pattern", "pattern": "BackCloud", "x": 1536, "y": 4, "skips": [5] },
                { "thing": "Stone", "x": 1544, "y": 24, "width": 16, "height": 24 },
                { "thing": "Stone", "x": 1560, "y": 16, "height": 16 },
                { "thing": "Stone", "x": 1568, "y": 8 },
                { "macro": "CheepsStop", "x": 1600 },
                { "macro": "Floor", "x": 1656, "width": 280 },
                { "thing": "Stone", "x": 1664, "y": 8 },
                { "thing": "Stone", "x": 1672, "y": 16, "height": 16 },
                { "thing": "Stone", "x": 1680, "y": 24, "height": 24 },
                { "thing": "Stone", "x": 1688, "y": 32, "height": 32 },
                { "thing": "Stone", "x": 1696, "y": 40, "height": 40 },
                { "thing": "Stone", "x": 1704, "y": 48, "height": 48 },
                { "thing": "Stone", "x": 1712, "y": 56, "height": 56 },
                { "thing": "Stone", "x": 1720, "y": 64, "width": 16, "height": 64 },
                { "macro": "EndOutsideCastle", "x": 1800, "large": true, "walls": 7, "transport": { "map": "2-4" } }
            ]
        }
    ]
};