export const state = () =>({
    memo: [],
    page: 0,
})

export const mutations = {
    insert: function(state, obj) {
        let d = new Date();
        let time = {
            'year': d.getFullYear(),
            'month': d.getMonth(),
            'date': d.getDate(),
            'hour': d.getHours(),
            'minite': d.getMinutes(),
            'second': d.getSeconds()
        };
        let fmt = "";
        for (const key in time) {
            if (time.hasOwnProperty(key)) {
                let i = time[key].padStart(2, '0');
                fmt.concat('/', i);
            }
        }
        state.memo.unshift({
            title: obj.title,
            content: obj.content,
            created: fmt,
        });
    },
    set_page: function(state, p){
        state.page = p;
    },
    remove: function(state,obj){
        let num = 0;
        for (let i = 0; i < state.memo.length; i++) {
            const stateObj = state.memo[i];
            if (stateObj.title === obj.title){
                alert('remove this memo? --title:' + stateObj.title);
                stete.memo.splice(i, 1);
                return;
            }
            
        }
    }
}