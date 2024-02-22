export interface IExperiences {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface IProject {
  iconUrl: string;
  theme: string;
  name: string;
  description: string;
  link: string;
}
export type IPosition = [x: number, y: number, z: number];

export interface IGroup {
  position: IPosition;
  rotation: IPosition;
  scale: IPosition;
}

export interface IFox extends IGroup {
  currentAnimation: string;
}

export interface IPlane extends IGroup {
  isRotating: boolean;
}

export interface IIsland extends IPlane {
  setIsRotating: (value: boolean) => void;
  setCurrentStage: (value: number | null) => void;
}
