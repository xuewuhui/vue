export default {
    template: `<nav class="tm">
        <span class="pagination-total">共<em>{{pagination.total}}</em>个</span>
        <ul class="pagination" :class="sizeClass">
            <li v-if="showPrevious()" :class="{ 'disabled' : pagination.current_page <= 1 }">
                <span v-if="pagination.current_page <= 1">
                    <span aria-hidden="true">{{ config.previousText }}</span>
                </span>
                
                <a href="#" v-if="pagination.current_page > 1 " :aria-label="config.ariaPrevioius" @click.prevent="changePage(pagination.current_page - 1)">
                    <span aria-hidden="true">{{ config.previousText }}</span>
                </a>
            </li>

            <li v-for="num in array" :class="{ 'active': num === pagination.current_page }">
                <a href="#" @click.prevent="changePage(num)">{{ num }}</a>
            </li>

            <li v-if="showNext()" :class="{ 'disabled' : pagination.current_page === pagination.last_page || pagination.last_page === 0 }">
                <span v-if="pagination.current_page === pagination.last_page || pagination.last_page === 0">
                    <span aria-hidden="true">{{ config.nextText }}</span>
                </span>
                
                <a href="#" v-if="pagination.current_page < pagination.last_page" :aria-label="config.ariaNext" @click.prevent="changePage(pagination.current_page + 1)">
                    <span aria-hidden="true">{{ config.nextText }}</span>
                </a>
            </li>
        </ul>
        <div class="pagination-search">
            <div class="input-group">
                <input v-model="pageIndex" type="text" class="form-control">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button" @click="serachPage">{{config.searchText}}</button>
                </span>
            </div>           
        </div>
    </nav>`,
    data () {
        return {
            pageIndex : null
        }        
    },
    props: {
        pagination: {
            type: Object,
            required: true
        },
        callback: {
            type: Function,
            required: true
        },
        options: {
            type: Object
        },
        size: {
            type: String
        }
    },
    computed: {
        array () {
            if (this.pagination.last_page <= 0) {
                return [1];
            }

            let from = this.pagination.current_page - this.config.offset;
            if (from < 1) {
                from = 1;
            }

            let to = from + (this.config.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }

            let arr = [];
            while (from <=to) {
                arr.push(from);
                from++;
            }
            return arr;
        },
        config () {
            return Object.assign({
                offset: 3,
                ariaPrevious: 'Previous',
                ariaNext: 'Next',
                previousText: '«',
                nextText: '»',
                searchText: 'Search',
                alwaysShowPrevNext: false
            }, this.options);
        },
        sizeClass () {
            if (this.size === 'large') {
                return 'pagination-lg';
            } else if(this.size === 'small') {
                return 'pagination-sm';
            } else {
                return '';
            }
        }
    },
    methods: {
        showPrevious () {
            return this.config.alwaysShowPrevNext || this.pagination.current_page > 1;
        },
        showNext () {
            return this.config.alwaysShowPrevNext || this.pagination.current_page < this.pagination.last_page;
        },
        changePage (page) {
            if (this.pagination.current_page === page) {
                return;
            }
            this.$set(this.pagination, 'current_page', page);
            this.callback();
        },
        serachPage () {
            let page_index = parseInt(this.pageIndex);
            if(!page_index || (page_index > this.pagination.last_page)) return
            this.changePage(page_index)
            this.pageIndex = null
        }
    }
};
