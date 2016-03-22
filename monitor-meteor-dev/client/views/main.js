Template.body.helpers({
    entries: function () {
        var _regex = new RegExp(Session.get("search_query")||"", "i" );
        return Entries.find({'name': _regex});
    }
});

Template.body.events({
    'keyup #search': function() {
        Session.set("search_query", $("#search").val());
    },
    'input input.the-title, change input.the-title': _.debounce(function (evt) {
        var _nam = $(evt.target).val();
        Entries.update(this._id,{$set:{date: _nam}});
    }, 350)
});