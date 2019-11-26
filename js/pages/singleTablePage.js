// The "single table page" is very similar to the table map page. 
// Once the table map page is more developed, we should consider merging the two, in order to facilitate a smooth transition between them
// SIKE! Late project vibes. These are staying separate 😤

const MAX_GUESTS = 4;

class SingleTablePage {
    constructor() {
        // Main data of the element
        var el = $(`
            <div class="single-table-page">
                <div class="content-pane">
                    <div class="cool-content-pane">
                        <div class="back-btn-wrapjjgejrhgjureh-sd"></div>
                        <div class="pay-table-btn"></div>
                        <div class="send-kitchen-btn"></div>
                    </div>
                </div>
            </div>
        `);

        // Append it to body and set the proper panorama image (none in this case)
        this.ref = el.appendTo($('body'));
        $('body').css('background-image', '');

        this.backBtn = new Fab(this.ref.find('.back-btn-wrapjjgejrhgjureh-sd'), (function() {
            this.destroy();
            window.createTableMapPage();
        }).bind(this));

        this.payBtn = new Fab(this.ref.find('.pay-table-btn'), (function() {
            this.destroy();
            window.createPaymentPage();
        }).bind(this));

        this.sendKitchenBtn = new Fab(this.ref.find('.send-kitchen-btn'), (function() {
            // TODO:
            alert("TODO: THIS. Sending the order to kitchen staff.");
        }).bind(this));

        // Add the navbar with all the options/account info
        this.navbar = new NavBar(this.ref, [{
            'text' : '< Back to table map',
            'selected' : false,
            'onClick' : (function () {
                this.destroy();
                window.createTableMapPage();
            }).bind(this)
        }]);

        // Add the table text
        this.table = window.currTable;
        this.titleBar = new TitleBar(this.ref.find('.content-pane'), "Table " + this.table.number);
        /*
        $('.table-display').css('background', 'url(' + this.table.img + ') no-repeat center center');
        $('.table-display').css('background-size', '30%');
        */
        var tableDisplayAndGuests = $(`<div class="table-and-guests"></div>`);

        var tableDisplay = $(`<div class="table-display" align="center" style="position:relative"></div>`);
        $(tableDisplay).css('width', '100%');
        $(tableDisplay).css('height', '100%');
        // $(tableDisplay.find('img')).css('width', '100%');
        // $(tableDisplay.find('img')).css('max-width', '100px');     
        tableDisplay.appendTo(tableDisplayAndGuests);

        this.tableTopMargin = 55;
        var tableImgWrapper = $(`<div class="table-img-wrapper"></div>`)
        tableImgWrapper.appendTo($(tableDisplayAndGuests.find('.table-display')));
        var tableImg = $(`<img src="` + this.table.img + `" </img style="width:25%; outline: 5px solid black;">`);
        tableImg.appendTo(tableImgWrapper);
        tableImg.css('margin-top', this.tableTopMargin + '%');
        tableImg.css('margin-bottom', '30%');

        tableDisplayAndGuests.appendTo($(this.ref.find('.cool-content-pane')));

        // Add the table order card
        this.tableOrder = new TableOrder(this.ref.find('.cool-content-pane'), this.guests);

        var guestsEl = $(`<div class="guest-icons"></div>`);
        // Add the guests
        GuestIcon.num = 0;
        this.guests = [];
        this.guestIcons = [];   // guestIcons represents the icons for the guests seated around the tables, while 
                                // guests represents their orders
        this.guestOrders = [];  // I can't wait for 11:59PM

        // TODO: match the number of guests at the table to the number of guests displayed in the table map
        for (var i = 0; i < MAX_GUESTS; i++) {
            // Randomly get an icon, and add a guest with that icon
            var iconIndex = Math.floor(Math.random() * 16);
            var icon = window.DB.getIconByName("customer" + iconIndex);

            this.guests.push(new GuestOrder(icon, []));
            this.guestIcons.push(new GuestIcon($(guestsEl), this.guests[this.guests.length - 1]));
            this.guestOrders.push(new NotBill(this.ref.find('.table-order'), this.guests[i]));

            this.guestIcons[i].ref.find('img').click(cbc(this, i, function(p, i) {
                window.appPage.destroy();
                window.currOrder = p.guests[i];
                window.createorderingPage();
            }));
        }

        guestsEl.appendTo(tableDisplayAndGuests.find('.table-display'));

        // Conditional formatting, based on the table's state
        if (this.table.state == 'available' || this.table.state == 'taken') {
            // var guestCounter = $(`<div class="guest-counter" align="bottom" style="width:100%">`);
            // guestCounter.appendTo($(el.find('.table-order')));

            // What does this do????
            this.guestCounter = new ItemCounter('.guest-icons', 0, 0, MAX_GUESTS, '🪑');  // i need  emogies
            this.guestCounter.incrBtn.click(this.addGuest.bind(this));
            this.guestCounter.decrBtn.click(this.removeGuest.bind(this));
            this.ref.find('item-counter').css('width', '100%');
            if (this.table.state == 'taken') {
                var numGuests = window.currTable.guestOrders.length;
                this.guestCounter.count = numGuests;
                for (var i = 0; i < numGuests; i++) {
                    this.guestIcons[i].show();
                    // 😭
                    this.guestOrders[i].show();
                }
            }
        }

        // Bind what this page should do on resize
        window.onResize = this.onResize.bind(this);
        this.onResize();
    }

    // Removes the contents on the page and resets variables in window
    destroy() {
        this.ref.remove();
        window.singleTablePage = undefined;
        window.onResize = undefined;
    }

    // Adds a guest to the table 
    addGuest() {
        // Well, reveals a guest. Same thing
        this.guestIcons[this.guestCounter.count - 1].show();
        this.guestOrders[this.guestCounter.count - 1].show();

        // this.tableTopMargin -= GuestIcon.getIconWidth();
        // this.tableImg.css('margin-top', this.tableTopMargin + '%');
        
    }

    // Removes a guest from the table 
    removeGuest() {
        // If the guest has an (non-empty) order, ask for confirmation before removing them
        //uhhh that's a TODO
        this.guestIcons[this.guestCounter.count].hide();
        this.guestOrders[this.guestCounter.count].hide();

        // this.tableTopMargin += GuestIcon.getIconWidth();
        // this.tableImg.css('margin-top', this.tableTopMargin + '%');
        // this.guests.pop();
        // this.guestIcons[this.guestIcons.length - 1].remove();
        // this.guestIcons.pop();
    }

    // Dynamic sizes yeah
    onResize() {
        //navbar stuff
        if (window.isLandscape()) {
            this.navbar.ref.show();
            this.ref.find('.content-pane').css('width', '80%');
            this.titleBar.hideHamburger();
        } else {
            if (!this.titleBar.showSidebar)
                this.titleBar.hideSidebar();
            this.ref.find('.content-pane').css('width', '100%');
            this.titleBar.showHamburger();
       }

        if(this.guestCounter) {
            this.guestCounter.resize();
        }
    }
}
