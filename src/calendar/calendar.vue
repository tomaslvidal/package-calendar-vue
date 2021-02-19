<template>
    <v-calendar
                    :attributes="attributes"
                    :min-date="min_date"
                    :max-date="max_date"
                    is-expanded
                >
        <template
            slot="day-popover"
            slot-scope="{ day, dayTitle, attributes }"
        >
            <div class="text-xs text-gray-300 font-semibold text-center">
            {{ dayTitle }}
            </div>

            <ul>
                <li
                    v-for="{key, customData} in attributes"
                    :key="key"
                    v-html="customData.html"
                >
                </li>
            </ul>
        </template>
    </v-calendar>
</template>

<script>
    import Calendar from 'v-calendar/lib/components/calendar.umd';

    export default {
        components: {
            'v-calendar': Calendar
        },
        created(){
            this.$store.dispatch('Home/GET_RESERVATIONS');
        },
        methods:{
            randomColor(){
                let items = ['bg-red', 'bg-bluee', 'bg-green'];

                return items[Math.floor(Math.random() * items.length)];
            }
        },
        computed: {
            max_date(){
                let date = new Date();

                date.setMonth(date.getMonth() + 6);

                return date;
            },
            min_date(){
                return new Date();
            },
            attributes(){
                return this.$store.state.Home.data.reservations.map((item, key) => {
                    return {
                        key: key + 1,
                        customData: {
                            html: `
                                <div style="display: flex; align-items: center; font-size: 13px; margin-top: 2px; flex-direction: column;">
                                    <b style="padding-right: 5px;">
                                        Código de Reserva:
                                    </b>
                                    
                                    <span style="color: #45d879d4;">
                                        ${item.pnrcode}
                                    </span>

                                    <b style="padding-right: 5px;">
                                        Empresa:
                                    </b>
                                    
                                    <span style="color: #45d879d4;">
                                        ${item.nombre_empresa} (${item.id_agencia})
                                    </span>

                                    <b style="padding-right: 5px;">
                                        Pasajeros:
                                    </b>
                                    
                                    <span style="color: #45d879d4;">
                                        ${item.paxs}
                                    </span>
                                </div>
                            `
                        },
                        dot: {
                            color: 'green'
                        },
                        dates: new Date(item.fecha_salida),
                        popover: {
                            visibility: 'click'
                        }
                    }
                });
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .calendario{
        max-width: 635px;
    }

    @import './calendar.css';
    
    ::-webkit-scrollbar {
        width: 0px;
    }

    ::-webkit-scrollbar-track {
        display: none;
    }

    /deep/ .custom-calendar.vc-container {
        --day-border: 1px solid #b8c2cc;
        --day-border-highlight: 1px solid #b8c2cc;
        --day-width: 90px;
        --day-height: 90px;
        --weekday-bg: #f8fafc;
        --weekday-border: 1px solid #eaeaea;
        border-radius: 0;
        width: 100%;

        & .vc-header {
            background-color: #f1f5f8;
            padding: 10px 0;
        }

        & .vc-weeks {
            padding: 0;
        }

        & .vc-weekday {
            background-color: var(--weekday-bg);
            border-bottom: var(--weekday-border);
            border-top: var(--weekday-border);
            padding: 5px 0;
        }

        & .vc-day {
            padding: 0 5px 3px 5px;
            text-align: left;
            height: var(--day-height);
            min-width: var(--day-width);
            background-color: white;
            
            &.weekday-1, &.weekday-7 {
                background-color: #eff8ff;
            }

            &:not(.on-bottom) {
                border-bottom: var(--day-border);

                &.weekday-1 {
                    border-bottom: var(--day-border-highlight);
                }
            }

            &:not(.on-right) {
                border-right: var(--day-border);
            }
        }

        & .vc-day-dots {
            margin-bottom: 5px;
        }
    }
</style>