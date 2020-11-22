export const state = () =>({
    memo: [],
    page: 0,
})

export const mutations = {
    insert: function(state, obj) {
        let d = new Date();
        let time = {
            'year': (d.getFullYear()),
            'month': d.getMonth(),
            'date': d.getDate(),
            'hour': ("00" + d.getHours()).slice(-2),
            'minite': ("00" + d.getMinutes()).slice(-2),
            'second': ("00" + d.getSeconds()).slice(-2)
        };
        let fmt = time.year + "/" + time.month + "/" + time.date + " " + time.hour + ":" + time.minite + ":" + time.second;
        
        state.memo.unshift({
            title: obj.title,
            content: obj.content,
            created: fmt,
        });
        console.log(state.memo)
    },
    set_page: function(state, p){
        state.page = p;
    },
    remove: function(state,obj){
        for (let i = 0; i < state.memo.length; i++) {
            const stateObj = state.memo[i];
            if (stateObj.title === obj.title){
                alert('remove this memo? --title:' + stateObj.title);
                state.memo.splice(i, 1);
                return;
            }
        }
    }
}