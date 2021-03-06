// Our fake database
window.DB = {
    icons: [],
    accounts: [],
    menuItems: [],
    tables: [],
};

// This will fill window.DB with all the fake data we need
window.DB.createFakeData = function() {
    // Icons
    window.DB.icons.push(new Icon('userAcc1', './img/profile_icons/mega_karen.png'));
    window.DB.icons.push(new Icon('userAcc2', './img/profile_icons/mr_krabs.png'));
    window.DB.icons.push(new Icon('userAcc3', './img/profile_icons/pickaxe_guy.png'));
    window.DB.icons.push(new Icon('userAcc4', './img/profile_icons/joe_mama.png'));
    window.DB.icons.push(new Icon('userAcc5', './img/profile_icons/jimpeg.jpg'));
    window.DB.icons.push(new Icon('settings-n', './img/settings-standard.png'));
    window.DB.icons.push(new Icon('settings-s', './img/settings-selected.png'));
    window.DB.icons.push(new Icon('back-n', './img/back-standard.png'));
    window.DB.icons.push(new Icon('back-s', './img/back-selected.png'));
    window.DB.icons.push(new Icon('hamburger-n', './img/hamburgermenu-standard.png'));
    window.DB.icons.push(new Icon('hamburger-s', './img/hamburgermenu-selected.png'));
    window.DB.icons.push(new Icon('expand-this', './img/expandthis.png'));
    window.DB.icons.push(new Icon('customer0', './img/icons/icon0.png'));
    window.DB.icons.push(new Icon('customer1', './img/icons/icon1.png'));
    window.DB.icons.push(new Icon('customer2', './img/icons/icon2.png'));
    window.DB.icons.push(new Icon('customer3', './img/icons/icon3.png'));
    window.DB.icons.push(new Icon('customer4', './img/icons/icon4.png'));
    window.DB.icons.push(new Icon('customer5', './img/icons/icon5.png'));
    window.DB.icons.push(new Icon('customer6', './img/icons/icon6.png'));
    window.DB.icons.push(new Icon('customer7', './img/icons/icon7.png'));
    window.DB.icons.push(new Icon('customer8', './img/icons/icon8.png'));
    window.DB.icons.push(new Icon('customer9', './img/icons/icon9.png'));
    window.DB.icons.push(new Icon('customer10', './img/icons/icon10.png'));
    window.DB.icons.push(new Icon('customer11', './img/icons/icon11.png'));
    window.DB.icons.push(new Icon('customer12', './img/icons/icon12.png'));
    window.DB.icons.push(new Icon('customer13', './img/icons/icon13.png'));
    window.DB.icons.push(new Icon('customer14', './img/icons/icon14.png'));
    window.DB.icons.push(new Icon('customer15', './img/icons/icon15.png'));
    // Food
    window.DB.icons.push(new Icon('waterBottle', './img/food/Water_Bottle.png'));
    window.DB.icons.push(new Icon('potionOfPoison', './img/food/Potion_of_Poison.png'));
    window.DB.icons.push(new Icon('potionOfSlowness', './img/food/Potion_of_Slowness.png'));
    window.DB.icons.push(new Icon('potionOfFireResistance', './img/food/Potion_of_Fire_Resistance.png'));
    window.DB.icons.push(new Icon('soupBowl', './img/food/soup-bowl.png'));
    window.DB.icons.push(new Icon('bread', './img/food/bread.png'));
    window.DB.icons.push(new Icon('driedKelp', './img/food/dried-kelp.png'));
    window.DB.icons.push(new Icon('rawSalmon', './img/food/fish2.png')); //
    window.DB.icons.push(new Icon('potato', './img/food/potato.png')); //
    window.DB.icons.push(new Icon('meat', './img/food/meat.png')); //
    window.DB.icons.push(new Icon('chicken', './img/food/chicken.png')); //
    window.DB.icons.push(new Icon('cookedSalmon', './img/food/fish4.png')); //
    window.DB.icons.push(new Icon('pie', './img/food/pie.png'));
    window.DB.icons.push(new Icon('sweetBerries', './img/food/sweet-berries.png'));
    window.DB.icons.push(new Icon('honeyBottle', './img/food/honey-bottle.png'));
    window.DB.icons.push(new Icon('cookie', './img/food/cookie.png'));
    window.DB.icons.push(new Icon('cake', './img/food/cake.png'));
    window.DB.icons.push(new Icon('beetroot', './img/food/beetroot.png'));
    window.DB.icons.push(new Icon('dragonsBreath', './img/food/dragons-breath.png'));
    window.DB.icons.push(new Icon('spiderEye', './img/food/spider-eye.png'));    
    window.DB.icons.push(new Icon('goldenApple', './img/food/golden-apple.png'));
    // Wow look at that zigzag in the whitespace ^

    // Accounts
    window.DB.accounts.push(new Account('Mega Karen', '420420', 'server', window.DB.getIconByName('userAcc1')));
    window.DB.accounts.push(new Account('Mr. Krabs', '333333', 'manager', window.DB.getIconByName('userAcc2')));
    window.DB.accounts.push(new Account('Pickaxe Guy', '481516', 'server', window.DB.getIconByName('userAcc3')));
    window.DB.accounts.push(new Account('Joe mama', '696969', 'server', window.DB.getIconByName('userAcc4')));
 
    
    // Menu items
    // Drinks
    window.DB.menuItems.push(new MenuItem('Water Bottle', 'Drinks', 'waterBottle', 'A cool refreshing glass of water melted from the most exquisite blue ice', [], 0, 0));
    window.DB.menuItems.push(new MenuItem('Awkward Potion', 'Drinks', 'waterBottle', 'Contains: awkwardness, please do not give to those who are allergic to social interaction', ['Potion'], 0, 2));
    window.DB.menuItems.push(new MenuItem('Mundane Potion', 'Drinks', 'waterBottle', 'Drink this if you\'re on a date you want to end quickly...', ['Potion'], 0, 2));
    window.DB.menuItems.push(new MenuItem('Thick Potion', 'Drinks', 'waterBottle', 'We wanted to spell \'thick\' with three c\'s but that tripped up the autocorrect', ['Potion'], 9999, 2));
    window.DB.menuItems.push(new MenuItem('Potion of Water Breathing', 'Drinks', 'waterBottle', 'If you drink this you can inhale our famous \'Water Bottle\'', ['Potion'], 1, 2));
    window.DB.menuItems.push(new MenuItem('Potion of Poison', 'Drinks', 'potionOfPoison', 'For when you think you might be enjoying your meal too much', ['Potion'], -1, 2));
    window.DB.menuItems.push(new MenuItem('Potion of Slowness', 'Drinks', 'potionOfSlowness', 'We\'re still... thinking of... a description for this one...', ['Potion'], 1, 2));
    window.DB.menuItems.push(new MenuItem('Potion of Fire Resistance', 'Drinks', 'potionOfFireResistance', 'No guarantees that this will make you resistant to spicy food', ['Potion'], 1, 2));
    window.DB.menuItems.push(new MenuItem('Potion of Weakness', 'Drinks', 'waterBottle', '"What\'s your weakness?"', ['Potion'], 1, 2));
    // Appetizers
    window.DB.menuItems.push(new MenuItem('Rabbit Stew', 'Appetizers', 'soupBowl', 'A hearty stew of the finest wabbits from hunting season', ['Meat', 'Soup'], 246, 12));
    window.DB.menuItems.push(new MenuItem('Mushroom Stew', 'Appetizers', 'soupBowl', 'We don\'t know what kind of mushrooms are in this', ['Vegetarian', 'Vegan', 'Gluten free', 'Soup'], 53, 10));
    window.DB.menuItems.push(new MenuItem('Bread', 'Appetizers', 'bread', 'Our amazing "bread" crafted from the finest flour of wheat grown in the nether, melted water of a snowman, and a little bit of love', ['Vegetarian', 'Vegan'], 164, 3));
    window.DB.menuItems.push(new MenuItem('Dried Kelp', 'Appetizers', 'driedKelp', 'we have no rice', ['Vegetarian', 'Vegan'], 10, 8));
    window.DB.menuItems.push(new MenuItem('Raw Salmon', 'Appetizers', 'rawSalmon', 'we have no rice', ['Meat'], 131, 11));
    window.DB.menuItems.push(new MenuItem('Potato', 'Appetizers', 'potato', 'Irish luv potato ', ['Vegetarian', 'Vegan', 'Gluten free'], 77, 1));
    // Entrées
    window.DB.menuItems.push(new MenuItem('Porkchop', 'Entrées', 'meat', 'Sourced from 30-50 feral hogs that run into my 3x5 foot yard within 3-5 minutes while my small 3-5 year old kids play', ['Meat'], 350, 35));
    window.DB.menuItems.push(new MenuItem('Steak', 'Entrées', 'meat', '"her\'es your steank with NO VEGETAL as you ordered sir"', ['Meat'], 271, 25));
    window.DB.menuItems.push(new MenuItem('Cooked Mutton', 'Entrées', 'meat', 'Only a REAL man can eat this', ['Meat'], 294, 22));
    window.DB.menuItems.push(new MenuItem('Cooked Salmon', 'Entrées', 'cookedSalmon', 'Swam upstream right onto your plate', ['Meat'], 178, 22));
    window.DB.menuItems.push(new MenuItem('Cooked Chicken', 'Entrées', 'chicken', 'Tastes like chicken...', ['Meat'], 239, 18));
    window.DB.menuItems.push(new MenuItem('Baked Potato', 'Entrées', 'potato', 'Vegetarians in minecraft be like...', ['Vegetarian', 'Vegan', 'Gluten free'], 70, 5));
    // Deserts 🏜
    window.DB.menuItems.push(new MenuItem('Pumpkin Pie', 'Desserts', 'pie', 'Pumpkin pie just like mom used to make... an award winning dessert', ['Vegetarian'], 243, 5));
    window.DB.menuItems.push(new MenuItem('Sweet Berries', 'Desserts', 'sweetBerries', 'Verified non-poisonous by our expert team of taste-testers', ['Vegetarian', 'Vegan', 'Gluten free'], 74, 5));
    window.DB.menuItems.push(new MenuItem('Honey Bottle', 'Desserts', 'honeyBottle', 'Please for the love of everything save the bees', ['Vegetarian', 'Gluten free'], 304, 8));
    window.DB.menuItems.push(new MenuItem('Cookie', 'Desserts', 'cookie', 'A classic cookie! You\'ll want to wipe the pixelated crumbs off your shirt before you get up', ['Vegetarian'], 40, 3));
    window.DB.menuItems.push(new MenuItem('Cake', 'Desserts', 'cake', 'The cake is a lie! (JOKE: Portal (2007))', ['Vegetarian'], 371, 5));
    // Specials would go here, but I'm hesitant to include them because their prices and calorie counts aren't numbers, and that will require coding special cases in the bill-splitting part
    
    // Tables
    window.DB.tables.push(new Table(1, 'available', [], {'x': -0.5, 'y':-0.5}));
    window.DB.tables.push(new Table(2, 'available', [], {'x': 0.5, 'y':-0.5}));
    window.DB.tables.push(new Table(3, 'cleaning', [], {'x': 0.5, 'y':0.5}));
    // Create a bunch of fake guest orders
    var numGuests = Math.ceil(Math.random()*4);
    var guestOrders = [];
    for(var i = 0; i < numGuests; i++)
    {
        var items = []
        var numItems = Math.ceil(Math.random()*6);
        for(var j = 0; j < numItems; j++)
        {
            items.push(new OrderItem(Math.ceil(Math.random()*3), window.DB.menuItems[Math.floor(Math.random()*window.DB.menuItems.length)], 'make it blocky', 'delivered'));
        }
        guestOrders.push(new GuestOrder(window.DB.getIconByName('customer' + Math.floor(Math.random()*16)), items));
    }
    window.DB.tables.push(new Table(4, 'taken', guestOrders, {'x': -0.5, 'y':0.5}));
};

// Returns: Icon, does a lookup on a database to return Icon with the provided name
window.DB.getIconByName = function(name) {
    for (var i = 0; i < window.DB.icons.length; i++) {
        if (window.DB.icons[i].getName() === name) {
            return window.DB.icons[i];
        }
    }
}

// Returns: Table, does a lookup on a database to return Table with the provided numner
window.DB.getTableByNumber = function(number) {
    for (var i = 0; i < window.DB.tables.length; i++) {
        if (window.DB.tables[i].number === number) {
            return window.DB.tables[i];
        }
    }
}

// aaaaaaaaaaaaaaaaaa
window.DB.getMenuItemByName = function(name) {
    for (var i = 0; i < window.DB.menuItems.length; i++) {
        if (window.DB.menuItems[i].name === name) {
            return window.DB.menuItems[i];
        }
    }
}
