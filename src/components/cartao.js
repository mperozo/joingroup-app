import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { blueGrey } from '@material-ui/core/colors';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  azul: {
    color: '#3949ab',
    backgroundColor: blueGrey[100],
  }
});

export default function Cartao(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openUserMenu = Boolean(anchorEl);
  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.azul}>
            <WhatsAppIcon />
          </Avatar>
        }
        title="Campanha"
        action={
          <>
            <IconButton aria-label="settings"
              onClick={handleUserMenuOpen}
              aria-controls="menu-campanhas"
              aria-haspopup="true">
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu-campanhas"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openUserMenu}
              onClose={handleUserMenuClose}
            >
              <MenuItem>
                <EditIcon />
              </MenuItem>
              <MenuItem onClick={e => props.deleteAction(props.idCampanha)}>
                <DeleteIcon />
              </MenuItem>
            </Menu>
          </>
        }
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.titulo}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.nome}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.url}
        </Typography>
        <Typography variant="body2" component="p">
          {props.descricao}
        </Typography>
      </CardContent>
      <CardActions>
        {props.children}
      </CardActions>
    </Card>
  );
}