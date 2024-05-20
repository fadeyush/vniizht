interface TrainsCharacteristicsProps {
    speed: number;
    force: number;
    engineAmperage: number;
}

export interface TrainItemProps {
    name: string;
    description: string;
    characteristics: TrainsCharacteristicsProps[];
}

export interface TrainsListProps {
    trainsList: TrainItemProps[];
    isLoading: boolean;
    error: string;
}

export interface PayloadActionAdd {
    id: number;
    value: number;
    i: number;
}