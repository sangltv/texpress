import * as M from "@mui/material"
import styled from "@emotion/styled"
console.log(M)
const _css = p => {
    const _a = [
        "animation",
        "animationName",
        "animationDuration",
        "animationDelay",
        "animationIterationCount",
        "animationDirection",
        "animationTimingFunction",
        "animationFillMode",
        "alignContent",
        "alignItems",
        "alignSelf",
        "aspectRatio",
        "backfaceVisibility",
        "backgroundColor",
        "borderBottomColor",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderBottomWidth",
        "borderColor",
        "borderLeftColor",
        "borderLeftWidth",
        "borderRadius",
        "borderRightColor",
        "borderRightWidth",
        "borderStyle",
        "borderTopColor",
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderTopWidth",
        "borderWidth",
        "bottom",
        "color",
        "cursor",
        "decomposedMatrix",
        "direction",
        "display",
        "elevation",
        "flex",
        "flexBasis",
        "flexDirection",
        "flexGrow",
        "flexShrink",
        "flexWrap",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "height",
        "includeFontPadding",
        "justifyContent",
        "left",
        "letterSpacing",
        "lineHeight",
        "margin",
        "marginBottom",
        "marginHorizontal",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginVertical",
        "maxHeight",
        "maxWidth",
        "minHeight",
        "minWidth",
        "opacity",
        "overflow",
        "overlayColor",
        "padding",
        "paddingBottom",
        "paddingHorizontal",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingVertical",
        "position",
        "resizeMode",
        "right",
        "rotation",
        "scaleX",
        "scaleY",
        "shadowColor",
        "shadowOffset",
        "shadowOpacity",
        "shadowRadius",
        "textAlign",
        "textAlignVertical",
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle",
        "textShadowColor",
        "textShadowOffset",
        "textShadowRadius",
        "tintColor",
        "top",
        "transform",
        "transformMatrix",
        "translateX",
        "translateY",
        "width",
        "writingDirection",
        "zIndex",
        "border",
        "boxShadow",
        "flexFlow",
        "font",
        "textShadow",
        "textDecoration",
        "textDecorationLine",
        "transform",
        "bg",
        "size",
        "m", "mt", "mb", "ml", "mr", "mx", "my",
        "p", "pt", "pb", "pl", "pr", "px", "py",
        "backgroundImage",
        "backgroundSize",
        "backgroundPosition",
        "backgroundRepeat",
        "background",
        "backgroundAttachment",
        "backgroundClip",
        "backgroundOrigin",
        "overflow",
        "transition",
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction",
        "grid",
        "gridArea",
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridColumn",
        "gridColumnEnd",
        "gridColumnGap",
        "gridColumnStart",
        "gridGap",
        "gridRow",
        "gridRowEnd",
        "gridRowGap",
        "gridRowStart",
        "gridTemplate",
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
    ]

    const _c = k => {
        switch (k) {
            case "bg": return "backgroundColor";
            case "m": return "margin";
            case "mt": return "marginTop";
            case "mr": return "marginRight";
            case "mb": return "marginBottom";
            case "ml": return "marginLeft";
            case "mx": return "marginX";
            case "my": return "marginY";
            case "p": return "padding";
            case "pt": return "paddingTop";
            case "pr": return "paddingRight";
            case "pb": return "paddingBottom";
            case "pl": return "paddingLeft";
            case "px": return "paddingX";
            case "py": return "paddingY";
            default: return k;
        }
    }

    return Object.keys(p)
        .filter(key => _a.includes(key))
        .filter(key => p[key] !== true)
        .filter(key => p[key] !== null)
        .reduce((obj, key) => {
            if (key === "size") {
                obj["width"] = p[key]
                obj["height"] = p[key]
            } else {
                obj[_c(key)] = p[key];
            }
            return obj;
        }, {});
}

const Mbox = props => <M.Box {...props} sx={_css(props)} />

const Box = styled('div')(props => _css(props))

export const Div = (props) => <Mbox {...props}/>

export const Accordion = props => <Mbox as={M.Accordion} {...props} />
export const AccordionActions = props => <Mbox as={M.AccordionActions} {...props} />
export const AccordionDetails = props => <Mbox as={M.AccordionDetails} {...props} />
export const AccordionSummary = props => <Mbox as={M.AccordionSummary} {...props} />
export const Alert = props => <Mbox as={M.Alert} {...props} />
export const AlertTitle = props => <Mbox as={M.AlertTitle} {...props} />
export const AppBar = props => <Mbox as={M.AppBar} {...props} />
export const Autocomplete = props => <Mbox as={M.Autocomplete} {...props} />
export const Avatar = props => <Mbox as={M.Avatar} {...props} />
export const AvatarGroup = props => <Mbox as={M.AvatarGroup} {...props} />
export const Backdrop = props => <Mbox as={M.Backdrop} {...props} />
export const Badge = props => <Mbox as={M.Badge} {...props} />
export const BottomNavigation = props => <Mbox as={M.BottomNavigation} {...props} />
export const BottomNavigationAction = props => <Mbox as={M.BottomNavigationAction} {...props} />
export const Breadcrumbs = props => <Mbox as={M.Breadcrumbs} {...props} />
export const Button = props => <Mbox as={M.Button} {...props} />
export const ButtonBase = props => <Mbox as={M.ButtonBase} {...props} />
export const ButtonGroup = props => <Mbox as={M.ButtonGroup} {...props} />
export const Card = props => <Mbox as={M.Card} {...props} />
export const CardActionArea = props => <Mbox as={M.CardActionArea} {...props} />
export const CardActions = props => <Mbox as={M.CardActions} {...props} />
export const CardContent = props => <Mbox as={M.CardContent} {...props} />
export const CardHeader = props => <Mbox as={M.CardHeader} {...props} />
export const CardMedia = props => <Mbox as={M.CardMedia} {...props} />
export const Checkbox = props => <Mbox as={M.Checkbox} {...props} />
export const Chip = props => <Mbox as={M.Chip} {...props} />
export const CircularProgress = props => <Mbox as={M.CircularProgress} {...props} />
export const ClickAwayListener = props => <Mbox as={M.ClickAwayListener} {...props} />
export const Collapse = props => <Mbox as={M.Collapse} {...props} />
export const Container = props => <Mbox as={M.Container} {...props} />
export const CssBaseline = props => <Mbox as={M.CssBaseline} {...props} />
export const Dialog = props => <Mbox as={M.Dialog} {...props} />
export const DialogActions = props => <Mbox as={M.DialogActions} {...props} />
export const DialogContent = props => <Mbox as={M.DialogContent} {...props} />
export const DialogContentText = props => <Mbox as={M.DialogContentText} {...props} />
export const DialogTitle = props => <Mbox as={M.DialogTitle} {...props} />
export const Divider = props => <Mbox as={M.Divider} {...props} />
export const Drawer = props => <Mbox as={M.Drawer} {...props} />
export const Experimental_CssVarsProvider = props => <Mbox as={M.Experimental_CssVarsProvider} {...props} />
export const Fab = props => <Mbox as={M.Fab} {...props} />
export const Fade = props => <Mbox as={M.Fade} {...props} />
export const FilledInput = props => <Mbox as={M.FilledInput} {...props} />
export const FormControl = props => <Mbox as={M.FormControl} {...props} />
export const FormControlLabel = props => <Mbox as={M.FormControlLabel} {...props} />
export const FormGroup = props => <Mbox as={M.FormGroup} {...props} />
export const FormHelperText = props => <Mbox as={M.FormHelperText} {...props} />
export const FormLabel = props => <Mbox as={M.FormLabel} {...props} />
export const FormLabelRoot = props => <Mbox as={M.FormLabelRoot} {...props} />
export const GlobalStyles = props => <Mbox as={M.GlobalStyles} {...props} />
export const Grid = props => <Mbox as={M.Grid} {...props} />
export const Grow = props => <Mbox as={M.Grow} {...props} />
export const Hidden = props => <Mbox as={M.Hidden} {...props} />
export const Icon = props => <Mbox as={M.Icon} {...props} />
export const IconButton = props => <Mbox as={M.IconButton} {...props} />
export const ImageList = props => <Mbox as={M.ImageList} {...props} />
export const ImageListItem = props => <Mbox as={M.ImageListItem} {...props} />
export const ImageListItemBar = props => <Mbox as={M.ImageListItemBar} {...props} />
export const Input = props => <Mbox as={M.Input} {...props} />
export const InputAdornment = props => <Mbox as={M.InputAdornment} {...props} />
export const InputBase = props => <Mbox as={M.InputBase} {...props} />
export const InputLabel = props => <Mbox as={M.InputLabel} {...props} />
export const LinearProgress = props => <Mbox as={M.LinearProgress} {...props} />
export const Link = props => <Mbox as={M.Link} {...props} />
export const List = props => <Mbox as={M.List} {...props} />
export const ListItem = props => <Mbox as={M.ListItem} {...props} />
export const ListItemAvatar = props => <Mbox as={M.ListItemAvatar} {...props} />
export const ListItemButton = props => <Mbox as={M.ListItemButton} {...props} />
export const ListItemIcon = props => <Mbox as={M.ListItemIcon} {...props} />
export const ListItemSecondaryAction = props => <Mbox as={M.ListItemSecondaryAction} {...props} />
export const ListItemText = props => <Mbox as={M.ListItemText} {...props} />
export const ListSubheader = props => <Mbox as={M.ListSubheader} {...props} />
export const Menu = props => <Mbox as={M.Menu} {...props} />
export const MenuItem = props => <Mbox as={M.MenuItem} {...props} />
export const MenuList = props => <Mbox as={M.MenuList} {...props} />
export const MobileStepper = props => <Mbox as={M.MobileStepper} {...props} />
export const Modal = props => <Mbox as={M.Modal} {...props} />
export const ModalManager = props => <Mbox as={M.ModalManager} {...props} />
export const NativeSelect = props => <Mbox as={M.NativeSelect} {...props} />
export const NoSsr = props => <Mbox as={M.NoSsr} {...props} />
export const OutlinedInput = props => <Mbox as={M.OutlinedInput} {...props} />
export const Pagination = props => <Mbox as={M.Pagination} {...props} />
export const PaginationItem = props => <Mbox as={M.PaginationItem} {...props} />
export const Paper = props => <Mbox as={M.Paper} {...props} />
export const Popover = props => <Mbox as={M.Popover} {...props} />
export const Popper = props => <Mbox as={M.Popper} {...props} />
export const Portal = props => <Mbox as={M.Portal} {...props} />
export const Radio = props => <Mbox as={M.Radio} {...props} />
export const RadioGroup = props => <Mbox as={M.RadioGroup} {...props} />
export const Rating = props => <Mbox as={M.Rating} {...props} />
export const ScopedCssBaseline = props => <Mbox as={M.ScopedCssBaseline} {...props} />
export const Select = props => <Mbox as={M.Select} {...props} />
export const Skeleton = props => <Mbox as={M.Skeleton} {...props} />
export const Slide = props => <Mbox as={M.Slide} {...props} />
export const Slider = props => <Mbox as={M.Slider} {...props} />
export const SliderMark = props => <Mbox as={M.SliderMark} {...props} />
export const SliderMarkLabel = props => <Mbox as={M.SliderMarkLabel} {...props} />
export const SliderRail = props => <Mbox as={M.SliderRail} {...props} />
export const SliderRoot = props => <Mbox as={M.SliderRoot} {...props} />
export const SliderThumb = props => <Mbox as={M.SliderThumb} {...props} />
export const SliderTrack = props => <Mbox as={M.SliderTrack} {...props} />
export const SliderValueLabel = props => <Mbox as={M.SliderValueLabel} {...props} />
export const Snackbar = props => <Mbox as={M.Snackbar} {...props} />
export const SnackbarContent = props => <Mbox as={M.SnackbarContent} {...props} />
export const SpeedDial = props => <Mbox as={M.SpeedDial} {...props} />
export const SpeedDialAction = props => <Mbox as={M.SpeedDialAction} {...props} />
export const SpeedDialIcon = props => <Mbox as={M.SpeedDialIcon} {...props} />
export const Stack = props => <Mbox as={M.Stack} {...props} />
export const Step = props => <Mbox as={M.Step} {...props} />
export const StepButton = props => <Mbox as={M.StepButton} {...props} />
export const StepConnector = props => <Mbox as={M.StepConnector} {...props} />
export const StepContent = props => <Mbox as={M.StepContent} {...props} />
export const StepContext = props => <Mbox as={M.StepContext} {...props} />
export const StepIcon = props => <Mbox as={M.StepIcon} {...props} />
export const StepLabel = props => <Mbox as={M.StepLabel} {...props} />
export const Stepper = props => <Mbox as={M.Stepper} {...props} />
export const StepperContext = props => <Mbox as={M.StepperContext} {...props} />
export const StyledEngineProvider = props => <Mbox as={M.StyledEngineProvider} {...props} />
export const SvgIcon = props => <Mbox as={M.SvgIcon} {...props} />
export const SwipeableDrawer = props => <Mbox as={M.SwipeableDrawer} {...props} />
export const Switch = props => <Mbox as={M.Switch} {...props} />
export const Tab = props => <Mbox as={M.Tab} {...props} />
export const TabScrollButton = props => <Mbox as={M.TabScrollButton} {...props} />
export const Table = props => <Mbox as={M.Table} {...props} />
export const TableBody = props => <Mbox as={M.TableBody} {...props} />
export const TableCell = props => <Mbox as={M.TableCell} {...props} />
export const TableContainer = props => <Mbox as={M.TableContainer} {...props} />
export const TableFooter = props => <Mbox as={M.TableFooter} {...props} />
export const TableHead = props => <Mbox as={M.TableHead} {...props} />
export const TablePagination = props => <Mbox as={M.TablePagination} {...props} />
export const TableRow = props => <Mbox as={M.TableRow} {...props} />
export const TableSortLabel = props => <Mbox as={M.TableSortLabel} {...props} />
export const Tabs = props => <Mbox as={M.Tabs} {...props} />
export const TextField = props => <Mbox as={M.TextField} {...props} />
export const TextareaAutosize = props => <Mbox as={M.TextareaAutosize} {...props} />
export const ThemeProvider = props => <Mbox as={M.ThemeProvider} {...props} />
export const ToggleButton = props => <Mbox as={M.ToggleButton} {...props} />
export const ToggleButtonGroup = props => <Mbox as={M.ToggleButtonGroup} {...props} />
export const Toolbar = props => <Mbox as={M.Toolbar} {...props} />
export const Tooltip = props => <Mbox as={M.Tooltip} {...props} />
export const Typography = props => <Mbox as={M.Typography} {...props} />
export const Unstable_Grid2 = props => <Mbox as={M.Unstable_Grid2} {...props} />
export const Unstable_TrapFocus = props => <Mbox as={M.Unstable_TrapFocus} {...props} />
export const Zoom = props => <Mbox as={M.Zoom} {...props} />
//wait edit
export const P = props => <Mbox as={M.Typography} variant="body1" {...props} />
export const H1 = props => <Mbox as={M.Typography} variant="h1" {...props} />
export const H2 = props => <Mbox as={M.Typography} variant="h2" {...props} />
export const H3 = props => <Mbox as={M.Typography} variant="h3" {...props} />
export const H4 = props => <Mbox as={M.Typography} variant="h4" {...props} />
export const H5 = props => <Mbox as={M.Typography} variant="h5" {...props} />
export const H6 = props => <Mbox as={M.Typography} variant="h6" {...props} />

export const A = props => <Box as={'a'} {...props} />
export const Abbr = props => <Box as={'abbr'} {...props} />
export const Address = props => <Box as={'address'} {...props} />
export const Area = props => <Box as={'area'} {...props} />
export const Article = props => <Box as={'article'} {...props} />
export const Aside = props => <Box as={'aside'} {...props} />
export const Audio = props => <Box as={'audio'} {...props} />
export const B = props => <Box as={'b'} {...props} />
export const Base = props => <Box as={'base'} {...props} />
export const Bdi = props => <Box as={'bdi'} {...props} />
export const Bdo = props => <Box as={'bdo'} {...props} />
export const Blockquote = props => <Box as={'blockquote'} {...props} />
export const Body = props => <Box as={'body'} {...props} />
export const Br = props => <Box as={'br'} {...props} />
export const Canvas = props => <Box as={'canvas'} {...props} />
export const Caption = props => <Box as={'caption'} {...props} />
export const Cite = props => <Box as={'cite'} {...props} />
export const Code = props => <Box as={'code'} {...props} />
export const Col = props => <Box as={'col'} {...props} />
export const Colgroup = props => <Box as={'colgroup'} {...props} />
export const Data = props => <Box as={'data'} {...props} />
export const Datalist = props => <Box as={'datalist'} {...props} />
export const Dd = props => <Box as={'dd'} {...props} />
export const Del = props => <Box as={'del'} {...props} />
export const Details = props => <Box as={'details'} {...props} />
export const Dfn = props => <Box as={'dfn'} {...props} />
export const Dl = props => <Box as={'dl'} {...props} />
export const Dt = props => <Box as={'dt'} {...props} />
export const Em = props => <Box as={'em'} {...props} />
export const Embed = props => <Box as={'embed'} {...props} />
export const Fieldset = props => <Box as={'fieldset'} {...props} />
export const Figcaption = props => <Box as={'figcaption'} {...props} />
export const Figure = props => <Box as={'figure'} {...props} />
export const Footer = props => <Box as={'footer'} {...props} />
export const Form = props => <Box as={'form'} {...props} />

export const Head = props => <Box as={'head'} {...props} />
export const Header = props => <Box as={'header'} {...props} />
export const Hgroup = props => <Box as={'hgroup'} {...props} />
export const Hr = props => <Box as={'hr'} {...props} />
export const Html = props => <Box as={'html'} {...props} />
export const I = props => <Box as={'i'} {...props} />
export const Iframe = props => <Box as={'iframe'} {...props} />
export const Img = props => <Box as={'img'} {...props} />
export const Ins = props => <Box as={'ins'} {...props} />
export const Kbd = props => <Box as={'kbd'} {...props} />
export const Label = props => <Box as={'label'} {...props} />
export const Legend = props => <Box as={'legend'} {...props} />
export const Li = props => <Box as={'li'} {...props} />
export const Main = props => <Box as={'main'} {...props} />
export const Mark = props => <Box as={'mark'} {...props} />
export const Menuitem = props => <Box as={'menuitem'} {...props} />
export const Meta = props => <Box as={'meta'} {...props} />
export const Meter = props => <Box as={'meter'} {...props} />
export const Nav = props => <Box as={'nav'} {...props} />
export const Noscript = props => <Box as={'noscript'} {...props} />
export const Ol = props => <Box as={'ol'} {...props} />
export const Optgroup = props => <Box as={'optgroup'} {...props} />
export const Option = props => <Box as={'option'} {...props} />
export const Output = props => <Box as={'output'} {...props} />
export const Param = props => <Box as={'param'} {...props} />
export const Picture = props => <Box as={'picture'} {...props} />
export const Pre = props => <Box as={'pre'} {...props} />
export const Progress = props => <Box as={'progress'} {...props} />
export const Q = props => <Box as={'q'} {...props} />
export const Rb = props => <Box as={'rb'} {...props} />
export const Rp = props => <Box as={'rp'} {...props} />
export const Rt = props => <Box as={'rt'} {...props} />
export const Rtc = props => <Box as={'rtc'} {...props} />
export const Ruby = props => <Box as={'ruby'} {...props} />
export const S = props => <Box as={'s'} {...props} />
export const Samp = props => <Box as={'samp'} {...props} />
export const Script = props => <Box as={'script'} {...props} />
export const Section = props => <Box as={'section'} {...props} />
export const Slot = props => <Box as={'slot'} {...props} />
export const Small = props => <Box as={'small'} {...props} />
export const Source = props => <Box as={'source'} {...props} />
export const Span = props => <Box as={'span'} {...props} />
export const Strong = props => <Box as={'strong'} {...props} />
export const Style = props => <Box as={'style'} {...props} />
export const Sub = props => <Box as={'sub'} {...props} />
export const Summary = props => <Box as={'summary'} {...props} />
export const Sup = props => <Box as={'sup'} {...props} />
export const Svg = props => <Box as={'svg'} {...props} />
export const Tbody = props => <Box as={'tbody'} {...props} />
export const Td = props => <Box as={'td'} {...props} />
export const Template = props => <Box as={'template'} {...props} />
export const Textarea = props => <Box as={'textarea'} {...props} />
export const Tfoot = props => <Box as={'tfoot'} {...props} />
export const Th = props => <Box as={'th'} {...props} />
export const Thead = props => <Box as={'thead'} {...props} />
export const Time = props => <Box as={'time'} {...props} />
export const Title = props => <Box as={'title'} {...props} />
export const Tr = props => <Box as={'tr'} {...props} />
export const Track = props => <Box as={'track'} {...props} />
export const U = props => <Box as={'u'} {...props} />
export const Ul = props => <Box as={'ul'} {...props} />
export const Var = props => <Box as={'var'} {...props} />
export const Video = props => <Box as={'video'} {...props} />
export const Wbr = props => <Box as={'wbr'} {...props} />
