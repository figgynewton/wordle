function initState(){
    return{
       guesses: [
           ['','','','',''],
           ['','','','',''],
           ['','','','',''],
           ['','','','',''],
           ['','','','',''],
           ['','','','','']
       ],
        try:0,
        answer:["t","e","a","c","h"],
        change: false,
        end: false,
        win: false,
        words: ["joust", "eagle", "occur", "world", "spore", "night", "audio", "clone", "cross", "score", "power", "speak", "store", "earth", "cabin", "cable", "daddy", "early", "facet", "fable", "habit", "kabob", "labor", "macho", "nacho", "oasis", "pacer", "rabbi", "rabid", "sabre", "vague", "wacky", "about", "above", "actor", "adopt", "after", "again", "agent", "alarm", "alert", "anger", "apple", "aside", "avoid", "basic", "beach", "begin", "bench", "birth", "board", "black", "brain", "bread", "brief", "brown", "built", "carry", "cause", "chain", "chart", "cheap", "claim", "civil", "clean", "coast", "count", "crash", "crowd", "curve", "daily", "dance", "death", "delay", "depth", "dozen", "drama", "draft", "dream", "drill", "drink", "dying", "eager", "earth", "eight", "empty", "elite", "enjoy", "equal", "error", "event", "exist", "extra", "faith", "false", "fault", "field", "fiber", "flash", "fleet", "floor", "fluid", "fixed", "final", "fifth", "fight", "first", "force", "forum", "found", "frame", "fruit", "fraud", "fresh", "funny", "giant", "glass", "grade", "going", "grant", "grant", "globe", "green", "grown", "guess", "guard", "guide", "happy", "heart", "heavy", "hotel", "house", "human", "ideal","index", "image", "input", "inner", "issue", "joint", "japan", "judge", "known", "label", "laser", "large", "laugh", "lease", "leave", "legal", "level", "layer", "light", "limit", "logic", "local", "loose", "lower", "lucky", "lunch", "magic", "major", "march", "maker", "match", "meant", "metal", "media", "minor", "minus", "model", "money", "moral", "month", "motor", "mount", "movie", "music", "mouse", "never", "north", "nurse", "newly", "ocean", "offer", "often", "order", "other", "panel", "paint", "paper", "party", "peace", "photo", "piece", "pitch", "pilot", "place", "plain", "plant", "point", "power", "pound", "press", "price", "pride", "prime", "proud", "proof", "prove","prize", "queen", "quick", "quite", "radio", "raise", "range", "rapid", "ratio", "reach", "refer", "ready", "rival", "river", "roman", "round", "rough", "route", "rural", "royal", "scale", "scope", "scene", "sense", "sharp", "shape", "shall", "share", "shelf", "shoot", "sixth", "since", "shell", "skill", "slide", "small", "sleep", "smile", "smart", "sorry", "solid", "solve", "sound", "smoke", "south", "spare", "spend", "sport", "stage", "staff", "stake", "stand", "steel", "stick", "stone", "stock", "stood", "store", "story", "storm", "study", "suite", "super", "sweet", "table", "teeth", "taste", "theft", "theme", "thick", "think", "third", "three", "threw", "tight", "title", "today", "total", "topic", "tower", "trade", "train", "treat", "trend", "truck", "trust", "trial", "track", "truly", "truth", "twice", "under", "union", "unity", "upper", "urban", "upset", "usual", "valid", "visit", "vital", "virus", "value", "video", "voice", "waste", "watch", "wheel", "water", "where", "while", "which", "witch", "woman", "whole", "while", "white", "worry", "worth", "wound", "wrong", "would", "yield", "youth", "young",]

    }
}

export default initState;