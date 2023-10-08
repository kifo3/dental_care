<template>
    <div >
        <ejs-schedule height='550px' width='100%' currentView="Week" :selectedDate='selectedDate'
                      :eventSettings='eventSettings'>
            <e-views>
                <e-view option='Day'></e-view>
                <e-view option='Week' startHour='08:00' endHour='17:00'></e-view>
                <e-view option='WorkWeek' startHour='08:00' endHour='17:00'></e-view>
                <e-view option='Month' showWeekend=false></e-view>
                <e-view option='Agenda'></e-view>
            </e-views>
            <e-resources>
                <e-resource field="OwnerId" title="Owner" name="Owners" :dataSource="ownerDataSource"
                            textField="OwnerText" idField="Id" colorField="OwnerColor">
                </e-resource>
            </e-resources>
        </ejs-schedule>
    </div>
</template>
<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective } from "@syncfusion/ej2-vue-schedule";

export default {
    name: "MakeAppointment",
// Declaring component and its directives
    components: {
        'ejs-schedule': ScheduleComponent,
        'e-views': ViewsDirective,
        'e-view': ViewDirective,
        'e-resources': ResourcesDirective,
        'e-resource': ResourceDirective
    },
// Bound properties declaration
    data() {
        return {
            selectedDate: new Date(2022, 8, 22),
            allowMultiple: true,
            ownerDataSource: [
                { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
                { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
                { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }],
            eventSettings: {
                dataSource: [
                    {
                        Id: 1,
                        Subject: 'Surgery - Andrew',
                        EventType: 'Confirmed',
                        StartTime: new Date(2022, 8, 22, 9, 0),
                        EndTime: new Date(2022, 8, 22, 10, 0),
                        OwnerId: 2
                    },
                    {
                        Id: 2,
                        Subject: 'Consulting - John',
                        EventType: 'Confirmed',
                        StartTime: new Date(2022, 8, 21, 10, 0),
                        EndTime: new Date(2022, 8, 21, 11, 30),
                        OwnerId: 3
                    },
                    {
                        Id: 3,
                        Subject: 'Therapy - Robert',
                        EventType: 'Requested',
                        StartTime: new Date(2022, 8, 22, 11, 30),
                        EndTime: new Date(2022, 8, 22, 12, 30),
                        OwnerId: 1
                    }
                ],
                name: null,
                event: null,
                startTime: null,
                endTime: null,

            },
        };
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]
    }
};
</script>

<style>

</style>