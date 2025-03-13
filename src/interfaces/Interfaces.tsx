export interface buttonPropsTypes {
  title: string;
  onClick: () => void;
}

export interface InputPropsInterface {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface dataSetProps {
  item: string;
  _id: string;
  createdAt: string;
  updatedAt?: string;
  isCompleted?: boolean;
}

interface OptionDataset {
    item?: string;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
    isCompleted?:boolean
}

export interface ListsProps {
    data: OptionDataset[];
    onDelete:(_id:string)=>void;
    onUpdate:(id:string,text:string)=>void;
    markAsComplete:(_id:string)=>void;
  }

export interface ItemspropsInterface {
  data: OptionDataset;
  markAsComplete:Function
}

