import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export const NavBarMenuItems = [
  {'name': 'List tasks', 'href': 'list-tasks', 'icon': <FormatListBulletedIcon />},
  {'name': 'Add task', 'href': 'add-task', 'icon': <AddIcon />},
  {'name': 'Remove task', 'href': 'remove-task', 'icon': <DeleteIcon />},
  {'name': 'Edit task', 'href': 'edit-task', 'icon': <ModeEditIcon />}
];