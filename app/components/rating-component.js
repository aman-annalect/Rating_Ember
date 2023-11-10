import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RatingComponentComponent extends Component {
  @tracked rating = 0;
  @tracked seletedRating = 0;
  ratings = [1, 2, 3, 4, 5];
  @tracked showModal = false;
  @action
  changeRating() {
    this.rating = this.seletedRating;
    this.toggelModal();
  }
  @action
  changeSelectedRating(rating, e) {
    this.seletedRating = rating;
  }
  @action
  toggelModal() {
    this.showModal = !this.showModal;
  }
}
