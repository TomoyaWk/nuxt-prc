<template>
    <div class="column is-10">
        <section class="card">
            <div class="card-header">
                <h1 class="card-header-title">Memo</h1>
            </div>
            <div class="card-content">
                    <div class="field has-addons">
                        <div class="control">
                            <input type="text" name="title" class="input" v-model="title" @focus="set_flg" placeholder="title">
                        </div>
                        <div class="control">
                            <button @click="find" class="button is-info">find</button>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="label">content</label>
                            <textarea name="content" class="textarea" v-model="content" placeholder="content" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link" @click="insert">Save</button>
                            <transition name="del">
                                <button class="button is-link is-light" v-if="sel_flg != false" @click="remove">delete</button>
                            </transition>
                        </div>
                    </div>
            </div>
        </section>
        
        <hr>
        <ul>
            <li v-for="item in page_items" :key="item.title">
                <span @click="select(item)">
                    {{ item.title }}  ({{ item.created }})
                </span>
            </li>
        </ul>

        <hr>
        <div class="nav">
            <span @click="prev">&lt; prev</span>
            <span @click="next">next &gt;</span>
        </div>
    </div>
</template>


<script>

    export default {
        data: ()=>{
            return {
                title: '',
                content: '',
                num_per_page: 7,
                find_flg: false, //検索フラグ
                sel_flg: false,　//選択フラグ
            };
        },
        computed: {
            /**
             * memo取得
             */
            memo: function(){
                return this.$store.state.memo.memo;
            },
            /**
             * リスト部に表示されるメモ配列取得
             * 
             */
            page_items: function(){ 
                if (this.find_flg){
                    //検索表示
                    let ary = [];
                    let data = this.$store.state.memo.memo;
                    data.forEach(element => {
                        if (element.title.toLowerCase().indexOf(this.title.toLowerCase()) >= 0){
                            ary.push(element);
                        }
                    });
                } else if(this.sel_flg != false){
                    //項目選択時表示
                    return [this.sel_flg];
                } else {
                    //それ以外
                    return this.$store.state.memo.memo.slice(
                        this.num_per_page * this.$store.state.memo.page,
                        this.num_per_page * (this.$store.state.memo.page + 1)
                    );
                }
            },
            page: {
                get: function(){
                    return this.$store.state.memo.page;
                },
                set: function(p){
                    let pg = p > (this.$store.state.memo.memo.length - 1) / this.num_per_page ? Math.ceil((this.$store.state.memo.memo.length - 1) / this.num_per_page) -1 : p;
                    pg = pg < 0 ? 0 : pg;
                    this.$store.commit('memo/set_page', pg);
                }
            }
        },
        methods: {
            /**
             * 初期フラグ設定
             */
            set_flg: function(){
                if (this.find_flg || this.sel_flg != false) {
                    this.find_flg = false;
                    this.sel_flg = false;
                    this.title = '';
                    this.content = '';
                }
            },
            /** 
             * 新規メモ追加
             * 
             */
            insert: function(){
                this.$store.commit('memo/insert', {title:this.title, content:this.content});
                this.title = '';
                this.content = '';
            },
            /**
             * メモクリック時選択状態に変更
             * 
             */
            select: function(item){
                this.find_flg = false;
                this.sel_flg = item;
                this.title = item.title;
                this.content = item.content;
            },
            /**
             * メモ削除処理
             * 
             */
            remove: function(){
                if (this.sel_flg == false) {
                    return ;
                } else {
                    this.$store.commit('memo/remove', this.sel_flg);
                    this.set_flg();
                }
            },
            find: function(){
                this.sel_flg = false;
                this.find_flg = true;
            },
            next: function(){
                this.page++;
            },
            prev: function(){
                this.page--;
            }
        },
        created: function(){
            this.$store.commit('memo/set_page', 0);
        }
    }
</script>