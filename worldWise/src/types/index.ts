export type CityType = {
    cityName:string;
    country:string;
    emoji:string;
    date:string;
    notes:string;
    position:{
        lat:number;
        lng:number
    }
    id?:string
}

export type CityListPropsType = {
    isLoading:boolean;
    cities:CityType[]
    currentCity:CityType
    getCity:(id:string)=>void
    deleteCity:(id:string)=>void
    createCity:(newCity:CityType)=>void
}

export type StateType = {
    cities:CityType[];
    isLoading:boolean;
    currentCity: CityType
}

 type CitiesLoaded={
    type:'cities/loaded'
    payload:CityType[]
}
 type CityCreated={
    type:'city/created',
    payload:CityType
}
 type CityDeleted={
    type:'city/deleted'
    payload:string
}

type Loading={
    type:'loading'
}

type Rejected={
    type:'rejected'
    payload:string
}

type CityLoaded={
    type:'city/loaded',
    payload:CityType
}



export type ActionType = CitiesLoaded | CityCreated | CityDeleted | Loading | Rejected | CityLoaded