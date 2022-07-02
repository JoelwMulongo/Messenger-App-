import classNames from "classnames";
import { useAuthState } from "../context/auth";
import dayjs from "dayjs";
import { Button, OverlayTrigger, Popover, Tooltip } from "react-bootstrap";
import { useState } from "react";
import { REACT_TO_MESSAGE } from "../constants/graphql/mutations";
import { useMutation } from "@apollo/client";

const Message = ({ message }) => {
  const reactions = ["❤️", "😆", "😯", "😢", "😡", "👍", "👎"];

  const [reactToMessage] = useMutation(REACT_TO_MESSAGE, {
    onCompleted(data) {
      setShowPopOver(false);
    },
    onError(error) {
      console.log(error);
    },
  });

  
              >
                {reaction}
              </Button>
            ))}
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="link" className="px-2">
        <i className="far fa-smile"></i>
      </Button>
    </OverlayTrigger>
  );

  return (
    <div
      className={classNames("d-flex my-3", {
        "ml-auto": sent,
        "mr-auto": received,
      })}
    >
      {sent && reactButton}
      <OverlayTrigger
        placement={placement}
        overlay={
          <Tooltip>
            {dayjs(message.createdAt).format("MMM DD, YYYY @ h:mm a")}
          </Tooltip>
        }
        transition={false}
      >
        <div
          className={classNames("py-2 px-3 rounded-pill position-relative", {
            "bg-primary": sent,
            "bg-secondary": received,
          })}
        >
          {message.reactions.length > 0 && (
            <div className="reactions-cell bg-secondary p-1 rounded-pill">
              {reactedIcons} {message.reactions.length}
            </div>
          )}
          <p
            className={classNames({
              "text-white": sent,
            })}
          >
            {message.content}
          </p>
        </div>
      </OverlayTrigger>
      {received && reactButton}
    </div>
  );
};

export default Message;
