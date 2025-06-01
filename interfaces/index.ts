//type for CardProps
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

//type for ButtonProps
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}