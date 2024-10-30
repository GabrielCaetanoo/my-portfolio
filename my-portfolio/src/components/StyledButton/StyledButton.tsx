import { styled } from "@mui/material/styles"; // Importação do styled de um local diferente
import { ReactNode } from "react";
import { SxProps } from "@mui/material/styles";

interface StyledButtonProps {
    children: ReactNode;
    onClick: () => void;
    sx?: SxProps; // Alterado para usar SxProps
}

const CustomButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`, // Corrigido para usar crase
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    '&:hover': {
        backgroundColor: theme.palette.success.main,
    },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick, sx }) => {
    return (
        <CustomButton onClick={onClick} style={sx as React.CSSProperties}>
            {children}
        </CustomButton>
    );
};

export default StyledButton;
