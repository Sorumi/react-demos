/**
 * Created by Sorumi on 17/4/20.
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Form, Input } from 'antd';

class UserModal extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    const { dispatch, actionType, id } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: actionType,
          payload: {id, values},
          onComplete: this.handleComplete
      })
        ;
        this.setState({
          ModalText: 'loading',
          confirmLoading: true,
        });
      }
    });
  };

  handleCancel = () => {
    //console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  handleComplete = ()=> {
    console.log("complete")
    this.setState({
      ModalText: '',
      confirmLoading: false,
      visible: false,
    });
    this.handleReset();
  };

  render() {
    const FormItem = Form.Item;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    const { getFieldDecorator } = this.props.form;
    const { name, address, website } = this.props.record;
    const children = this.props.children;
    return (
      <div>
        <span onClick={this.showModal}>
          { children }
        </span>
        <Modal title="New User"
               visible={this.state.visible}
               onOk={this.handleOk}
               confirmLoading={this.state.confirmLoading}
               onCancel={this.handleCancel}
        >

          <Form layout="horizontal" onSubmit={this.handleOk}>
            <FormItem
              {...formItemLayout}
              label="姓名"
            >
              {
                getFieldDecorator('name', {
                  rules: [{required: true, message: 'Please input name!'}],
                  initialValue: name,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="住址"
            >
              {
                getFieldDecorator('address', {
                  rules: [{required: true, message: 'Please input address!'}],
                  initialValue: address,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="网站"
            >
              {
                getFieldDecorator('website', {
                  rules: [{required: true, message: 'Please input website!'}],
                  initialValue: website,
                })(<Input />)
              }
            </FormItem>
          </Form>

        </Modal>
      </div>
    );
  }
}

export default connect()(Form.create()(UserModal));
