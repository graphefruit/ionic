// Components
export * from './components/action-sheet/action-sheet';

export { ActionSheetController } from './components/action-sheet-controller/action-sheet-controller';
export * from './components/alert/alert';
export { AlertController } from './components/alert-controller/alert-controller';
export {
  Animation,
  AnimationBuilder,
  AnimationController,
} from './components/animation-controller/animation-interface';
export { App } from './components/app/app';
export { Avatar } from './components/avatar/avatar';
export { BackButton } from './components/back-button/back-button';
export { Backdrop } from './components/backdrop/backdrop';
export { Badge } from './components/badge/badge';
export { Button } from './components/button/button';
export { Buttons } from './components/buttons/buttons';
export { Card } from './components/card/card';
export { CardContent } from './components/card-content/card-content';
export { CardHeader } from './components/card-header/card-header';
export { CardTitle } from './components/card-title/card-title';
export { Checkbox } from './components/checkbox/checkbox';
export { Chip } from './components/chip/chip';
export { ChipButton } from './components/chip-button/chip-button';
export { Col } from './components/col/col';
export { Content } from './components/content/content';
export { Datetime } from './components/datetime/datetime';
export { Fab } from './components/fab/fab';
export { FabList } from './components/fab-list/fab-list';
export { FabButton } from './components/fab-button/fab-button';
export { Footer } from './components/footer/footer';
export { Gesture, GestureCallback, GestureDetail } from './components/gesture/gesture';
export { PanRecognizer } from './components/gesture/recognizers';
export { GestureController } from './components/gesture-controller/gesture-controller';
export * from './components/gesture-controller/gesture-controller-utils';
export { Grid } from './components/grid/grid';
export { Header } from './components/header/header';
export { InfiniteScroll } from './components/infinite-scroll/infinite-scroll';
export { InfiniteScrollContent } from './components/infinite-scroll-content/infinite-scroll-content';
export { Input } from './components/input/input';
export { Item } from './components/item/item';
export { ItemDivider } from './components/item-divider/item-divider';
export { ItemOption } from './components/item-option/item-option';
export { ItemSliding } from './components/item-sliding/item-sliding';
export { Label } from './components/label/label';
export { List } from './components/list/list';
export { ListHeader } from './components/list-header/list-header';
export * from './components/loading/loading';
export { LoadingController } from './components/loading-controller/loading-controller';
export { Menu } from './components/menu/menu';
export {
  MenuController,
  MenuOverlayAnimation,
  MenuPushAnimation,
  MenuRevealAnimation
} from './components/menu-controller/menu-controller';
export * from './components/modal/modal';
export { ModalController } from './components/modal-controller/modal-controller';
export * from './components/nav/nav';
export { ViewController } from './components/nav/view-controller';
export { NavParams, NavOptions, TransitionDoneFn} from './components/nav/nav-util';
export { Note } from './components/note/note';
export { PickerColumnCmp } from './components/picker-column/picker-column';
export * from './components/picker/picker';
export { PickerController } from './components/picker-controller/picker-controller';
export * from './components/popover/popover';
export { PopoverController } from './components/popover-controller/popover-controller';
export { RadioGroup } from './components/radio-group/radio-group';
export { Radio, HTMLIonRadioElementEvent } from './components/radio/radio';
export { Range, RangeEvent } from './components/range/range';
export { RangeKnob } from './components/range-knob/range-knob';
export { ReorderGroup, reorderArray } from './components/reorder-group/reorder-group';
export {
  RouteNode,
  RouteTree,
  NavOutlet
} from './components/router/utils/interfaces';
export { Row } from './components/row/row';
export { Reorder } from './components/reorder/reorder';
export { Scroll } from './components/scroll/scroll';
export { Searchbar } from './components/searchbar/searchbar';
export { Segment } from './components/segment/segment';
export { SegmentButton } from './components/segment-button/segment-button';
export { SelectPopoverOption, SelectPopover } from './components/select-popover/select-popover';
export { Select } from './components/select/select';
export { SelectOption } from './components/select-option/select-option';
export { SkeletonText } from './components/skeleton-text/skeleton-text';
export { Slide } from './components/slide/slide';
export { Slides } from './components/slides/slides';
export * from './components/spinner/spinner-configs';
export { Spinner } from './components/spinner/spinner';
export { SplitPane } from './components/split-pane/split-pane';
export { Tab } from './components/tab/tab';
export { TabButton } from './components/tab-button/tab-button';
export { Tabs } from './components/tabs/tabs';
export { Thumbnail } from './components/thumbnail/thumbnail';
export { ToolbarTitle } from './components/title/title';
export * from './components/toast/toast';
export { ToastController } from './components/toast-controller/toast-controller';
export { Toggle } from './components/toggle/toggle';
export { Toolbar } from './components/toolbar/toolbar';

export { PlatformConfig } from './global/platform-configs';

// export all of the component declarations that are dynamically created
export * from './components';

export { DomController, RafCallback } from './global/dom-controller';
export { FrameworkDelegate } from './utils/framework-delegate';
export { OverlayEventDetail } from './utils/overlays';

export interface Config {
  get: (key: string, fallback?: any) => any;
  getBoolean: (key: string, fallback?: boolean) => boolean;
  getNumber: (key: string, fallback?: number) => number;
}

export type CssClassMap = { [className: string]: boolean };

export interface BaseInputComponent {
  disabled: boolean;
  hasFocus: boolean;
  value: string;

  fireFocus: () => void;
  fireBlur: () => void;
}

declare global {

  namespace JSXElements {

    export interface DOMAttributes {
      // for ion-menu and ion-split-pane
      main?: boolean;

      padding?: boolean;
      ['padding-top']?: boolean;
      ['padding-bottom']?: boolean;
      ['padding-left']?: boolean;
      ['padding-right']?: boolean;
      ['padding-horizontal']?: boolean;
      ['padding-vertical']?: boolean;

      margin?: boolean;
      ['margin-top']?: boolean;
      ['margin-bottom']?: boolean;
      ['margin-left']?: boolean;
      ['margin-right']?: boolean;
      ['margin-horizontal']?: boolean;
      ['margin-vertical']?: boolean;

      ['no-padding']?: boolean;
      ['no-margin']?: boolean;
    }
  }
}
